// Input.js
'use client'
import React from "react";


const Input = (props) => {
  const { label, className, id, type, placeholder, value, onChange } = props;
  return (
    <div className="input-container">
      {label && (
        <label className="font-bold mb-3.5 lg:block hidden">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        className={className}
        {...props}
      />
    </div>
  );
};

export default Input;
