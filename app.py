from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('podo.html')

# @app.route('/')
# def index():
#     return render_template('hello_world.html')

# @app.route('/about')
# def about():
#     return render_template('about.html')

# @app.route('/dynamic')
# def dynamic():
#     greeting = "Welcome to Hailey's Dynamic Page,"
#     name = "User 101"
#     icecream = ["- vanilla", "- chocolate", "- strawberry", "- green tea"]
#     return render_template('dynamic.html', greeting=greeting, name=name, icecream=icecream)

# import requests
# from datetime import date  
# @app.route('/nasa')
# def nasa():
#     today = str(date.today())
#     response = requests.get('https://api.nasa.gov/planetary/apod?api_key=ZPuU6YumWs1J1mjGg0BpSononfpbZmK4CsjG5RxV&date='+today)
#     data = response.json()
#     print(data)
#     return render_template('nasa.html', data=data)

# # ProjectJSAPOKJSIJEHSUAAMSNDVOFISMASLALDKFHSDOKASNKWEKLSWLKDPFOIWEOPRIEPOIRPEWORIEPORIWEPOIRPWOEIRPOEWIREPWOIR

# @app.route('/p_welcome')
# def pWelcome():
#     welcome = "Welcome"
#     name = "User"
#     return render_template('p_welcome.html', welcome=welcome, name=name)

# #-------

# text = ["About", "Me"]

# @app.route('/p_about')
# def pAbout():
#     return render_template('p_about.html', text=text)


# @app.route('/p_about_translated')
# def pAboutTranslated():
#     translated_text = []
#     for i in range(len(text)):
#         word = "https://api.funtranslations.com/translate/minion.json?text="+text[i]
#         translated_text.append(word)
#     response = requests.get('https://api.funtranslations.com/translate/minion.json?text=')
#     data = response.json()
#     print(data)
#     return render_template('p_about_translated.html', data=data)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

