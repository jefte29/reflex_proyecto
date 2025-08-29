import reflex as rx

config = rx.Config(
    app_name="proyecto_reflex_v2",
    frontend_port=3000,
    deploy_url="http://0.0.0.0:3000",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ],
)
