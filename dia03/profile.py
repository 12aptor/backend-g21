import requests

GITHUB_URL = 'https://api.github.com/users/cesarmayta'

class Profile:
    
    def __init__(self):
        self.github = requests.get(GITHUB_URL).json()
        self.name = self.github['name']
        self.role = self.github['bio']
        self.image = self.github['avatar_url']
        self.location = self.github['location']
        self.url_github = self.github['html_url']