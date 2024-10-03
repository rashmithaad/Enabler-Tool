import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const responseText = await response.text();
        console.log('Login successful:', responseText);
        onLogin(username, password, handleSuccessfulLogin); // Pass callback function
        navigate('/home');
      } else {
        const errorText = await response.text();
        console.error('Login failed:', errorText);
        setLoginError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError('An error occurred. Please try again later.');
    }
  };

  const handleSuccessfulLogin = () => {
    // Implement notification logic here
    alert('Login successful!');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '500px' }}>
      <Card style={{ marginTop: '-10px', width: '22rem', padding: '0.5rem' }}>
        <Card.Body style={{ marginTop: '-20px' }}>
          <h2 className="mb-2 text-center">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="formBasicUsername">
              <Form.Label style={{ fontSize: '16px', fontWeight: 'normal' }}>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label style={{ fontSize: '16px', fontWeight: 'normal' }}>Password</Form.Label>
              <div className="d-flex">
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2"
                  style={{ height: '38px' }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </div>
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Remember me"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-2">
              Login
            </Button>

            {loginError && (
              <Alert variant="danger" onClose={() => setLoginError('')} dismissible>
                {loginError}
              </Alert>
            )}

            <p
              className="text-center mb-0"
              onClick={() => navigate('/forgot-password')}
              style={{ cursor: 'pointer', color: '#007BFF' }}
            >
              Forgot Password?
            </p>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginForm;
