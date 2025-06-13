import DocumentPreview from './DocumentPreview';

const SummaryView = ({ data, onVerify }) => (
  <>
    <h2>Summary of Submitted Data</h2>
    <div style={{
      background: "#f1f5f9",
      borderRadius: "10px",
      padding: "1.2rem",
      marginBottom: "1.5rem",
      boxShadow: "0 1px 4px rgba(60,72,100,0.06)"
    }}>
      <p><strong>Full Name:</strong> {data.fullName}</p>
      <p><strong>Date of Birth:</strong> {data.dob}</p>
      <p><strong>ID Number:</strong> {data.idNumber}</p>
    </div>
    <DocumentPreview file={data.file} />
    <button style={{ marginTop: "1.5rem" }} onClick={onVerify}>Verify</button>
  </>
);

export default SummaryView;
