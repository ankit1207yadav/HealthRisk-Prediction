# AegisHealth AI — Multi-Disease Prediction & Analytics Platform

AegisHealth AI is a premium, hospital-grade Clinical Decision Support System (CDSS) designed to assist medical practitioners in screening patient health risk factors. Powered by a machine learning voting ensemble classifier, the platform calculates predictive metrics for four major diseases: **Diabetes, Cardiovascular Disease, Chronic Kidney Disease (CKD), and Hepatic (Liver) Disease**.

---

## 🚀 Key Features

* **Ensemble ML Classification:** Combines the outputs of five distinct classifiers (Random Forest, XGBoost, Support Vector Machines, K-Nearest Neighbors, and Gaussian Naive Bayes) using an optimized Voting Classifier to maximize prediction accuracy.
* **Granular Disease Portals:**
  * **Cardiovascular Diagnostics:** Assesses coronary artery disease risk via chest pain classification, blood pressure, fasting sugars, ECG waveforms, and ST-segment depression.
  * **Diabetes Mellitus Screening:** Evaluates endocrine glucose tolerances, insulin curves, and body mass indexes (BMI).
  * **Chronic Kidney Disease (CKD) Profiling:** Evaluates kidney filtration statuses using blood urea, serum creatinine, specific gravity, and protein-albumin filtration rates.
  * **Hepatic Function Diagnostics:** Analyzes bilirubin indexes and hepatic transaminase enzyme trends.
* **Vibrant Analytics Dashboard:** Displays model accuracy, precision, sensitivity, and F1-score benchmarks interactively using Recharts.
* **Patient Records Logs:** Maintains a secure, client-side history using browser `localStorage` where clinicians can search previous diagnoses, filter records, or download formatted PDF summaries.
* **AI conversational Health Consultant:** Embedded Botpress conversational chatbot ready to discuss symptom definitions, dietary regimes, and warning thresholds.

---

## 🛠️ System Architecture

AegisHealth AI is organized into a clean, decoupled architecture:
1. **Client Interface (React + Tailwind CSS):** A responsive, dashboard-style interface styled with customized shadows, professional typography (Inter/Poppins), and dark mode compatibility.
2. **Backend Service (Flask API):** A lightweight API service executing standard scaling pipelines (`StandardScaler`) and running pre-trained ML models.

```
+----------------------------------+          +----------------------------------+
|      AegisHealth React UI        |          |         Flask API Backend        |
|  (Dashboard, Forms, Recharts)    |  POST    |  (Port 5000, CORS, joblib load)  |
|  http://localhost:5173           |--------->|  http://127.0.0.1:5000/predict   |
+----------------------------------+  (JSON)  +----------------------------------+
                                                               |
                                                               v
                                                      +------------------+
                                                      |  ML Model Pool   |
                                                      |  (Voting Pickle) |
                                                      +------------------+
```

---

## 📊 Model Diagnostic Benchmarks

The predictive models were trained on validated datasets (available in `Datasets/`) and benchmarked using classification reports (detailed in `Notebooks/`).

| Diagnostics Module | Best Performing Classifier | Accuracy | Precision | Recall / Sensitivity | F1-Score |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Cardiovascular** | Support Vector Machine (SVM) | **92.7%** | 91.7% | 94.3% | 93.0% |
| **Diabetes** | Voting Classifier (Ensemble) | **94.8%** | 94.5% | 95.1% | 94.8% |
| **Kidney (CKD)** | Voting Classifier (Ensemble) | **98.2%** | 100.0% | 94.8% | 97.3% |
| **Hepatic (Liver)**| XGBoost / Voting Classifier | **99.9%** | 99.9% | 100.0% | 99.9% |

---

## 💻 Local Installation & Setup

### Prerequisites
* Python (version >= 3.8)
* Node.js (version >= 18)
* npm (version >= 9)

---

### Step 1: Configure the Python Backend API

1. Navigate to the root directory:
   ```bash
   cd HealthRisk-Prediction
   ```

2. Create and activate a Python virtual environment:
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. Install the backend dependencies:
   ```bash
   pip install flask flask-cors joblib numpy scikit-learn xgboost
   ```

4. Launch the Flask API server:
   ```bash
   python app.py
   ```
   *The backend will boot in debug mode on `http://127.0.0.1:5000`.*

---

### Step 2: Configure the React Frontend Client

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the node dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   *The client will boot and be accessible at `http://localhost:5173`.*

---

## 🔒 Medical Disclaimer & Care Notice

**AegisHealth AI is a clinical decision support tool and is not certified for primary emergency medical diagnostics.** Prediction outcomes, confidences, and chatbot outputs are secondary indicators intended to complement standard physician assessments. If a patient is experiencing acute chest pain or respiratory distress, contact emergency services (e.g., 911) immediately.

---

## 📞 License & Contact

Distributed under the MIT License. For platform inquiries, suggestions, or institutional integrations, reach out via the [GitHub Issues page](https://github.com/ankit1207yadav/HealthRisk-Prediction/issues).
