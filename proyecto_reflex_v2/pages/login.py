import reflex as rx

# Estado para manejar la acción del botón
class LoginPageState(rx.State):
    """Estado para la página de login."""

    def handle_login(self):
        """Redirige al gestor de eventos."""
        return rx.redirect("/event-manager")  # ✅ Redirige a la nueva página


def login_page() -> rx.Component:
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
                            size="3"
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
                            size="3"
                        ),
                        spacing="1",
                        align="start",
                        width="100%",
                    ),

                    # Botón principal (igual que antes pero con acción)
                    rx.button(
                        "Entrar",
                        width="100%",
                        size="3",
                        color_scheme="blue",
                        on_click=LoginPageState.handle_login  # ✅ Acción agregada
                    ),

                    # Recordarme y Olvidé contraseña
                    rx.hstack(
                        rx.checkbox("Recordarme"),
                        rx.spacer(),
                        rx.link("¿Olvidaste tu contraseña?", href="#"),
                        width="100%",
                    ),

                    # Registro (igual al original)
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

        # ✅ Fondo original restaurado
        bg="linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)",
        min_height="100vh",
        padding="24px",
    )