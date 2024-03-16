import  { useState } from 'react';
import "./App.css"

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    dob: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateAge = (age) => {
    return /^\d+$/.test(age) && parseInt(age) > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (!validateAge(formData.age)) {
      newErrors.age = 'Please enter a valid age';
    }

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      console.log(typeof formData.dob);
      fetch('http://localhost:8080/save', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse response body as JSON
  })
  .then(data => {
    console.log('Response:', data);
    // Handle response data
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle errors
  });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div style={{ margin: 'auto', width: '50%', fontFamily: 'Arial, sans-serif', marginTop:'100px' }} className='form-box'>
      <h2>Login </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ marginRight: '0.5rem' }}>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ marginRight: '0.5rem' }}>Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </div>
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ marginRight: '0.5rem' }} className='age'>Age  :</label>
          <input type="text" name="age" value={formData.age} onChange={handleChange} />
        </div>
        {errors.age && <div style={{ color: 'red' }}>{errors.age}</div>}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ marginRight: '0.5rem' }}>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
