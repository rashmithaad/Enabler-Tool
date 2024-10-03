import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import './Dashboard.css';

const FilterDropdowns = ({ onChange }) => {
    const [category, setCategory] = useState("");

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setCategory(value);
        onChange(e);
    };

    const handleDropdownChange = (e) => {
        onChange(e);
    };

    const globalCountries = ["China", "Japan", "South Korea", "Indonesia", "United States", "Canada", "Mexico", "Brazil", "Argentina", "Nigeria", "Germany", "France", "United Kingdom", "Italy", "Spain", "Australia"];
    const localCountries = ["India"];

    const globalDivisions = ["Asia", "Bali", "Central", "East", "North America", "South America", "Africa", "Europe", "Oceania"];
    const localDivisions = ["North", "South", "East", "West"];

    const globalRegions = ["Abia", "Alberta", "Andalusia", "Centro-Oeste", "Chubut", "Gauteng", "Giza", "Gyeonggi", "Hainan", "Hidalgo", "Ile-de-France", "Jalisco", "Kedah", "Kyoto", "London", "Lowo", "Minas Gerais", "Mongolia", "Murcia", "Nebraska", "Nevada", "New Jersey", "Normandy", "Northern Territory", "Nouvelle-Aquitaine", "Nova Scotia", "North America", "Nunavut", "Oklahoma", "Papua", "Pennsylvania", "Rhine-Westphalia", "South Africa", "Veneto", "Vermont", "Volga", "Volgograd", "West Virginia", "Yamanshi", "Ytuscany"];
    const localRegions = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Kerala", "Madhya Pradesh", "Maharastra", "Manipur", "Meghalaya", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

    return (
        <>
            <Row className="mb-2">
                <Col>
                    <Form.Select name="entity_name" onChange={handleDropdownChange} autoComplete="organization">
                        <option value="">Select Entity</option>
                        <option value="Cattain IT Labs">Cattain IT Labs</option>
                        <option value="Cattain Studios">Cattain Studios</option>
                        <option value="Cattain Market place">Cattain Market place</option>
                        <option value="Cattain Education">Cattain Education</option>
                        <option value="Cattain International">Cattain International</option>
                        <option value="Cattain Digital">Cattain Digital</option>
                        <option value="2103 IN 125">2103 IN 125</option>
                        <option value="World Yatri">World Yatri</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select name="category" onChange={handleCategoryChange} autoComplete="category">
                        <option value="">Select Category</option>
                        <option value="Global">Global</option>
                        <option value="Local">Local</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select name="country" onChange={handleDropdownChange} className="scrollable-dropdown" autoComplete="country">
                        <option value="">Select Country</option>
                        {category === "Global" && globalCountries.map(country => (
                            <option key={country} value={country}>{country}</option>
                        ))}
                        {category === "Local" && localCountries.map(country => (
                            <option key={country} value={country}>{country}</option>
                        ))}
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select name="fiscal_year_start" onChange={handleDropdownChange} autoComplete="off">
                        <option value="">Select Fiscal Year Start</option>
                        <option value="2024-04-01">2024-04-01</option>
                        <option value="2025-04-01">2025-04-01</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Select name="fiscal_year_end" onChange={handleDropdownChange} autoComplete="off">
                        <option value="">Select Fiscal Year End</option>
                        <option value="2025-04-01">2025-04-01</option>
                        <option value="2026-04-01">2026-04-01</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select name="division" onChange={handleDropdownChange} className="scrollable-dropdown" autoComplete="organization-title">
                        <option value="">Select Division</option>
                        {category === "Global" && globalDivisions.map(division => (
                            <option key={division} value={division}>{division}</option>
                        ))}
                        {category === "Local" && localDivisions.map(division => (
                            <option key={division} value={division}>{division}</option>
                        ))}
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select name="region" onChange={handleDropdownChange} className="scrollable-dropdown" autoComplete="address-level1">
                        <option value="">Select Region</option>
                        {category === "Global" && globalRegions.map(region => (
                            <option key={region} value={region}>{region}</option>
                        ))}
                        {category === "Local" && localRegions.map(region => (
                            <option key={region} value={region}>{region}</option>
                        ))}
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select name="department_name" onChange={handleDropdownChange} className="scrollable-dropdown" autoComplete="organization">
                        <option value="">Select Department</option>
                        <option value="AI and Machine Learning">AI and Machine Learning</option>
                        <option value="API Management">API Management</option>
                        <option value="Application Support">Application Support</option>
                        <option value="Business Continuity Planning">Business Continuity Planning</option>
                        <option value="Business Intelligence">Business Intelligence</option>
                        <option value="Business Systems">Business Systems</option>
                        <option value="Cloud Services">Cloud Services</option>
                        <option value="Customer Relationship Management (CRM) Systems">Customer Relationship Management (CRM) Systems</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Data Analytics">Data Analytics</option>
                        <option value="Data Governance">Data Governance</option>
                        <option value="Data Migration Services">Data Migration Services</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Data Warehousing">Data Warehousing</option>
                        <option value="Database Administration">Database Administration</option>
                        <option value="DevOps">DevOps</option>
                        <option value="Digital Transformation">Digital Transformation</option>
                        <option value="Digital Workplace">Digital Workplace</option>
                        <option value="Emerging Technologies">Emerging Technologies</option>
                        <option value="End-User Computing">End-User Computing</option>
                        <option value="End-User Services">End-User Services</option>
                        <option value="Enterprise Architecture">Enterprise Architecture</option>
                        <option value="Enterprise Data Management">Enterprise Data Management</option>
                        <option value="Enterprise Resource Planning (ERP)">Enterprise Resource Planning (ERP)</option>
                        <option value="Help Desk / IT Support">Help Desk / IT Support</option>
                        <option value="Incident Management">Incident Management</option>
                        <option value="Information Security">Information Security</option>
                        <option value="Infrastructure Engineering">Infrastructure Engineering</option>
                        <option value="Infrastructure Optimization">Infrastructure Optimization</option>
                        <option value="Innovation Lab">Innovation Lab</option>
                        <option value="IoT (Internet of Things)">IoT (Internet of Things)</option>
                        <option value="IT Administration">IT Administration</option>
                        <option value="IT Asset Lifecyle Management">IT Asset Lifecyle Management</option>
                        <option value="IT Asset Management">IT Asset Management</option>
                        <option value="IT Asset Recovery">IT Asset Recovery</option>
                        <option value="IT Audit">IT Audit</option>
                        <option value="IT Change Management">IT Change Management</option>
                        <option value="IT Compliance">IT Compliance</option>
                        <option value="IT Consultancy">IT Consultancy</option>
                        <option value="IT Contracts Management">IT Contracts Management</option>
                        <option value="IT Customer Support">IT Customer Support</option>
                        <option value="IT Disaster Recovery">IT Disaster Recovery</option>
                        <option value="IT Field Operations">IT Field Operations</option>
                        <option value="IT Field Support">IT Field Support</option>
                        <option value="IT Financial Management">IT Financial Management</option>
                        <option value="IT Governance">IT Governance</option>
                        <option value="IT Health and Safety">IT Health and Safety</option>
                        <option value="IT Infrastructure">IT Infrastructure</option>
                        <option value="IT Innovation Hub">IT Innovation Hub</option>
                        <option value="IT Knowledge Management">IT Knowledge Management</option>
                        <option value="IT Liaison">IT Liaison</option>
                        <option value="IT Operations">IT Operations</option>
                        <option value="IT Performance Management">IT Performance Management</option>
                        <option value="IT Portfolio Management">IT Portfolio Management</option>
                        <option value="IT Process Improvement">IT Process Improvement</option>
                        <option value="Technical  service">'Technical  service'</option>
                    </Form.Select>
                </Col>
            </Row>
        </>
    );
};

export default FilterDropdowns;