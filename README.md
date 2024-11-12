# 📊 Data Visualization Dashboard

A Flask-based web application for visualizing data stored in MongoDB. This dashboard provides dynamic filtering and interactive visualizations using Plotly.

## 🛠️ Features

- **Filters:** Apply filters by topic, region, sector, PEST, source, and more.
- **Interactive Charts:** Display data through bar charts, pie charts, and 3D graphs using Plotly.
- **MongoDB Integration:** Fetch data dynamically from a MongoDB collection.
- **Loading Indicator:** User-friendly loading spinner during data fetch.
  
---

## 🖥️ Demo

[https://drive.google.com/file/d/1dBG5F740Dcdwr2EOYOdWQGiNp-_xkkOQ/view?usp=sharing]

---

## 🏗️ Project Structure

```
📦 dashboard-project
│
├── app.py                  # Flask application entry point
├── jsondata.json           # Sample data to be loaded into MongoDB
├── templates/
│   └── dashboard.html      # HTML template for the dashboard
├── static/
│   ├── style.css           # Custom styles for the dashboard
│   └── dashboard.js        # Client-side JS logic for filtering and chart rendering
├── README.md               # Project documentation
└── requirements.txt        # Python dependencies
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Python 3.x](https://www.python.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/NIKHIL-58/data_visualization_dashboards.git
   cd  data_visualization_dashboards.git
   ```

2. **Create and Activate Virtual Environment (Optional)**  
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Linux/Mac
   venv\Scripts\activate     # On Windows
   ```

3. **Install Dependencies**  
   ```bash
   pip install -r requirements.txt
   ```

4. **Set Up MongoDB**  
   Start your MongoDB server:
   ```bash
   mongod --dbpath <path_to_your_mongodb_data_directory>
   ```

5. **Load Sample Data into MongoDB**  
   ```bash
   python load_data.py
   ```

6. **Run the Flask App**  
   ```bash
   python app.py
   ```

7. **Access the Dashboard**  
   Open your browser and go to:  
   [http://127.0.0.1:5000/](http://127.0.0.1:5000/)

---

## 🧰 API Endpoints

| **Endpoint**      | **Method** | **Description**                 |
|-------------------|------------|---------------------------------|
| `/`               | GET        | Renders the dashboard page      |
| `/api/data`       | GET        | Fetches data from MongoDB based on filters |

Example API Call:  
```http
http://127.0.0.1:5000/api/data?topic=oil&region=Europe
```

---

## 📄 Usage

1. **Apply Filters:** Select from multiple filters (Topic, Region, Source, etc.) and click **Apply Filters** to update the charts.
2. **View Charts:** Explore various bar charts, pie charts, and 3D plots for data insights.
3. **Loading Indicator:** A spinner indicates when data is being fetched.

---

## 🛠️ Built With

- **Backend:** Flask, Python
- **Frontend:** HTML, CSS, JavaScript, Bootstrap
- **Database:** MongoDB
- **Visualization:** Plotly.js

---

## 📂 Requirements

Create a `requirements.txt` file with the following dependencies:

```txt
Flask==2.2.2
pymongo==4.5.0
pandas==2.1.1
```

---

## ⚠️ Troubleshooting

- **MongoDB Connection Issue:** Make sure MongoDB is running and accessible on `localhost:27017`.
- **Data Not Loading:** Ensure the sample data is correctly inserted into the MongoDB collection.

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Create a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 💬 Contact

For any questions, feel free to contact:

- **Email:** [nikhildubey183@gmail.com](mailto:nikhildubey183@gmail.com)
- **GitHub:** [https://github.com/NIKHIL-58](https://github.com/NIKHIL-58)

---

## ⭐ Acknowledgements

- [MongoDB](https://www.mongodb.com/)
- [Flask](https://flask.palletsprojects.com/)
- [Plotly](https://plotly.com/)

---
