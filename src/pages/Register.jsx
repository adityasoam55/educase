import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import RadioButton from '../components/RadioButton';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'radio' ? name === 'isAgency' ? value === 'yes' : value === 'no' : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <AppLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Create your<br />PopX account
        </h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label className="block text-purple-600 text-sm mb-1 absolute -top-2.5 left-3  bg-white px-2">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div className="mb-4 relative">
            <label className="block text-purple-600 text-sm mb-1 absolute -top-2.5 left-3  bg-white px-2">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div className="mb-4 relative">
            <label className="block text-purple-600 text-sm mb-1 absolute -top-2.5 left-3  bg-white px-2">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div className="mb-4 relative">
            <label className="block text-purple-600 text-sm mb-1 absolute -top-2.5 left-3  bg-white px-2">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div className="mb-6 relative">
            <label className="block text-purple-600 text-sm mb-1 absolute -top-2.5 left-3  bg-white px-2">
              Company name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter company name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div className="mb-8">
            <p className="text-purple-600 text-sm mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex items-center space-x-4">
              <RadioButton
                name="isAgency"
                value="yes"
                checked={formData.isAgency}
                onChange={handleChange}
                label="Yes"
                required
              />
              
              <RadioButton
                name="isAgency"
                value="no"
                checked={!formData.isAgency}
                onChange={handleChange}
                label="No"
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-medium rounded-md transition-all hover:bg-purple-700 active:bg-purple-800 shadow-md hover:shadow-lg"
          >
            Create Account
          </button>
        </form>
      </div>
    </AppLayout>
  );
}

export default Register; 