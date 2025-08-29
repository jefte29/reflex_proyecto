from proyecto_reflex_v2.models import User
from sqlmodel import select
import reflex as rx

# Estado para manejar la acción del botón
class LoginPageState(rx.State):
    email: str = ""
    password: str = ""
    error_message: str = ""

    def handle_login(self):
        # Buscar usuario por email o username
        with rx.session() as session:
            user = session.query(User).filter(
                (User.email == self.email) | (User.username == self.email)
            ).first()

            if not user:
                self.error_message = "Usuario no encontrado"
                return

            if not user.verify_password(self.password):
                self.error_message = "Contraseña incorrecta"
                return

        # Login correcto: limpiar campos antes de redirigir
        self.clear_inputs()
        return rx.redirect("/event-manager")

    # Función para limpiar los inputs
    def clear_inputs(self):
        self.email = ""
        self.password = ""
        self.error_message = ""


# Página de login
def login_page() -> rx.Component:
    # Limpiar los campos cada vez que se llama a la función
    LoginPageState.clear_inputs()

    return rx.box(
        rx.color_mode.button(position="top-right"),

        rx.center(
            rx.box(
                rx.vstack(
                    rx.image(
                        src="/favicon.ico",
                        width="48px",
                        height="48px",
                        border_radius="12px"
                    ),
                    rx.heading("Iniciar sesión", size="8", weight="bold"),
                    rx.text(
                        "Bienvenido. Ingresa tus credenciales para continuar.",
                        size="3",
                        color="gray"
                    ),

                    # Campo correo
                    rx.vstack(
                        rx.text("Usuario o Email", size="3", weight="medium"),
                        rx.input(
                            placeholder="Ingresa tu nombre de usuario o correo institucional",
                            type="email",
                            id="email",
                            autocomplete="off",
                            width="100%",
                            size="3",
                            value=LoginPageState.email,
                            on_change=LoginPageState.set_email,
                        ),
                        spacing="1",
                        align="start",
                        width="100%",
                    ),

                    # Campo contraseña
                    rx.vstack(
                        rx.text("Contraseña", size="3", weight="medium"),
                        rx.input(
                            placeholder="Ingresa tu contraseña",
                            type="password",
                            id="password",
                            width="100%",
                            size="3",
                            value=LoginPageState.password,
                            on_change=LoginPageState.set_password,
                        ),
                        spacing="1",
                        align="start",
                        width="100%",
                    ),

                    # Botón principal
                    rx.button(
                        "Entrar",
                        width="100%",
                        size="3",
                        color_scheme="blue",
                        on_click=LoginPageState.handle_login
                    ),

                    # Mensaje de error condicional
                    rx.cond(
                        LoginPageState.error_message != "",
                        rx.text(LoginPageState.error_message, color="red", size="2")
                    ),

                    # Recordarme y Olvidé contraseña
                    rx.hstack(
                        rx.checkbox("Recordarme"),
                        rx.spacer(),
                        rx.link("¿Olvidaste tu contraseña?", href="#"),
                        width="100%",
                    ),

                    # Registro
                    rx.text(
                        [
                            "¿No tienes cuenta? ",
                            rx.link("Regístrate", href="/register", color="#7FFFD4")
                        ],
                        size="2",
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
            min_height="100vh",
        ),

        bg="linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)",
        min_height="100vh",
        padding="24px",
    )
