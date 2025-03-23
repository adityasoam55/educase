import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/AppLayout';

function Welcome() {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="welcome-container">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <button 
          onClick={() => navigate('/register')}
          className="button-primary"
        >
          Create Account
        </button>
        
        <button 
          onClick={() => navigate('/login')}
          className="button-secondary"
        >
          Already Registered? Login
        </button>
      </div>
    </AppLayout>
  );
}

export default Welcome; 