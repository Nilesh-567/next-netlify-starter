// pages/index.js
import { useState } from 'react';
import Modal from '../components/Modal';
import DisclaimerContent from '../components/DisclaimerContent'; 
import ContactUsContent from '../components/ContactUsContent';

export default function Home() {

    const [isDisclaimerOpen, setDisclaimerOpen] = useState(false);
    const [isContactUsOpen, setContactUsOpen] = useState(false);

    const openDisclaimer = () => setDisclaimerOpen(true);
    const closeDisclaimer = () => setDisclaimerOpen(false);

    const openContactUs = () => setContactUsOpen(true);
    const closeContactUs = () => setContactUsOpen(false);


  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password })
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <label>Name:</label>
          <input className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-container">
          <label>Password:</label>
          <input className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        
        <button className="button" type="submit">Login</button>
        <p>{message}</p>
        </div>

      </form>
      
      <button
                onClick={() => window.location.href = '/api/auth/login'}
                style={{
                    padding: '10px',
                    margin: '5% 0 0 32%',
                    backgroundColor: '#DB4437',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    width: '100%',
                    maxWidth: '400px',
                }}
            >
                Login with Google
            </button>


      <footer style={{ marginTop: '20px', fontSize: '0.9rem', color: '#0070f3', textAlign: 'center' }}>
                <p style={{ cursor: 'pointer', margin: '5px 0' }} onClick={openDisclaimer}>
                    Disclaimer
                </p>
                <p style={{ cursor: 'pointer', margin: '5px 0' }} onClick={openContactUs}>
                    Contact Us
                </p>
            </footer>

            {/* Disclaimer Modal */}
            <Modal isOpen={isDisclaimerOpen} onClose={closeDisclaimer}>
                <DisclaimerContent />
            </Modal>

            {/* Contact Us Modal */}
            <Modal isOpen={isContactUsOpen} onClose={closeContactUs}>
                <ContactUsContent />
            </Modal>
    </div>
  );
}
