# 🔐 KYC Verification POC

A simple full-stack **Proof of Concept (POC)** for Know Your Customer (KYC) verification using **React (frontend)** and **Node.js (backend)** with **real-time Aadhaar/PAN validation**.

---

## 📌 Features

- 📝 Collects **Full Name**, **Date of Birth**, **Aadhaar/PAN Number**, and **Document Upload**
- 📤 **Live document preview** (image or PDF)
- 🔍 **Real-time Aadhaar/PAN validation** (mocked via backend API)
- 📄 Read-only **summary view** before submission
- ✅ Simulated **KYC verification flow**
- 💻 Clean, **responsive** and accessible UI using plain CSS (no Tailwind)
- ❌ No data storage or real validation (this is a frontend-first demo)

---

## 🗂️ Folder Structure

```text
kyc-verification-poc/
├── kyc-backend/               # Mock Node.js Express backend
│   ├── index.js
│   ├── package.json
│   └── .gitignore
└── kyc-verification-poc/      # React frontend (Vite)
    ├── src/
    ├── public/
    ├── package.json
    ├── vite.config.js
    └── .gitignore
````

---

## 🚀 Getting Started (Run Locally)

### 1. Clone the Repository

```bash
git clone https://github.com/vanshjaggi/kyc-verification-poc.git
cd kyc-verification-poc
```

### 2. Install Dependencies

#### Backend Setup

```bash
cd kyc-backend
npm install
```

#### Frontend Setup

```bash
cd ../kyc-verification-poc
npm install
```

---

### 3. Start the Applications

#### Start the Backend Server

```bash
cd ../kyc-backend
node index.js
```

The backend will run at:
➡️ `http://localhost:5000`

#### Start the Frontend (Vite Dev Server)

```bash
cd ../kyc-verification-poc
npm run dev
```

Frontend will run at (usually):
➡️ `http://localhost:5173`

> If a different port is shown in terminal, use that URL.

---

## 🧪 Usage Instructions

1. Visit the frontend page (`http://localhost:5173`)
2. Fill in the KYC form:

   * Full Name
   * Date of Birth
   * Aadhaar or PAN Number
   * Upload Document (Image or PDF, max 2MB)
3. Real-time Aadhaar/PAN format is validated as you type
4. On clicking **Submit**, you’ll see a summary of your details
5. Click **Verify** to simulate KYC verification
6. A success message (`✅ KYC Verification Completed`) is displayed

---

## ⚠️ Notes

* ✅ Aadhaar/PAN validation is mocked in backend
* ❌ No data is saved (no file upload, no database)
* 🌐 Make sure frontend and backend run **on the same machine** or adjust URLs accordingly
* 🧪 Backend endpoint used by frontend: `http://localhost:5000/validate-id`

---

## 🧰 Future Enhancements (Post-POC Ideas)

* 🔐 Integrate Digilocker or other KYC APIs (Karza, Setu, Signzy)
* 📦 Add database to store form data
* 🧠 Use OCR to extract data from uploaded documents
* 🧪 Real-time API validation with live keys
* 📸 Add webcam capture for identity proof
* 🧾 PDF generation of submitted KYC
