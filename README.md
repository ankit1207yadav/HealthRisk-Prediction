# Disease Prediction Using Machine Learning

## Overview
This project is a web application that predicts the likelihood of individuals developing four different diseases: **diabetes, heart disease, liver disease, and chronic kidney disease**. The system utilizes multiple machine learning models to provide accurate predictions and integrates a chatbot for personalized health guidance.

## Features
- **Disease Prediction:** Users can input relevant health parameters (such as blood glucose levels, BMI, age, etc.) to predict the likelihood of developing a specific disease.
- **Machine Learning Models:** Implements multiple machine learning algorithms, including:
  - K-Nearest Neighbors (KNN)
  - Random Forest
  - XGBoost
  - Support Vector Machine (SVM)
  - Naïve Bayes
- **Voting Classifier:** A combination of the top three performing models is used to enhance accuracy.
- **Chatbot Integration:** A chatbot, powered by the **Botpress API**, provides real-time health guidance and answers user queries based on symptoms.
- **User-Friendly Interface:** A simple and intuitive web interface that allows users to interact seamlessly with the system.

## Technologies Used
- **Machine Learning:** Scikit-learn, XGBoost
- **Backend:** Flask / Django
- **Frontend:** React / HTML, CSS, JavaScript
- **Database:** SQLite / PostgreSQL
- **Chatbot:** Botpress API

## Installation
To run this project locally, follow these steps:

### Prerequisites
- Python (>=3.8)
- Pip
- Node.js & npm (for frontend)
- Virtual Environment (optional but recommended)

### Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/disease-prediction-ml.git
   cd disease-prediction-ml
   ```

2. **Set Up the Backend:**
   ```bash
   cd backend
   python -m venv venv  # Optional: Create a virtual environment
   source venv/bin/activate  # For Linux/macOS
   venv\Scripts\activate  # For Windows
   pip install -r requirements.txt
   python app.py  # Start the backend server
   ```

3. **Set Up the Frontend:**
   ```bash
   cd frontend
   npm install
   npm start  # Start the frontend server
   ```

4. **Access the Application:**
   Open your browser and go to `http://localhost:3000`

## Usage
1. Select a disease from the given options.
2. Enter the required health parameters.
3. Click the "Predict" button to get the results.
4. Use the chatbot for additional health guidance and information.

## Dataset
The model is trained on publicly available medical datasets related to diabetes, heart disease, liver disease, and chronic kidney disease. Data preprocessing and feature engineering techniques have been applied to enhance model accuracy.

## Results
The voting classifier achieves high accuracy by combining the best-performing models. Model performance is evaluated using accuracy, precision, recall, and F1-score metrics.

## Future Improvements
- Expand to include more diseases.
- Enhance chatbot capabilities using NLP.
- Deploy the application on cloud platforms.

## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes and push to your fork.
4. Submit a pull request.

## Contact
For any questions or suggestions, please reach out via [GitHub Issues](https://github.com/your-username/disease-prediction-ml/issues).

---
**Star this repository** ⭐ if you found this useful!

