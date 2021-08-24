from flask import Flask

app = Flask(__name__)
app.config["SECRET_KEY"] = "000abcdefghijk123456000"


if __name__ == '__main__':
    app.run(debug=True)