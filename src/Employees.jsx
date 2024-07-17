// src/Employees.js
import React from 'react';
import Employee from './Employee';
import './App.css';


const Employees = () => {
    const employees = [
        { name: 'Alice Guo', position: 'Manager', salary: 70000, status: 'Active' },
        { name: 'Wáng Fēng Dà', position: 'Developer', salary: 60000, status: 'Active' },
        { name: 'Lǐ Xiǎo Shī', position: 'Designer', salary: 50000, status: 'Active' },
        { name: 'Yáng Tiān Dòu', position: 'Developer', salary: 65000, status: 'Active' },
        { name: 'Zhào Huǒ L', position: 'Designer', salary: 52000, status: 'Active' },
        { name: 'Hú Jī Lǎo', position: 'Manager', salary: 80000, status: 'Active' },
        { name: 'Wǔ Chōu Shǔ', position: 'Developer', salary: 61000, status: 'Active' },
        { name: 'Xú Bèi Yān', position: 'Designer', salary: 53000, status: 'Active' },
        { name: 'Chén Xiǎo Gōu', position: 'Manager', salary: null, status: 'Not Active' },
        { name: 'Kim Jung Un', position: 'Developer', salary: null, status: 'Not Active' }
    ];

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Employee Names</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <Employee key={index} index={index} employee={employee} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Employees;
