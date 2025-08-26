import reflex as rx

def event_form():
    return rx.box(
        rx.vstack(
            # Título
            rx.text("Crear evento", size="4", weight="bold", margin_bottom="4"),

            # Nombre del evento
            rx.input(placeholder="Nombre del evento", width="100%"),

            # Tipo de evento (select)
            rx.select(
                ["Taller", "Seminario", "Hackatón", "Conferencia"],
                placeholder="Tipo de evento",
                width="100%",
            ),

            # Fecha y hora
            rx.input(placeholder="YYYY-MM-DD HH:MM", width="100%"),

            # Ponente
            rx.input(placeholder="Ponente", width="100%"),

            # Capacidad
            rx.input(placeholder="Capacidad", width="100%"),

            # Botón Crear
            rx.button(
                "Crear",
                bg="#6d28d9",          # morado moderno
                color="white",
                border_radius="md",
                padding_x="6",
                padding_y="3",
                width="100%",          # ocupa ancho pero no se ve aplastado
                _hover={"bg": "#5b21b6"},
            ),

            spacing="4",
            align="stretch",
        ),
        bg="white",             # fondo de tarjeta
        padding="6",            # espacio interno para que no pegue a los bordes
        border_radius="lg",     # bordes redondeados
        box_shadow="md",        # sombra más marcada
        width="100%",
        max_width="350px",      # ancho máximo similar al mockup
    )
