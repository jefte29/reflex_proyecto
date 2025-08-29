import reflex as rx

config = rx.Config(
    app_name="proyecto_reflex_v2",
    frontend_port=3000,
    deploy_url="http://0.0.0.0:3000",
    #db_url="postgresql+psycopg2://postgres:151929@localhost:5432/reflexdb",  # <- dentro de Config
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ],
)
