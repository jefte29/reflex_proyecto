import reflex as rx
from typing import List, Dict, Any

# =========================================================================
# ESTADO DE LA APLICACIÓN
# =========================================================================

class AdminState(rx.State):
    """
    Estado para el panel de administración de eventos, con funcionalidades de creación y eliminación.
    """
    
    events: List[Dict[str, Any]] = [
        {"initial": "T", "title": "Taller de IA", "speaker": "Dr. García", "date": "10/09/2025",
         "time": "10:00 AM", "type": "Taller", "status": "available", "registered": 15, "capacity": 30},
        {"initial": "S", "title": "Seminario de Ciberseguridad", "speaker": "Ing. López", "date": "12/09/2025",
         "time": "2:00 PM", "type": "Seminario", "status": "full", "registered": 50, "capacity": 50},
        {"initial": "C", "title": "Conferencia sobre Big Data", "speaker": "M.Sc. Ruiz", "date": "15/09/2025",
         "time": "9:00 AM", "type": "Conferencia", "status": "available", "registered": 10, "capacity": 100},
        {"initial": "H", "title": "Hackatón Universitario", "speaker": "Comité UP", "date": "20/09/2025",
         "time": "8:00 AM", "type": "Hackatón", "status": "registered", "registered": 5, "capacity": 50},
    ]

    new_event_title: str = ""
    new_event_speaker: str = ""
    new_event_date: str = ""
    new_event_time: str = ""
    new_event_type: str = ""
    new_event_capacity: int = 0
    filter_type: str = "Todos"
    search_query: str = ""
    
    @rx.var
    def filtered_events(self) -> List[Dict[str, Any]]:
        return [
            event for event in self.events
            if (self.filter_type == "Todos" or event["type"] == self.filter_type) and
               (self.search_query.lower() in event["title"].lower())
        ]
    
    def set_filter_type(self, value: str):
        self.filter_type = value
        
    def set_search_query(self, value: str):
        self.search_query = value

    def set_new_event_title(self, value: str):
        self.new_event_title = value

    def set_new_event_speaker(self, value: str):
        self.new_event_speaker = value

    def set_new_event_date(self, value: str):
        self.new_event_date = value

    def set_new_event_time(self, value: str):
        self.new_event_time = value

    def set_new_event_type(self, value: str):
        self.new_event_type = value

    def set_new_event_capacity(self, value: str):
        if value and value.isdigit():
            self.new_event_capacity = int(value)
        else:
            self.new_event_capacity = 0
    
    def handle_submit(self, form_data: dict):
        try:
            capacity = int(form_data.get("capacity"))
            if capacity <= 0:
                print("Error: La capacidad debe ser un número positivo.")
                return
        except (ValueError, TypeError):
            print("Error: La capacidad debe ser un número entero.")
            return

        initial = form_data.get("title")[0].upper() if form_data.get("title") else "N"

        new_event = {
            "initial": initial,
            "title": form_data.get("title"),
            "speaker": form_data.get("speaker"),
            "date": form_data.get("date"),
            "time": form_data.get("time"),
            "type": form_data.get("type"),
            "status": "available",
            "registered": 0,
            "capacity": capacity,
        }
        self.events.append(new_event)
        self.reset_form()

    def reset_form(self):
        self.new_event_title = ""
        self.new_event_speaker = ""
        self.new_event_date = ""
        self.new_event_time = ""
        self.new_event_type = ""
        self.new_event_capacity = 0
    
    def delete_event(self, event_title: str):
        self.events = [event for event in self.events if event["title"] != event_title]

# =========================================================================
# COMPONENTES DE UI
# =========================================================================

def admin_event_card(event: Dict[str, Any]) -> rx.Component:
    initial_bg_color = rx.cond(
        event["status"] == "registered", "rgb(34, 197, 94)",
        rx.cond(event["status"] == "full", "rgb(156, 163, 175)", "rgb(59, 130, 246)")
    )
    
    return rx.box(
        rx.flex(
            rx.center(
                rx.text(event["initial"], color="white", font_weight="bold", size="4"),
                width="48px",
                height="48px",
                background_color=initial_bg_color,
                border_radius="12px",
                box_shadow="sm",
            ),
            rx.vstack(
                rx.text(event["title"], font_weight="bold", size="4"),
                rx.text(f"{event['speaker']}", size="2", color="gray"),
                rx.text(f"{event['date']} {event['time']}", size="2", color="gray"),
                align_items="start",
                spacing="1",
                flex_grow="1",
            ),
            rx.hstack(
                rx.text(f"{event['registered']}/{event['capacity']}", color="gray", size="2"),
                rx.cond(
                    event["status"] == "registered",
                    rx.badge("Inscrito", color_scheme="green", size="2"),
                    rx.cond(
                        event["status"] == "full",
                        rx.badge("Lleno", color_scheme="gray", size="2"),
                        rx.button("Editar", color_scheme="gray", size="2", is_disabled=True)
                    )
                ),
                rx.button(
                    "Eliminar",
                    on_click=lambda: AdminState.delete_event(event["title"]),
                    color_scheme="red",
                    size="2"
                ),
                spacing="2",
                align_items="center",
            ),
            spacing="4",
            align_items="center",
        ),
        padding="16px",
        border="1px solid #d1d5db",
        border_radius="24px",
        box_shadow="md",
        width="100%",
        background_color="white",
    )

def admin_manager_page() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.vstack(
                rx.text("Panel de Administración de Eventos", size="5", weight="bold", align="center"),
                rx.text("Universidad de Panamá", size="3", color="gray", align="center"),
                rx.divider(border_color="gray", border_width="1px", margin_top="2", margin_bottom="4"),
                spacing="1",
                width="100%",
            ),
            rx.hstack(
                rx.box(
                    rx.form(
                        rx.vstack(
                            rx.text("Crear nuevo evento", font_weight="bold", size="4"),
                            rx.divider(border_color="gray", border_width="1px"),
                            rx.input(
                                placeholder="Título del evento",
                                name="title",
                                value=AdminState.new_event_title,
                                on_change=AdminState.set_new_event_title
                            ),
                            rx.input(
                                placeholder="Nombre del orador",
                                name="speaker",
                                value=AdminState.new_event_speaker,
                                on_change=AdminState.set_new_event_speaker
                            ),
                            rx.input(
                                placeholder="Fecha (DD/MM/AAAA)",
                                name="date",
                                value=AdminState.new_event_date,
                                on_change=AdminState.set_new_event_date
                            ),
                            rx.input(
                                placeholder="Hora (HH:MM AM/PM)",
                                name="time",
                                value=AdminState.new_event_time,
                                on_change=AdminState.set_new_event_time
                            ),
                            rx.select(
                                ["Taller", "Seminario", "Conferencia", "Hackatón"],
                                placeholder="Tipo de evento",
                                name="type",
                                on_change=AdminState.set_new_event_type,
                                value=AdminState.new_event_type,
                            ),
                            rx.input(
                                placeholder="Capacidad",
                                name="capacity",
                                type="number",
                                value=AdminState.new_event_capacity,
                                on_change=AdminState.set_new_event_capacity
                            ),
                            rx.button("Crear evento", type="submit", color_scheme="blue", width="100%"),
                            padding_top="1em",
                            spacing="2",
                        ),
                        on_submit=AdminState.handle_submit
                    ),
                    rx.box(
                        rx.text("Filtros", font_weight="bold", size="4"),
                        rx.divider(border_color="gray", border_width="1px"),
                        rx.select(
                            ["Todos", "Taller", "Seminario", "Conferencia", "Hackatón"],
                            on_change=AdminState.set_filter_type,
                            value=AdminState.filter_type,
                        ),
                        rx.input(
                            placeholder="Buscar por título...",
                            value=AdminState.search_query,
                            on_change=AdminState.set_search_query
                        ),
                        padding_top="1em",
                        spacing="2",
                    ),
                    width="320px",
                    background_color="white",
                    padding="24px",
                    border_radius="18px",
                    box_shadow="sm",
                    flex_shrink="0",
                ),
                rx.vstack(
                    rx.hstack(
                        rx.text("Eventos existentes", font_weight="bold", size="4"),
                        rx.spacer(),
                        rx.text(AdminState.filtered_events.length(), color="gray", size="2"),
                    ),
                    rx.foreach(
                        AdminState.filtered_events,
                        admin_event_card,
                    ),
                    spacing="4",
                    flex_grow="1",
                ),
                spacing="8",
                width="100%",
                align_items="start",
            ),
            spacing="8",
            padding="2em",
            align_items="start",
        ),
        width="100%",
        max_width="1280px",
        background_color="#e6f7ff",
        min_height="100vh"
    )

# =========================================================================
# CONFIGURACIÓN Y RUTAS
# =========================================================================

#app = rx.App()
#app.add_page(admin_manager_page, route="/admin-manager", title="Panel Admin")