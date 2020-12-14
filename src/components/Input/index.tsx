import React from 'react';

import './style.css';

interface PropsInput{
  id: string;
  type: string;
  label: string;
  name: string;
  value: string;
  idLabel: string;
  handleChange: any;
  children?: any;
}

export const Input = ({id, type, label, name, value, idLabel, handleChange, children}: PropsInput) => {
  return (
    <div className="input-form">
      <input 
        type={type} 
        id={id} 
        name={name} 
        value={value} 
        onChange={handleChange}
        required
      />
      <label htmlFor={id} id={idLabel}>{label}</label>
      {children}  
    </div>
  )
}
