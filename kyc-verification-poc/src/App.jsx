import { useState } from 'react';
import KYCForm from './components/KYCForm';
import SummaryView from './components/SummaryView';
import VerifiedScreen from './components/VerifiedScreen';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setStep(2);
  };

  const handleVerify = () => {
    setStep(3);
  };

  return (
    <div className="container">
      {step === 1 && <KYCForm onSubmit={handleFormSubmit} />}
      {step === 2 && <SummaryView data={formData} onVerify={handleVerify} />}
      {step === 3 && <VerifiedScreen />}
    </div>
  );
}

export default App;
