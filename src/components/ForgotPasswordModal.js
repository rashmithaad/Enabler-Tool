// ForgotPasswordModal.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import { Form, Button, Card, Container } from 'react-bootstrap';

const ForgotPasswordModal = ({ actualUsername }) => { // Receive actualUsername as a prop
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === actualUsername) { // Check if entered username matches the actual username
      // Add your logic to handle the forgot password functionality, such as sending a reset link to the email
      alert(`Password reset link sent to ${email}`);
    } else {
      alert('Invalid username');
    }
  };

  const handleBackToLogin = () => {
    navigate('/');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
      <Card style={{ marginTop : '-100px',width: '35rem', padding: '1rem' }}>
        <Card.Body>
          <h2 className="mb-3 text-center" style={{ color: 'red', fontSize:'30px' }}>Forgot Password</h2>
          <h3 className="mb-4 text-center" style={{fontSize:'20px'}}>
            Please enter your email address. We will send you a link to reset your password.
          </h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <div className="d-flex align-items-center">
                <FaEnvelope className="mr-2" style={{fontSize:'30px', marginRight:'20px'}}/>
                <Form.Control
                  type="email"
                  placeholder="Enter the username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Button variant="secondary" type="button" onClick={handleBackToLogin}>
                Back to Login
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ForgotPasswordModal;
