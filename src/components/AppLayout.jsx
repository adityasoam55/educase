import React from 'react';
import Navbar from './Navbar';

function AppLayout({ children }) {
  return (
    <div className="container">
      <Navbar />
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}

export default AppLayout; 