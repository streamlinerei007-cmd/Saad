import { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I will ask you two quick questions first, then I will show the form.' }
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0); // 0: ask name, 1: ask email, 2: show form
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('idle');
  const [statusError, setStatusError] = useState('');
  const SERVICE_EMAIL = 'saidali2847@gmail.com';
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step < 2) {
      if (!input.trim()) {
        setStatusError('Please answer the question before moving on.');
        return;
      }

      setStatusError('');
      const answer = input.trim();
      setMessages(prev => [...prev, { sender: 'user', text: answer }]);
      setInput('');

      if (step === 0) {
        setFormData(prev => ({ ...prev, name: answer }));
        setStep(1);
        setTimeout(() => {
          setMessages(prev => [...prev, { sender: 'bot', text: 'Nice to meet you! Please provide your email address next.' }]);
        }, 400);
        return;
      }

      if (step === 1) {
        setFormData(prev => ({ ...prev, email: answer }));
        setStep(2);
        setTimeout(() => {
          setMessages(prev => [...prev, { sender: 'bot', text: 'Thanks! Now fill out the form below and add your phone number.' }]);
        }, 400);
        return;
      }
    }

    if (step === 2) {
      if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
        setStatusError('Please complete all fields before submitting.');
        return;
      }

      setStatus('sending');
      setStatusError('');

      setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'bot', text: 'Submitting your form...' }]);
      }, 100);

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${SERVICE_EMAIL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: 'New Chatbot Contact Submission',
            _captcha: 'false',
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: `Chatbot contact: ${formData.name}, ${formData.email}, ${formData.phone}`
          })
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        setStatus('success');
        setMessages(prev => [
          ...prev,
          { sender: 'bot', text: `Form submitted! Notification will arrive at ${SERVICE_EMAIL}. ✅` }
        ]);
        setFormData({ name: '', email: '', phone: '' });
        setStep(0);
        setTimeout(() => {
          setMessages(prev => [...prev, { sender: 'bot', text: 'If you want, you can start again by answering the first question.' }]);
        }, 400);
      } catch (error) {
        setStatus('error');
        setStatusError('Unable to submit the form. Please try again later.');
        setMessages(prev => [
          ...prev,
          { sender: 'bot', text: 'Oops! I could not send the form. Please try again later.' }
        ]);
      } finally {
        setStatus('idle');
      }
    }
  };

  return (
    <div className="chatbot-container">
      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-info">
            <span className="bot-avatar">🤖</span>
            <div>
              <h4>Support Bot</h4>
              <p>Typically replies in a few hours</p>
            </div>
          </div>
          <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
        </div>
        
        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message-wrapper ${msg.sender}`}>
              <div className="message-bubble">
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input-area" onSubmit={handleSubmit}>
          {step < 2 ? (
            <>
              <input
                type={step === 0 ? 'text' : 'email'}
                placeholder={step === 0 ? 'Enter your name...' : 'Enter your email...'}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={status === 'sending'}
                required
              />
              {statusError && <div className="chat-error-banner">{statusError}</div>}
              <button type="submit" disabled={status === 'sending' || !input.trim()}>
                {status === 'sending' ? 'Sending…' : 'Next'}
              </button>
            </>
          ) : (
            <>
              <div className="form-fields">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  required
                />
              </div>
              {statusError && <div className="chat-error-banner">{statusError}</div>}
              <button
                type="submit"
                disabled={
                  status === 'sending' ||
                  !formData.name.trim() ||
                  !formData.email.trim() ||
                  !formData.phone.trim()
                }
              >
                {status === 'sending' ? 'Sending…' : 'Submit'}
              </button>
            </>
          )}
        </form>
      </div>

      {/* Floating Toggle Button */}
      <button 
        className={`chat-toggle-btn ${isOpen ? 'hidden' : ''}`} 
        onClick={() => setIsOpen(true)}
      >
        💬
      </button>
    </div>
  );
}
