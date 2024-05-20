# import Яна_жопка
import requests
from bs4 import BeautifulSoup


class Character:
    def __init__(self, url):
        self.url = url
        self.headers = {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
            'referer': 'https://www.google.com/'
        }
        self.response = requests.get(self.url, headers=self.headers)
        self.soup = BeautifulSoup(self.response.content, "html.parser")

    # Check for bad responses
    def check_for_response(self):
        if self.response.status_code == 200:
            return True
        else:
            print(f'Bad response: {self.response}')
            return False

    # Fetch a link to the character's image
    def image_link(self):
        return f"https://anichars.ru{self.soup.find('img').get('src')}"

    # Fetch all traits in a dictionary
    def traits(self):
        self.all_char_data = self.soup.find_all('div', class_='character__data')
        return {x.find(class_='character__title').getText().strip(): x.find(class_='character__value').getText().strip()
                for x in self.all_char_data}


# Check:
url = 'https://anichars.ru/characters/niko-robin'
this_character = Character(url)
if this_character.check_for_response():
    print(this_character.traits())
    print(this_character.image_link())