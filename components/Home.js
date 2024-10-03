import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsList } from 'react-icons/bs'; // Importing the menu icon from react-icons
import Sidebar from './Sidebar'; // Import the Sidebar component
import companyImage from './company.jpg'; // Adjust the path based on your directory structure
import './Home.css'; // Import CSS file for styling

const Home = ({ handleSuccessfulLogin }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Container fluid className={`home-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="menu-wrapper">
        <div className="menu-icon" onClick={toggleSidebar}>
          <BsList size={40} />
        </div>
      </div>
      <Row className="content-wrapper align-items-center mt-15">
        <Col md={4} className={`text-center image-col ${sidebarOpen ? 'expand' : ''}`}>
          <div className="image-wrapper">
            <img src={companyImage} alt="Company" className="img-fluid" />
          </div>
        </Col>
        <Col md={8} className={`text-col ${sidebarOpen ? 'expand' : ''}`}>
          <div className="text-wrapper">
            <h1 className="company-heading">About the Company</h1>
            <p className="company-description">
              Cattain Group is an established IT solutions provider that empowers businesses to achieve their goals through a comprehensive suite of services. They leverage their expertise to deliver consulting services,
              outsourcing solutions, and Cattain Smart Office Products, all designed to streamline operations and optimize performance. Cattain Group recognizes the importance of workforce development and offers educational
              programs to help businesses transform their skills and stay ahead of the curve.
            </p>
          </div>
        </Col>
      </Row>
      <Sidebar open={sidebarOpen} />
    </Container>
  );
}

export default Home;
