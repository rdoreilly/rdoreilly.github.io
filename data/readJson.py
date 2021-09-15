import json

with open("publications.json", "r") as rf:
    data = json.load(rf)


"""    for paper in data['pub']:
        combined_abstracts += " " + datapaper.abstract
"""
print(combined_abstracts)
# Check is the json object was loaded correctly
try:
    print(decoded_data["name"])
except KeyError:
    print("Oops! JSON Data not loaded correctly using json.loads()")