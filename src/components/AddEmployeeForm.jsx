import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import "./Dashboard.css"


const AddEmployeeForm = ({ show, onClose, onSave }) => {
    const [newEmployee, setNewEmployee] = useState({
        employee_name: '',
        employee_id: '',
        employee_status: '',
        country: '',
        region: '',
        division: '',
        entity_name: '',
        entity_id: '',
        category: '',
        fiscal_year_start: '',
        fiscal_year_end: '',
        employee_position: '',
        department_name: '',
        department_id: '',
        team_name: '',
        team_id: '',
        project_name: '',
        project_id: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: name === 'employee_status' ? Number(value) : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
    
        onSave(newEmployee); // Pass updatedEmployee to the onSave function for saving changes
    };


    return (
        <>
        <div>
            <Modal show={show} onHide={onClose} dialogClassName="modal-lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add New Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-sm-4">
                                <Form.Group controlId="formDepartmentName">
        <Form.Label>Department_Name</Form.Label>
        <Form.Select
            name="department_name"
            value={newEmployee.department_name}
            onChange={handleChange}
            className="scrollable-dropdown"
            required
        >
            <option value="">Select Department Name</option>
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
                        <option value="IT Process Improvement">IT Process Improvement</option>
                        <option value="IT Procurement">IT Procurement</option>
                        <option value="IT Resource Planning">IT Resource Planning</option>
                        <option value="IT Risk Management">IT Risk Management</option>
                        <option value="IT Service Delivery">IT Service Delivery</option>
                        <option value="IT Service Management">IT Service Management</option>
                        <option value="IT Solutions Architecture">IT Solutions Architecture</option>
                        <option value="IT Strategy and Planning">IT Strategy and Planning</option>
                        <option value="IT Training and Development">IT Training and Development</option>
                        <option value="IT Training Programs">IT Training Programs</option>
                        <option value="Mobile Development">Mobile Development</option>
                        <option value="Mobile Device Management (MDM)">Mobile Device Management (MDM)</option>
                        <option value="Multimedia Services">Multimedia Services</option>
                        <option value="Network Architecture">Network Architecture</option>
                        <option value="Network Services">Network Services</option>
                        <option value="Platform Services">Platform Services</option>
                        <option value="Quality Assurance (QA)">Quality Assurance (QA)</option>
                        <option value="Research and Development (R&D)">Research and Development (R&D)</option>
                        <option value="Virtualization Services">Virtualization Services</option>
                        <option value="Service Desk Management">Service Desk Management</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Systems Engineering">Systems Engineering</option>
                        <option value="Systems Integration">Systems Integration</option>
                        <option value="Systems Monitoring">Systems Monitoring</option>
                        <option value="T Project Management">T Project Management</option>
                        <option value="Technical Architecture">Technical Architecture</option>
                        <option value="Technical Services">Technical Services</option>
                        <option value="Technical Support Services">Technical Support Services</option>
                        <option value="Technical Writing and Documentation">Technical Writing and Documentation</option>
                        <option value="Technology Asset Management">Technology Asset Management</option>
                        <option value="Technology Compliance">Technology Compliance</option>
                        <option value="Technology Governance">Technology Governance</option>
                        <option value="Technology Innovation">Technology Innovation</option>
                        <option value="Technology Risk Assessment">Technology Risk Assessment</option>
                        <option value="Technology Solutions">Technology Solutions</option>
                        <option value="Telecommunications">Telecommunications</option>
                        <option value="Unified Communications">Unified Communications</option>
                        <option value="User Experience (UX)">User Experience (UX)</option>
                        <option value="Vendor Management">Vendor Management</option>
                        <option value="Virtualization Services">Virtualization Services</option>
                        <option value="Web Development">Web Development</option>
        </Form.Select>
    </Form.Group>
        </div>
        <div className="col-sm-4">
            <Form.Group controlId="formDepartmentId">
                <Form.Label>Department_ID</Form.Label>
                <Form.Control
                    type="text"
                    name="department_id"
                    value={newEmployee.department_id}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
        </div>
        <div className="col-sm-4">
            <Form.Group controlId="formTeamName">
                <Form.Label>Team_Name</Form.Label>
                <Form.Control
                    type="text"
                    name="team_name"
                    value={newEmployee.team_name}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
        </div>
    </div>
    <div className="row">
        <div className="col-sm-4">
            <Form.Group controlId="formTeamId">
                <Form.Label>Team_ID</Form.Label>
                <Form.Control
                    type="text"
                    name="team_id"
                    value={newEmployee.team_id}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
        </div>
        <div className="col-sm-4">
            <Form.Group controlId="formProjectName">
                <Form.Label>Project_Name</Form.Label>
                <Form.Control
                    type="text"
                    name="project_name"
                    value={newEmployee.project_name}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
        </div>
        <div className="col-sm-4">
            <Form.Group controlId="formProjectId">
                <Form.Label>Project_ID</Form.Label>
                <Form.Control
                    type="text"
                    name="project_id"
                    value={newEmployee.project_id}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
        </div>
    </div>
    <div className="row">
        <div className="col-sm-4">
            <Form.Group controlId="formEmployeeName">
                <Form.Label>Employee_Name</Form.Label>
                <Form.Control
                    type="text"
                    name="employee_name"
                    value={newEmployee.employee_name}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
        </div>
        <div className="col-sm-4">
            <Form.Group controlId="formEmployeeId">
                <Form.Label>Employee_ID</Form.Label>
                <Form.Control
                    type="text"
                    name="employee_id"
                    value={newEmployee.employee_id}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
        </div>
        <div className="col-sm-4">
            <Form.Group controlId="formEmployeeStatus">
                <Form.Label>Employee Status</Form.Label>
                <Form.Select
                    name="employee_status"
                    value={newEmployee.employee_status}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Status</option>
                    <option value={1}>Active</option>
                    <option value={0}>Inactive</option>
                </Form.Select>
            </Form.Group>
        </div>
    </div>
    <div className="row">
        <div className="col-sm-4">
        <Form.Group controlId="formCountry">
            <Form.Label>Country</Form.Label>
            <Form.Select
                name="country"
                value={newEmployee.country}
                onChange={handleChange}
                className="scrollable-dropdown"
                required
            >
                <option value="">Select Country</option>
                <option value="" className="custom-select">Global Countries</option>
                        <option value="China">China</option>
                        <option value="Japan">Japan</option>
                        <option value="South Korea">South Korea</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Italy">Italy</option>
                        <option value="Spain">Spain</option>
                        <option value="Australia">Australia</option>
                        <option value="" className="custom-select">Local Countries</option>
                        <option value="INDIA">INDIA</option>
            </Form.Select>
        </Form.Group>
        </div>
        <div className="col-sm-4">
        <Form.Group controlId="formRegion">
            <Form.Label>Region</Form.Label>
            <Form.Select
                name="region"
                value={newEmployee.region}
                onChange={handleChange}
                className="scrollable-dropdown"
                required
            >
                <option value="">Select Region</option>
                        <option value="" className="custom-select">Global Region</option>
                        <option value="Abia">Abia</option>
                        <option value="Alberta">Alberta</option>
                        <option value="Andalusia">Andalusia</option>
                        <option value="Centro-Oeste">Centro-Oeste</option>
                        <option value="Chubut">Chubut</option>
                        <option value="Gauteng">Gauteng</option>
                        <option value="Giza">Giza</option>
                        <option value="Gyeonggi">Gyeonggi</option>
                        <option value="Hainan">Hainan</option>
                        <option value="Hidalgo">Hidalgo</option>
                        <option value="Ile-de-France">Ile-de-France</option>
                        <option value="Jalisco">Jalisco</option>
                        <option value="Kedah">Kedah</option>
                        <option value="Kyoto">Kyoto</option>
                        <option value="London">London</option>
                        <option value="Lowo">Lowo</option>
                        <option value="Minas Gerais">Minas Gerais</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Murcia">Murcia</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="Normandy">Normandy</option>
                        <option value="Northern Territory">Northern Territory</option>
                        <option value="Nouvelle-Aquitaine">Nouvelle-Aquitaine</option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="Nunavut">Nunavut</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Papua">Papua</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Rhine-Westphalia">Rhine-Westphalia</option>
                        <option value="Veneto">Veneto</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Volga">Volga</option>
                        <option value="Volgograd">Volgograd</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Yamanshi">Yamanshi</option>
                        <option value="Ytuscany">Ytuscany</option>
                        <option value="" className="custom-select">Local Region</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharastra">Maharastra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
            </Form.Select>
        </Form.Group>
        </div>
        <div className="col-sm-4">
        <Form.Group controlId="formDivision">
            <Form.Label>Division</Form.Label>
            <Form.Select
                name="division"
                value={newEmployee.division}
                onChange={handleChange}
                className="scrollable-dropdown"
                required
            >
                <option value="">Select Division</option>
                        <option value="" className="custom-select">Global Division</option>
                        <option value="Asia">Asia</option>
                        <option value="Bali">Bali</option>
                        <option value="Central">Central</option>
                        <option value="East">East</option>
                        <option value="North America">North America</option>
                        <option value="South America">South America</option>
                        <option value="Africa">Africa</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                        <option value="" className="custom-select">Local Division</option>
                        <option value="North">North</option>
                        <option value="South">South</option>
                        <option value="East">East</option>
                        <option value="West">West</option>
            </Form.Select>
        </Form.Group>
        </div>
    </div>
    <div className="row">
        <div className="col-sm-4">
        <Form.Group controlId="formEntity_Name">
            <Form.Label>Entity_Name</Form.Label>
            <Form.Select
                name="entity_name"
                value={newEmployee.entity_name}
                onChange={handleChange}
                required
            >
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
        </Form.Group>
        </div>
        <div className="col-sm-4">
            <Form.Group controlId="formEntity_Id">
                <Form.Label>Entity_ID</Form.Label>
                <Form.Control
                    type="text"
                    name="entity_id"
                    value={newEmployee.entity_id}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
        </div>
        <div className="col-sm-4">
        <Form.Group controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Select
                name="category"
                value={newEmployee.category}
                onChange={handleChange}
                required
            >
                <option value="">Select Category</option>
                <option value="Global">Global</option>
                <option value="Local">Local</option>
            </Form.Select>
        </Form.Group>
        </div>
    </div>
    <div className="row">
        <div className="col-sm-4">
        <Form.Group controlId="formFiscal_Year_Start">
            <Form.Label>Fiscal_Year_Start</Form.Label>
            <Form.Select
                name="fiscal_year_start"
                value={newEmployee.fiscal_year_start}
                onChange={handleChange}
                required
            >
                <option value="">Select Fiscal Year Start</option>
                <option value="2024-04-01">2024-04-01</option>
                <option value="2025-04-01">2025-04-01</option>
            </Form.Select>
        </Form.Group>
        </div>
        <div className="col-sm-4">
        <Form.Group controlId="formFiscal_Year_End">
            <Form.Label>Fiscal_Year_End</Form.Label>
            <Form.Select
                name="fiscal_year_end"
                value={newEmployee.fiscal_year_end}
                onChange={handleChange}
                required
            >
                <option value="">Select Fiscal Year End</option>
                <option value="2025-04-01">2025-04-01</option>
                <option value="2026-04-01">2026-04-01</option>
            </Form.Select>
        </Form.Group>
        </div>
        <div className="col-sm-4">
            <Form.Group controlId="formEmployee_Position">
                <Form.Label>Employee_Position</Form.Label>
                <Form.Control
                    type="text"
                    name="employee_position"
                    value={newEmployee.employee_position}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
        </div>
    </div>
    <div className="d-flex justify-content-end">
                            <Button variant="secondary" style={{marginRight:"20px", marginTop:"10px"}} onClick={onClose}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary" className="ml-2" style={{marginTop:"10px"}}>
                                Save
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            </div>
        </>
    );
};

export default AddEmployeeForm;