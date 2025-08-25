import reflex as rx
from proyecto_reflex_v2.pages.login import login_page
from proyecto_reflex_v2.pages.register import register_page
from proyecto_reflex_v2.pages.admin_dashboard import admin_dashboard
from rxconfig import config

class State(rx.State):
    """The app state."""

def index() -> rx.Component:
    return login_page()

app = rx.App()
app.add_page(index, route="/", title="Login")
app.add_page(login_page, route="/login", title="Login")
app.add_page(register_page, route="/register", title="Registro")
app.add_page(admin_dashboard, route="/admin-dashboard", title="Panel de Administración")