import React from 'react';

const ButtonAtom = ({ onClick, children, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonAtom;