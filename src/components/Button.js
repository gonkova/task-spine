"use client";
import React from 'react';

const Button = ({ children, onClick, className })  => {
  return (
    <button
      className={`bg-dark-1 border-solid border-2 border-dark-1 text-dark-1 font-bold py-2 px-6 rounded hover:text-dark-2 cursor-pointer whitespace-nowrap ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;