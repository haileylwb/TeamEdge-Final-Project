from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    storing = requests.get('https://zenquotes.io/api/random')
    json_storing = storing.json()
    quote = json_storing[0]
    return render_template('podo.html', quote=quote)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

