import React from 'react';

function RadioButton({ label, name, value, checked, onChange, required }) {
  return (
    <label className="flex items-center cursor-pointer">
      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${checked ? 'border-purple-600' : 'border-gray-300'} mr-2`}>
        {checked && (
          <div className="w-3 h-3 rounded-full bg-purple-600"></div>
        )}
      </div>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only" // Hide the actual input
        required={required}
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
}

export default RadioButton; 