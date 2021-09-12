from flask import Flask, render_template, redirect, url_for, request
from flask.helpers import flash
from flask_mail import Mail, Message
from forms import ContactForm

app = Flask(__name__)
app.config["SECRET_KEY"] = "000abcdefghijk123456000"

# setting email configuration
app.config["TESTING"] = False
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 465
app.config["MAIL_USE_TLS"] = False
app.config["MAIL_USE_SSL"] = True
app.config["MAIL_DEBUG"] = True
app.config["MAIL_USERNAME"] = "muj@gmail.com"
app.config["MAIL_PASSWORD"] = "AH8151dwdw8d1s5d1sds3zuiu15b8w0001"
app.config["MAIL_DEFAULT_SENDER"] = "muj@gmail.com"
app.config["MAIL_MAX_EMAIL"] = None
app.config["MAIL_SUPRESS_SEND"] = False
app.config["MAIL_ASCII_ATTACHEMENTS"] = False

mail = Mail(app)

#home route
@app.route("/", methods=["POST", "GET"])
def home():
    #contact form settings to send email if validated properly
    form = ContactForm()
    if form.validate_on_submit():
        name = request.form.get("name")
        email = request.form.get("email")
        subject = request.form.get("subject")
        text = request.form.get("text")
        message = Message(subject, recipients=["gesecif142@mom2kid.com"])
        message.body = f"""
                        <=====================================>
                        Odesílatel: {name}
                        <------------------------------------->
                        Z emailu: {email} 
                        <------------------------------------->
                        Píše zprávu:
                        {text}
                        <=====================================>"""

        mail.send(message)
        return redirect(url_for("form_submit"))
    else:
        if form.errors:
            flash("Při vyplňování formuláře došlo k chybě, zkuste to prosím znovu!", "error")
    return render_template("index.html", form=form)


@app.route("/message_sent", methods=["POST", "GET"])
def form_submit():
    return render_template("form_submit.html"), {"Refresh": "3, url=http://127.0.0.1:5000/"}

if __name__ == '__main__':
    app.run(debug=True)