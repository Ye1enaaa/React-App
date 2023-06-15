import React, {useEffect, useState} from "react";
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [department, setDepartment] = useState('');
    const [yearSection, setYearSection] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [picture, setPicture] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const endpoint = 'http://127.0.0.1:8000/api/register'
        const formData = new FormData();
        formData.append('name', name);
        formData.append('studentId', studentId);
        formData.append('department', department);
        formData.append('year_section', yearSection);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('picture', picture);
  
        const response = await axios.post(endpoint, formData);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="studentId">Student ID:</label>
            <input
              type="number"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="yearSection">Year Section:</label>
            <input
              type="text"
              id="yearSection"
              value={yearSection}
              onChange={(e) => setYearSection(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="picture">Picture:</label>
            <input
              type="file"
              id="picture"
              onChange={(e) => setPicture(e.target.files[0])}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  };

export default Register