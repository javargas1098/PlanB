import requests
from time import time, sleep

def callStores():
    while True:
        url = 'http://localhost:3000/api/v1'
        r = requests.get(url+'/stores/56cd053c-4933-4e17-8e90-319b9c457972')
        print (r.json())
        sleep(20)

callStores()
