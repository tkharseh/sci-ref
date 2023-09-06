import flask
from flask import Flask, request
import webscraping
import json

app = Flask(__name__)

# Ticker data API route


@app.route("/data", methods=["GET", "POST"])
# https://pubmed.ncbi.nlm.nih.gov/27245678/
def data():
    print(request.data)
    payload = request.data
    payloadJson = json.loads(payload)
    url = payloadJson['url']
    desiredOrder = payloadJson['order']
    urlContent = webscraping.get_url(url)
    author, title, journal, year, vol, doi = webscraping.extract_elements(
        urlContent)
    order = {
        "1": author,
        "2": title,
        "3": year,
        "4": journal,
        "5": vol.replace(".", ""),
        "6": doi
    }
    res = ''
    for num in desiredOrder:
        res += order[num] + '. '
        
    return res


if __name__ == "__main__":
    app.run(debug=True)
