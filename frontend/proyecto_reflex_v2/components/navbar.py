import reflex as rx

def navbar():
    return rx.box(
        rx.hstack(
            # Título principal
            rx.text(
                "Gestor de Eventos Académicos — Mockup",
                size="5",
                weight="bold",
                color="black",
            ),
            # Texto de sesión
            rx.text(
                "Sesión: Juan Pérez — Administrador",
                size="3",
                color="gray",
            ),
            justify="between",  # distribuye sin que quede pegado al borde
            width="100%",
        ),
        bg="white",
        padding_x="6",
        padding_y="4",
        box_shadow="sm",
        width="100%",
        position="sticky",
        top="0",
        z_index="50",
    )
