# Яна жопка
import requests
from bs4 import BeautifulSoup

# Ссылка на персонажа:
url = "https://animego.org/character/1530-shikamaru-nara"
response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")

# Словарь характеристик:
character = {
    'name': '',
    'image': '',
    'description': ''
}

# Заполнение характеристик
for trait in character:
    character[trait] = soup.find('img').get('src') if trait == 'image' else soup.find(itemprop=trait).getText().strip()

print(character)
