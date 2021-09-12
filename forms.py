from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Length, Email

#forms
class ContactForm(FlaskForm):
    name = StringField("Jméno a Příjmení*", validators=[DataRequired(message="Toto pole je nutné vyplnit"), Length(min=2, max=40, message="Vaše jméno musí mit mezi 2 a 40 znaky")])
    email = StringField("Váš Email*", validators=[DataRequired(message="Toto pole je nutné vyplnit"), Email(message="Zadejte platný email"), Length(min=2, max=50, message="Email musí mít mezi 2 a 50 znaky")])
    subject = StringField("Předmět*", validators=[DataRequired(message="Toto pole je nutné vyplnit"), Length(min=2, max=25, message="Předmět musí mít mezi 2 a 25 znaky")])
    text = TextAreaField("Vaše zpráva pro mě*", validators=[DataRequired(message="Toto pole je nutné vyplnit"), Length(min=2, max=1000, message="Zpráva může mít minimálně 2 maximálně 1000 znaků")])
    
