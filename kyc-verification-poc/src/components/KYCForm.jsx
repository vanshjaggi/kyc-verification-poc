import { useState } from 'react';

const KYCForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    fullName: '',
    dob: '',
    idNumber: '',
    file: null,
  });
  const [errors, setErrors] = useState({});
  const [idValid, setIdValid] = useState(null); // null | true | false
  const [idLoading, setIdLoading] = useState(false);
  const [idReason, setIdReason] = useState('');

  // Helper to detect Aadhaar or PAN
  const getIdType = (id) => {
    if (/^[0-9]{12}$/.test(id)) return 'aadhaar';
    if (/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(id)) return 'pan';
    return id.length >= 12 ? 'aadhaar' : 'pan'; // fallback guess
  };

  // Async validation for Aadhaar/PAN
  const validateIdNumber = async (id) => {
    setIdLoading(true);
    setIdValid(null);
    setIdReason('');
    try {
      const type = getIdType(id);
      const res = await fetch('http://localhost:5000/validate-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, id }),
      });
      const data = await res.json();
      setIdValid(data.valid);
      setIdReason(data.reason || '');
    } catch (err) {
      setIdValid(false);
      setIdReason('Validation error');
    } finally {
      setIdLoading(false);
    }
  };

  const validate = () => {
    const errs = {};
    if (!form.fullName.match(/^[A-Za-z ]+$/)) errs.fullName = "Only alphabets allowed.";
    if (!form.dob || new Date(form.dob) >= new Date()) errs.dob = "DOB must be in the past.";
    if (!form.idNumber || form.idNumber.length < 10) errs.idNumber = "Min 10 characters.";
    if (
      !form.file ||
      !['image/png', 'image/jpeg', 'application/pdf'].includes(form.file.type) ||
      form.file.size > 2 * 1024 * 1024
    ) {
      errs.file = "Upload JPG/PNG/PDF ≤ 2MB.";
    }
    if (idValid === false) errs.idNumber = idReason || "Invalid Aadhaar/PAN";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      onSubmit(form);
    }
  };

  return (
    <>
      <h2>KYC Verification Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />
        {errors.fullName && <div className="error">{errors.fullName}</div>}

        <label>Date of Birth</label>
        <input
          type="date"
          value={form.dob}
          onChange={(e) => setForm({ ...form, dob: e.target.value })}
        />
        {errors.dob && <div className="error">{errors.dob}</div>}

        <label>ID Number (Aadhar/PAN)</label>
        <input
          type="text"
          value={form.idNumber}
          onChange={e => {
            setForm({ ...form, idNumber: e.target.value });
            setIdValid(null);
            setIdReason('');
          }}
          onBlur={e => {
            if (e.target.value.length >= 10) validateIdNumber(e.target.value);
          }}
        />
        {idLoading && <div className="error">Validating...</div>}
        {idValid === true && <div style={{ color: "#22c55e", marginBottom: "0.5rem" }}>ID is valid</div>}
        {idValid === false && <div className="error">{idReason || "Invalid Aadhaar/PAN"}</div>}
        {errors.idNumber && <div className="error">{errors.idNumber}</div>}

        <label>Upload Document (JPG/PNG/PDF)</label>
        <input
          type="file"
          accept=".png,.jpg,.jpeg,.pdf"
          onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
        />
        {errors.file && <div className="error">{errors.file}</div>}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default KYCForm;
