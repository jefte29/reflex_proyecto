import reflex as rx
from proyecto_reflex_v2.components.navbar import navbar
from proyecto_reflex_v2.components.event_form import event_form

def admin_dashboard():
    return rx.vstack(
        navbar(),

        # Contenedor central (card grande)
        rx.box(
            rx.hstack(
                event_form(),
                rx.box(
                    rx.text("Aquí irá la tabla de eventos o vista principal", color="black"),
                    padding="6",
                    flex="1",
                    bg="white",
                    border_radius="lg",
                    box_shadow="sm",
                ),
                spacing="6",
                align_items="start",
                width="100%",
            ),
            bg="#f9fafb",       # gris claro de fondo, como el mockup
            padding="8",
            margin_x="auto",    # centra el contenido horizontalmente
            margin_y="6",
            border_radius="lg",
            max_width="1200px", # ancho máximo del dashboard
        ),

        spacing="0",
        width="100%",
    )
