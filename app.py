from flask import Flask, render_template, jsonify, request
from pymongo import MongoClient
import pandas as pd
import json


# Initialize Flask app
app = Flask(__name__)

# MongoDB connection string
client = MongoClient("mongodb://localhost:27017/")
db = client['dashboard_db']
collection = db['dashboard_data']

@app.route('/')
def dashboard():
    """Render the dashboard page."""
    return render_template('dashboard.html')

@app.route('/api/data')
def get_data():
    """API to fetch data from MongoDB."""
    filters = {}

    # Apply filters from query parameters
    for field in ['end_year', 'topic', 'sector', 'region', 'pestle', 'source', 'country']:
        value = request.args.get(field)
        if value:
            filters[field] = value

    data = list(collection.find(filters, {"_id": 0}))  # Exclude MongoDB's _id
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
