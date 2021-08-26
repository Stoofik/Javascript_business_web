from flask import Flask, render_template, redirect, url_for
# from flask_mail import Mail, Message

from werkzeug.wrappers import request
from app.forms import ContactForm

app = Flask(__name__)
app.config["SECRET_KEY"] = "000abcdefghijk123456000"

#home route
@app.route("/", methods=["POST", "GET"])
def home():
    form = ContactForm()

    if form.validate_on_submit():
        return redirect(url_for("form_submit"))
    return render_template("index.html", form=form)


@app.route("/message_sent", methods=["POST", "GET"])
def form_submit():
    return render_template("form_submit.html"), {"Refresh": "3, url=http://127.0.0.1:5000/"}
