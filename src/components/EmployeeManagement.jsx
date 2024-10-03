import React, { useState } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import FilterDropdowns from './FilterDropdowns';
import AddEmployeeForm from './AddEmployeeForm';
import EditEmployeeModal from './EditEmployeeModal';
import DownloadModal from './DownloadModal';
import './Dashboard.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmployeeManagement = () => {
    const [employees, setEmployees] = useState([]);
    const [filters, setFilters] = useState({
        entity_name: '',
        category: '',
        country: '',
        fiscal_year_start: '',
        fiscal_year_end: '',
        division: '',
        region: '',
        department_name: ''
    });
    const [loading, setLoading] = useState(false);
    const [fetchAttempted, setFetchAttempted] = useState(false);
    const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [showDownloadModal, setShowDownloadModal] = useState(false);
    const navigate = useNavigate();
    const [isApplied, setIsApplied] = useState(false);


    const goToHome = () => {
        navigate('/home'); // Redirect to '/dashboard' route
      };

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
        console.log('Updated filters:', filters); // Log the filters to verify they are being set correctly
    };

    const handleAddEmployee = async (newEmployee) => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8080/api/employee/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...newEmployee, employee_status: Number(newEmployee.employee_status) }),
            });
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const data = await response.json();
            console.log('Added employee:', data);
            setEmployees([...employees, data]);
            toast.success('Employee added successfully!');
        } catch (error) {
            console.error('Error adding employee:', error);
            toast.error(`Error adding employee`);
        } finally {
            setLoading(false);
        }
    };


    const handleDeleteEmployee = async (id) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/api/employee/${id}`, {
                method: 'DELETE',
            });
    
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            setEmployees(employees.filter(emp => emp.id !== id));
            toast.success('Employee deleted successfully');
        } catch (error) {
            console.error('Error deleting employee:', error);
            toast.error('Error deleting employee');
        } finally {
            setLoading(false);
        }
    };
    const handleEditEmployee = (employee) => {
        setSelectedEmployee(employee);
        setShowEditModal(true);
    };

    const handleUpdateEmployee = async (updatedEmployee) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/api/employee/update/${updatedEmployee.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...updatedEmployee, employee_status: Number(updatedEmployee.employee_status) }),
            });
            if (!response.ok) {
                const errorDetails = await response.text();
                throw new Error(`Network response was not ok: ${errorDetails}`);
            }
            const data = await response.json();
            setEmployees(employees.map(emp => (emp.id === data.id ? data : emp)));
            setShowEditModal(false);
            setSelectedEmployee(null);
            toast.success('Employee updated successfully');
        } catch (error) {
            console.error('Error updating employee:', error);
            toast.error('Error updating employee');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page
        setLoading(true);
        setFetchAttempted(true);
        setIsApplied(true);
    
        const {
            entity_name,
            category,
            country,
            fiscal_year_start,
            fiscal_year_end,
            division,
            region,
            department_name
        } = filters;
    
        // Log the filters to verify they are being set correctly
        console.log('Current filters:', filters);
    
        // Check if all required parameters are present
        if (!entity_name || !category || !country || !fiscal_year_start || !fiscal_year_end || !division || !region || !department_name) {
            console.error('All parameters are required');
            setLoading(false);
            return;
        }
    
        // Encode the parameters
        const encodedEntityName = encodeURIComponent(entity_name);
        const encodedCategory = encodeURIComponent(category);
        const encodedCountry = encodeURIComponent(country);
        const encodedFiscalYearStart = encodeURIComponent(fiscal_year_start);
        const encodedFiscalYearEnd = encodeURIComponent(fiscal_year_end);
        const encodedDivision = encodeURIComponent(division);
        const encodedRegion = encodeURIComponent(region);
        const encodedDepartmentName = encodeURIComponent(department_name);
    
        const url = `http://localhost:8080/api/employee/${encodedEntityName}/${encodedCategory}/${encodedCountry}/${encodedFiscalYearStart}/${encodedFiscalYearEnd}/${encodedDivision}/${encodedRegion}/${encodedDepartmentName}`;

        // Log the constructed URL
        console.log('Fetching data from:', url);
    
        try {
            const response = await fetch(url);
            if (!response.ok) {
                const errorDetails = await response.text();
                throw new Error(`Network response was not ok: ${errorDetails}`);
            }
            const data = await response.json();
            console.log('Received data:', data);  // Log the data
            setEmployees(data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };
    
    const toggleAddEmployeeForm = () => {
        setShowAddEmployeeForm(!showAddEmployeeForm);
    };
    const handleDownloadClick = async () => {
        const validFormats = ['pdf', 'doc', 'xlsx', 'ppt', 'powerbi'];
        const userInput = window.prompt('Enter the format for download (pdf, doc, xlsx, ppt, powerbi):');

        if (userInput) {
            const format = userInput.toLowerCase();

            if (validFormats.includes(format)) {
                if (format === 'powerbi') {
                    const url = `https://app.powerbi.com/reportEmbed?reportId=4f8840e1-119b-4067-8e90-f9002ecf6378&autoAuth=true&ctid=fc7a805c-6a95-4cae-aa3e-0cbd15221d91`;
                    window.open(url, '_blank');
                } else {
                    try {
                        const response = await axios.get(`http://localhost:8080/api/employee/downloadFiltered`, {
                            params: { format, ...filters },
                            responseType: 'blob'
                        });

                        if (response.status === 200) {
                            const url = window.URL.createObjectURL(new Blob([response.data]));
                            const link = document.createElement('a');
                            link.href = url;
                            link.setAttribute('download', `employees_table.${format}`);
                            document.body.appendChild(link);
                            link.click();
                            link.parentNode.removeChild(link);
                        } else {
                            throw new Error('Failed to download the file');
                        }
                    } catch (error) {
                        toast.error('Error downloading the file. Please try again.');
                    }
                }
            } else {
                toast.error('Invalid format. Please enter one of the following formats: pdf, doc, xlsx, ppt, powerbi');
            }
        } else {
            toast.error('No format entered. Please enter one of the following formats: pdf, doc, xlsx, ppt, powerbi');
        }
    };
    return (
        <Container className='dashbody'>
            <h4 className="mt-5 mb-3 d-flex justify-content-between align-items-center">
                Inactive Employee
                <Button variant="success" onClick={toggleAddEmployeeForm} style={{ backgroundColor: 'blue' }}>Add Employee</Button>
            </h4>
            {showAddEmployeeForm && <AddEmployeeForm show={showAddEmployeeForm} onClose={toggleAddEmployeeForm} onSave={handleAddEmployee} />}
            
            <form className='dashform' onSubmit={handleSubmit}>
                <FilterDropdowns onChange={handleChange} autocomplete="on" />
                <Button className='dash' variant="primary" type="submit">Apply</Button>
            </form>

            {isApplied && (
                <>
                    <div className="table-container" style={{ overflowX: 'auto', overflowY: 'auto', maxHeight: '400px' }}>
                        {loading ? (
                            <p>Loading...</p>
                        ) : fetchAttempted && employees.length === 0 ? (
                            <p>No employees found</p>
                        ) : (
                            <Table striped bordered hover className="mt-3">
                            <thead>
                                <tr>
                                    <th>Sl_No</th>
                                    <th>Department_Name</th>
                                    <th>Department_ID</th>
                                    <th>Team_Name</th>
                                    <th>Team_ID</th>
                                    <th>Project_Name</th>
                                    <th>Project_ID</th>
                                    <th>Employee_Name</th>
                                    <th>Employee_ID</th>
                                    <th>Employee_Status</th>
                                    <th>Country</th>
                                    <th>Region</th>
                                    <th>Division</th>
                                    <th>Entity_Name</th>
                                    <th>Entity_ID</th>
                                    <th>Category</th>
                                    <th>Fiscal_Year_Start</th>
                                    <th>Fiscal_Year_End</th>
                                    <th>Employee_Position</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee, index) => (
                                    <tr key={employee.id}>
                                        <td>{index + 1}</td>
                                        <td>{employee.department_name}</td>
                                        <td>{employee.department_id}</td>
                                        <td>{employee.team_name}</td>
                                        <td>{employee.team_id}</td>
                                        <td>{employee.project_name}</td>
                                        <td>{employee.project_id}</td>
                                        <td>{employee.employee_name}</td>
                                        <td>{employee.employee_id}</td>
                                        <td>{employee.employee_status === 1 ? 'Active' : 'InActive'}</td> 
                                        <td>{employee.country}</td>
                                        <td>{employee.region}</td>
                                        <td>{employee.division}</td>
                                        <td>{employee.entity_name}</td>
                                        <td>{employee.entity_id}</td>
                                        <td>{employee.category}</td>
                                        <td>{employee.fiscal_year_start}</td>
                                        <td>{employee.fiscal_year_end}</td>
                                        <td>{employee.employee_position}</td>
                                        <td>
                                            <div className="action-buttons">
                                                <Button variant="success" onClick={() => handleEditEmployee(employee)}>Edit</Button>
                                                <Button variant="danger" onClick={() => handleDeleteEmployee(employee.id)}>Delete</Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>                        
                        )}
                    </div>

                    <div className="d-flex justify-content-start mt-3">
                        <Button className='back' variant="secondary" onClick={goToHome}>Back</Button>
                        <Button className='back' variant="secondary" onClick={handleDownloadClick} style={{ backgroundColor: "green" }}>Download</Button>
                    </div>
                </>
            )}

             <EditEmployeeModal
            show={showEditModal}
            onHide={() => setShowEditModal(false)}
            employee={selectedEmployee}
            onUpdate={handleUpdateEmployee}
        />

        <DownloadModal 
            show={showDownloadModal} 
            onHide={() => setShowDownloadModal(false)} 
            onDownload={handleDownloadClick} 
        />
            
            <ToastContainer />
        </Container>
    );
};

export default EmployeeManagement;