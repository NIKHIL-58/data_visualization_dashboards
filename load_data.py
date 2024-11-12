import json
from pymongo import MongoClient

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client['dashboard_db']   # Database name
collection = db['dashboard_data']  # Collection name

# Load JSON data and insert it into MongoDB
with open('jsondata.json', encoding='utf-8') as f:  # Specify encoding here
    data = json.load(f)
    if isinstance(data, list):
        collection.insert_many(data)  # Insert multiple documents
    else:
        collection.insert_one(data)   # Insert a single document

print("Data successfully inserted into MongoDB!")
