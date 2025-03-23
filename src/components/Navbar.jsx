import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="brand">PopX</div>
        <div className="nav-links">
          <NavLink to="/" active={location.pathname === '/'}>
            Home
          </NavLink>
          <NavLink to="/login" active={location.pathname === '/login'}>
            Login
          </NavLink>
          <NavLink to="/register" active={location.pathname === '/register'}>
            Register
          </NavLink>
          <NavLink to="/account" active={location.pathname === '/account'}>
            Account
          </NavLink>
        </div>
      </div>
    </div>
  );
}

function NavLink({ to, active, children }) {
  return (
    <Link 
      to={to}
      className={`nav-link ${active ? 'active' : 'inactive'}`}
    >
      {children}
    </Link>
  );
}

export default Navbar; 