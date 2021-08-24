from run import app
from flask import render_template, url_for, flash, redirect
from .forms import ContactForm

#home route
@app.route("/", methods=["POST", "GET"])
def home():
    form = ContactForm()
    if form.validate_on_submit:
        return render_template("./index.html", form=form)
    return render_template("./index.html", form=form)
