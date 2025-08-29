import reflex as rx
from sqlmodel import Field

class Career(rx.Model, table=True):
    id: int = Field(default=None, primary_key=True)
    name: str = Field(unique=True, nullable=False)


class User(rx.Model, table=True):

    id: int = Field(default=None, primary_key=True)
    full_name: str
    email: str = Field(unique=True, nullable=False)
    username: str = Field(unique=True, nullable=False)
    password: str  # se guarda encriptada
    career_name: str = Field(nullable=False)

    def verify_password(self, password: str) -> bool:
        return self.password == password