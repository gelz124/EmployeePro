// src/Employee.js
import React from 'react';
import './App.css';

const Employee = ({ index, employee }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{employee.name}</td>
            <td>{employee.position}</td>
            <td>{employee.status === 'Active' ? employee.salary : 'N/A'}</td>
            <td>{employee.status}</td>
        </tr>
    );
}

export default Employee;