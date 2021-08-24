from flask import Flask
from flask import render_template, url_for, flash, redirect
from app.forms import ContactForm

app = Flask(__name__)
app.config["SECRET_KEY"] = "000abcdefghijk123456000"

#home route
@app.route("/", methods=["POST", "GET"])
def home():
    form = ContactForm()
    if form.validate_on_submit:
        return render_template("index.html", form=form)
    return render_template("index.html", form=form)

