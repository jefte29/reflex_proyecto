import reflex as rx
#from models import User  # Importamos el modelo
from proyecto_reflex_v2.models import User

#COMENTARIOOOOOOO PARA PUSHHHHHH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
class RegisterState(rx.State):
    full_name: str = ""
    email: str = ""
    username: str = ""
    password: str = ""
    confirm_password: str = ""
    career_name: str = ""  #  ahora sí existe career_id
    
    show_success: bool = False

    @rx.event
    def register_user(self):
        """Guardar usuario en la BD."""
        if self.password != self.confirm_password:
            return rx.window_alert("Las contraseñas no coinciden.")

        # Crear y guardar usuario en la BD
        user = User(
            full_name=self.full_name,
            email=self.email,
            username=self.username,
            password=self.password,
            career_name=self.career_name,  #  ahora sí existe career_id
        )
        with rx.session() as session:
            session.add(user)
            session.commit()

        self.show_success = True

    @rx.event
    def redirect_login(self):
        return rx.redirect("/login")

    @rx.event
    def redirect_login(self):
        return rx.redirect("/login")

    
    def clear_inputs(self):
        self.full_name = ""
        self.email = ""
        self.username = ""
        self.password = ""
        self.confirm_password =""
        self.career_name = ""

def success_dialog():
    """Popup de éxito al registrar usuario."""
    return rx.alert_dialog.root(
        rx.alert_dialog.content(
            rx.alert_dialog.title("Usuario registrado correctamente"),
            rx.alert_dialog.description("Su cuenta ha sido creada exitosamente."),
            rx.flex(
                rx.alert_dialog.cancel(
                    rx.button("Aceptar", on_click=RegisterState.redirect_login)
                ),
                justify="end",
                spacing="3",
                margin_top="16px",
            ),
        ),
        open=RegisterState.show_success,
    )


def register_page() -> rx.Component:
    RegisterState.clear_inputs()
    return rx.center(
        rx.box(
            rx.vstack(
                rx.center(
                    rx.heading("Registro de Estudiante", size="7", weight="bold"),
                ),
                rx.text(
                    "Completa el formulario para crear tu cuenta.",
                    size="3",
                    color="gray",
                ),

                # Nombre completo
                rx.vstack(
                    rx.text("Nombre y Apellido", size="3", weight="medium"),
                    rx.input(
                        placeholder="Ej. Juan Pérez",
                        value=RegisterState.full_name,
                        on_change=lambda v: RegisterState.set_full_name(v),
                        width="100%",
                        size="3",
                    ),
                    spacing="1",
                    align="start",
                    width="100%",
                ),

                # Correo
                rx.vstack(
                    rx.text("Correo institucional o personal", size="3", weight="medium"),
                    rx.input(
                        placeholder="Ej. juan.perez@up.ac.pa",
                        type="email",
                        value=RegisterState.email,
                        on_change=lambda v: RegisterState.set_email(v),
                        width="100%",
                        size="3",
                    ),
                    spacing="1",
                    align="start",
                    width="100%",
                ),

                # Usuario
                rx.vstack(
                    rx.text("Nombre de Usuario", size="3", weight="medium"),
                    rx.input(
                        placeholder="Crea tu nombre de usuario",
                        value=RegisterState.username,
                        on_change=lambda v: RegisterState.set_username(v),
                        width="100%",
                        size="3",
                    ),
                    spacing="1",
                    align="start",
                    width="100%",
                ),

                # Contraseña
                rx.vstack(
                    rx.text("Contraseña", size="3", weight="medium"),
                    rx.input(
                        placeholder="Crea tu contraseña",
                        type="password",
                        value=RegisterState.password,
                        on_change=lambda v: RegisterState.set_password(v),
                        width="100%",
                        size="3",
                    ),
                    spacing="1",
                    align="start",
                    width="100%",
                ),

                # Confirmar contraseña
                rx.vstack(
                    rx.text("Confirmar Contraseña", size="3", weight="medium"),
                    rx.input(
                        placeholder="Confirma tu contraseña",
                        type="password",
                        value=RegisterState.confirm_password,
                        on_change=lambda v: RegisterState.set_confirm_password(v),
                        width="100%",
                        size="3",
                    ),
                    spacing="1",
                    align="start",
                    width="100%",
                ),

                # Carrera
                rx.vstack(
                    rx.text("Facultad / Carrera", size="3", weight="medium"),
                    rx.select(
                        items=["Ingeniería Informática", "Licenciatura en Informática", "Otra"],
                        placeholder="Selecciona tu carrera",
                        value=RegisterState.career_name,
                        on_change=lambda v: RegisterState.set_career_name(v),
                        width="100%",
                        size="3",
                    ),
                    spacing="1",
                    align="start",
                    width="100%",
                ),

                # Botón de registro
                rx.button(
                    "Registrarme",
                    width="100%",
                    size="3",
                    color_scheme="green",
                    on_click=RegisterState.register_user,
                ),

                rx.link(
                    "¿Ya tienes cuenta? Inicia sesión",
                    href="/login",
                    color="blue",
                    align="center",
                ),

                spacing="4",
                align="center",
                width="100%",
            ),
            bg=rx.color_mode_cond(light="white", dark="#0f172a"),
            padding="28px",
            border_radius="18px",
            box_shadow="0 10px 35px rgba(0,0,0,.15)",
            width="420px",
        ),
        success_dialog(),
        min_height="100vh",
        bg="linear-gradient(135deg, #22d3ee 0%, #6366f1 100%)",
        padding="24px",
    )
