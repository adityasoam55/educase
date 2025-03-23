import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/AppLayout';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <AppLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Signin to your<br />PopX account
        </h1>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4 relative">
            <label htmlFor="email" className="block text-purple-600 text-sm mb-1 absolute -top-2.5 left-3  bg-white px-2" style={{ color: '#8b5cf6' }}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full p-2 border border-gray-300 rounded-md"
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
              required
            />
          </div>
          
          <div className="mb-8 relative">
            <label htmlFor="password" className="block text-purple-600 text-sm mb-1 absolute -top-2.5 left-3  bg-white px-2" style={{ color: '#8b5cf6' }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full p-2 border border-gray-300 rounded-md"
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
              required
            />
          </div>
          
          <button
            type="submit"
            className="button-primary"
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              backgroundColor: '#8b5cf6', 
              color: 'white', 
              fontWeight: '500', 
              borderRadius: '0.375rem',
              border: 'none'
            }}
          >
            Login
          </button>
        </form>
      </div>
    </AppLayout>
  );
}

export default Login; 