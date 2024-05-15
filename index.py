import requests
import re
from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

@app.route('/get_name/', methods=['GET'])

def getNames():
    message = jsonify({'names': list(getNames())})
    message.headers.add('Access-Control-Allow-Origin', '*')
    return message  # serialize and use JSON headers

def getNames():
    names = []        
    response = requests.get("https://anime-characters-fight.fandom.com/ru/wiki/Black_Clover")
    urls = re.findall(r'(?<=<a href=").*?(?=")', response.text)

    for url in urls:
        if url[:3] == '/ru':
            properUrl = 'https://anime-characters-fight.fandom.com' + url
            responseName = requests.get(properUrl)
            match = re.search(r'(?<=Имя: )(\b\w+\b)\W+(\b\w+\b)', responseName.text)
            match2 = re.search(r'(?<=class=\"noline\"><a href=\").*?(?=\")', responseName.text)

            if match:
                name = match.group(0)
                # img = match2.group(0)
                class char:
                    id = 0
                
                char["name"] = name

                print(char)
                names.append(char)
            
            if len(names) == 10:
                break

    return set(names)

app.run(port=5000, debug=True)