import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faBullseye, faUserCheck, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import './Home.css'; // Import CSS file for styling

const Sidebar = ({ open }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation to dashboard
  const goToEmployeeManagement = () => {
    navigate('/employeemanagement'); // Redirect to '/dashboard' route
  };

  return (
    <div className={`sidebar ${open ? 'open' : ''}`}>
      <Container fluid>
        <Row>
          <Col md={12} className="navbar-dark bg-black text-light py-2"> {/* Change bg-dark to bg-black */}
            <div className="text-center mb-4">
              <FontAwesomeIcon icon={faUser} size="3x" className="mt-4"/>
              <h2 style={{fontSize:'20px', marginTop:'20px'}} >Hello Username...</h2>
            </div>
            <Button variant="secondary" className="w-100 mb-2 mt-2 fw-bold fs-6 p-2">
              <FontAwesomeIcon icon={faEye} className="mr-2" />
              Vision
            </Button>
            <Button variant="secondary" className="w-100 mb-2 fw-bold fs-6 p-2">
              <FontAwesomeIcon icon={faBullseye} className="mr-2" />
              Mission
            </Button>
            <Button variant="secondary" className="w-100 mb-2 fw-bold fs-6 p-2">
              <FontAwesomeIcon icon={faUserCheck} className="mr-2" />
              Active Users
            </Button>
            <Button variant="secondary" className="w-100 mb-2 fw-bold fs-6 p-2" onClick={goToEmployeeManagement}>
              <FontAwesomeIcon icon={faUserTimes} className="mr-2" />
              Inactive Users
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sidebar;
