import React from 'react';

const LabelAtom = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default LabelAtom;