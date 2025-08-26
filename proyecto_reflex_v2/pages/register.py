import reflex as rx

class RegisterState(rx.State):
    show_success: bool = False

    @rx.event
    def register_user(self):
        # Aquí iría la lógica real de guardar en BD, etc.
        # Si todo sale bien, activamos el popup
        self.show_success = True

    @rx.event
    def redirect_login(self):
        return rx.redirect("/login")


def success_dialog():
    return rx.alert_dialog.root(
        rx.alert_dialog.content(
            rx.alert_dialog.title("Usuario registrado correctamente"),
            rx.alert_dialog.description(
                "Su cuenta ha sido creada exitosamente."
            ),
            rx.flex(
                rx.alert_dialog.cancel(
                    rx.button(
                        "Aceptar",
                        on_click=RegisterState.redirect_login
                    )
                ),
                justify="end",
                spacing="3",
                margin_top="16px",
            ),
        ),
        open=RegisterState.show_success,  # Se abre automáticamente si es True
    )


def register_page() -> rx.Component:
    return rx.center(
        rx.box(
            rx.vstack(
                rx.center(
                    rx.heading("Registro de Estudiante", size="7", weight="bold"),
                ),
                rx.text("Completa el formulario para crear tu cuenta.", size="3", color="gray"),

                # Nombre completo
                rx.vstack(
                    rx.text("Nombre y Apellido", size="3", weight="medium"),
                    rx.input(placeholder="Ej. Juan Pérez", id="full_name", width="100%", size="3"),
                    spacing="1", align="start", width="100%",
                ),

                # Correo
                rx.vstack(
                    rx.text("Correo institucional o personal", size="3", weight="medium"),
                    rx.input(placeholder="Ej. juan.perez@up.ac.pa", type="email", id="email", width="100%", size="3"),
                    spacing="1", align="start", width="100%",
                ),

                # Nombre de Usuario
                rx.vstack(
                    rx.text("Nombre de Usuario", size="3", weight="medium"),
                    rx.input(
                        placeholder="Crea tu nombre de usuario",
                        id="username",
                        width="100%",
                        size="3"
                    ),
                    spacing="1", align="start", width="100%",
                ),

                # Contraseña
                rx.vstack(
                    rx.text("Contraseña", size="3", weight="medium"),
                    rx.input(
                        placeholder="Crea tu contraseña",
                        type="password",
                        id="password",
                        width="100%",
                        size="3"
                    ),
                    spacing="1", align="start", width="100%",
                ),

                # Confirmar contraseña
                rx.vstack(
                    rx.text("Confirmar Contraseña", size="3", weight="medium"),
                    rx.input(
                        placeholder="Confirma tu contraseña",
                        type="password",
                        id="confirm_password",
                        width="100%",
                        size="3"
                    ),
                    spacing="1", align="start", width="100%",
                ),

                # Facultad / Carrera
                rx.vstack(
                    rx.text("Facultad / Carrera", size="3", weight="medium"),
                    rx.select(
                        items=["Ingeniería Informática", "Licenciatura en Informática", "Otra"],
                        placeholder="Selecciona tu carrera",
                        id="career",
                        width="100%",
                        size="3"
                    ),
                    spacing="1", align="start", width="100%",
                ),

                # Botón de registro
                rx.button(
                    "Registrarme",
                    width="100%",
                    size="3",
                    color_scheme="green",
                    on_click=RegisterState.register_user
                ),

                # Enlace para volver
                rx.link("¿Ya tienes cuenta? Inicia sesión", href="/login", color="blue", align="center"),

                spacing="4", align="center", width="100%",
            ),
            bg=rx.color_mode_cond(light="white", dark="#0f172a"),
            padding="28px",
            border_radius="18px",
            box_shadow="0 10px 35px rgba(0,0,0,.15)",
            width="420px",
        ),
        success_dialog(),  # 🔹 El popup debe ir aquí como hijo del center
        min_height="100vh",
        bg="linear-gradient(135deg, #22d3ee 0%, #6366f1 100%)",
        padding="24px",
    )
