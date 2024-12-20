import React from 'react';

const CheckboxAtom = ({ checked, onChange, label }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label && <span>{label}</span>}
    </label>
  );
};

export default CheckboxAtom;