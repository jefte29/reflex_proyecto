"""Gestor de eventos académicos en Reflex."""

import reflex as rx
from typing import List, Dict, Any

# =========================================================================
# ESTADO DE LA APLICACIÓN
# =========================================================================

class EventState(rx.State):
    """Estado para la gestión de eventos, incluyendo datos, filtros y búsqueda."""
    
    # Lista de eventos predefinidos
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
    
    # Filtros y búsqueda
    filter_type: str = "Todos"
    filter_status: str = "Todos"
    search_query: str = ""
    
    # Variables calculadas
    @rx.var
    def total_registered(self) -> int:
        return sum(1 for event in self.events if event["status"] == "registered")
    
    @rx.var
    def filtered_events(self) -> List[Dict[str, Any]]:
        return [
            event for event in self.events
            if (self.filter_type == "Todos" or event["type"] == self.filter_type) and
               (self.filter_status == "Todos" or
                (self.filter_status == "available" and event["status"] == "available") or
                (self.filter_status == "full" and event["status"] == "full") or
                (self.filter_status == "registered" and event["status"] == "registered")) and
               (self.search_query.lower() in event["title"].lower())
        ]
    
    # Métodos para manejar filtros y búsqueda
    def set_filter_type(self, value: str):
        self.filter_type = value
        
    def set_filter_status(self, value: str):
        self.filter_status = value
        
    def set_search_query(self, value: str):
        self.search_query = value
        
    def export_csv(self):
        print("Exportando eventos a CSV...")

# =========================================================================
# COMPONENTES DE UI
# =========================================================================

def event_card(event: Dict[str, Any]) -> rx.Component:
    """Componente para mostrar una tarjeta de evento."""
    initial_bg_color = rx.cond(
        event["status"] == "registered", "rgb(34, 197, 94)",
        rx.cond(event["status"] == "full", "rgb(156, 163, 175)", "rgb(59, 130, 246)")
    )

    button_color = rx.cond(
        event["status"] == "registered", "green",
        rx.cond(event["status"] == "full", "gray", "blue")
    )

    button_text = rx.cond(
        event["status"] == "registered", "Inscrito",
        rx.cond(event["status"] == "full", "Lleno", "Inscribirse")
    )

    button_disabled = rx.cond(event["status"] == "full", True, False)

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
                rx.button(
                    button_text,
                    width="120px",
                    size="2",
                    color_scheme=button_color,
                    is_disabled=button_disabled
                ),
                spacing="4",
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

def event_manager_page() -> rx.Component:
    """Página principal del gestor de eventos."""
    return rx.center(
        rx.vstack(
            # Encabezado
            rx.vstack(
                rx.text("Gestor de Eventos Académicos", size="5", weight="bold", align="center"),
                rx.text("Universidad de Panamá", size="3", color="gray", align="center"),
                rx.divider(border_color="gray", border_width="1px", margin_top="2", margin_bottom="4"),
                spacing="1",
                width="100%",
            ),
            # Contenido principal
            rx.hstack(
                # Panel lateral
                rx.box(
                    rx.vstack(
                        # Perfil
                        rx.box(
                            rx.text("Perfil", font_weight="bold", size="4"),
                            rx.divider(border_color="gray", border_width="1px"),
                            rx.text("Juan Pérez", font_weight="bold", size="3"),
                            rx.text("juan.perez@uni.edu.pa", size="2", color="gray"),
                            rx.text("Ingeniería en Sistemas", size="2", color="gray"),
                            padding_bottom="1em",
                        ),
                        rx.button("Editar perfil", color_scheme="blue", width="100%", size="2"),
                        # Filtros
                        rx.box(
                            rx.text("Filtros", font_weight="bold", size="4"),
                            rx.divider(border_color="gray", border_width="1px"),
                            rx.select(
                                ["Todos", "Taller", "Seminario", "Conferencia", "Hackatón"],
                                on_change=EventState.set_filter_type,
                                value=EventState.filter_type,
                            ),
                            rx.select(
                                ["Todos", "available", "full", "registered"],
                                on_change=EventState.set_filter_status,
                                value=EventState.filter_status,
                            ),
                            rx.input(
                                placeholder="Buscar por título...",
                                value=EventState.search_query,
                                on_change=EventState.set_search_query
                            ),
                            padding_top="1em",
                            spacing="2",
                        ),
                        # Mis eventos
                        rx.box(
                            rx.text("Mis eventos", font_weight="bold", size="4"),
                            rx.text(f"Total inscritos: {EventState.total_registered}", size="2"),
                            rx.button("Exportar a CSV", on_click=EventState.export_csv, color_scheme="gray", size="2"),
                            padding_top="1em",
                        ),
                        spacing="4",
                        align_items="start",
                    ),
                    width="320px",
                    background_color="white",
                    padding="24px",
                    border_radius="18px",
                    box_shadow="sm",
                    flex_shrink="0",
                ),
                # Lista de eventos
                rx.vstack(
                    rx.hstack(
                        rx.text("Eventos disponibles", font_weight="bold", size="4"),
                        rx.spacer(),
                        rx.text(EventState.filtered_events.length(), color="gray", size="2"),
                    ),
                    rx.foreach(
                        EventState.filtered_events,
                        event_card,
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