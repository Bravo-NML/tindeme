import requests
import re

response = requests.get("https://anime-characters-fight.fandom.com/ru/wiki/Black_Clover")
urls = re.findall(r'(?<=<a href=").*?(?=")', response.text)

for url in urls:
      if url[:3] == '/ru':
        properUrl = 'https://anime-characters-fight.fandom.com' + url
        responseName = requests.get(properUrl)
        match = re.search(r'(?<=Имя: )(\b\w+\b)\W+(\b\w+\b)', responseName.text)

        if match:
            name = match.group(0)
            print(name)