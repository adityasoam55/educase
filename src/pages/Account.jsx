import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/AppLayout';

function Account() {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Account Settings</h1>
        
        <div className="flex items-start mb-4">
          <div className="relative mr-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-purple-600 text-white p-1 rounded-full text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </div>
          </div>
          
          <div>
            <h2 className="font-semibold text-gray-800">Marry Doe</h2>
            <p className="text-gray-600 text-sm">Marry@Gmail.Com</p>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-6">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
        
        <div className="border-t border-b border-dashed border-gray-300 py-6 mb-6">
          {/* This area would contain additional account settings */}
        </div>
      </div>
    </AppLayout>
  );
}

export default Account; 