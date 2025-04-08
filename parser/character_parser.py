import requests
from bs4 import BeautifulSoup

import time

import numpy as np


headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
    'referer': 'https://www.google.com/'
}

class Character:
    def __init__(self, url):
        self.url = url
        self.headers = headers
        self.response = requests.get(self.url, headers=self.headers)
        self.soup = BeautifulSoup(self.response.content, "html.parser")

    # Check for bad responses
    def check_for_response(self):
        if self.response.status_code == 200:
            return True
        else:
            print(f'Bad response: {self.response}')
            return False

    # Fetch the character's name in Russian
    def name_rus(self):
        return self.soup.find('h1', class_='character__name').getText().strip()

    # Fetch the character's name in English
    def name_eng(self):
        return self.soup.find('div', class_='character__sub-name').getText().strip()

    # Fetch a link to the character's image
    def image_link(self):
        return f"https://anichars.ru{self.soup.find('img').get('src')}"

    # Fetch all traits into a dictionary
    def traits(self):
        self.all_char_data = self.soup.find_all('div', class_='character__data')
        return {x.find(class_='character__title').getText().strip(): x.find(class_='character__value').getText().strip()
                for x in self.all_char_data}

    # Fetch the character's description
    def description(self):
        return self.soup.find('div', class_='character__desc').getText().strip().removeprefix('Описание персонажа\n').strip()

    # Fetch the character's anime list
    def anime_list(self):
        chars_anime_list = self.soup.find('a', class_='list__item').parent.find_all('div', class_='list__name')
        chars_role_list = self.soup.find('a', class_='list__item').parent.find_all('span', class_='list__info')
        return {anime.getText().strip(): role.getText().strip() for anime, role in zip(chars_anime_list, chars_role_list)}


# Fetch a list of characters on one page
def char_list(url):
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.content, "html.parser")
    return soup.find_all('a', class_='characters-list__item')


def main():
    # Loop through all the pages
    for page_num in range(1, 7792):
        page_url = f'https://anichars.ru/characters/popular?page={page_num}'

        # Loop through all characters on the page
        char_num = 1
        for char in char_list(page_url):

            # Sleep for 0-1 seconds
            time.sleep(np.random.uniform(0, 1))

            char_url = char.get('href')
            this_char = Character(char_url)
            if this_char.check_for_response():
                print(f"This character's id is {str(page_num).zfill(4)}{str(char_num).zfill(2)}")
                print(this_char.name_rus())
                print(this_char.name_eng())
                print(this_char.traits())
                print(this_char.image_link())
                print(this_char.description())
                print(this_char.anime_list())
                print('----------------')

                char_num += 1

            # Sleep for 0.5-1.5 seconds
            time.sleep(0.5 + np.random.uniform(0, 1))


if __name__ == '__main__':
    main()
