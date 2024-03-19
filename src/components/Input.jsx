import React from 'react';

const Input = (props) => {
    const { className, placeholder, value, type, maxLength } = props;

  return (
    <input type={type} maxLength={maxLength} className={className} value={value} placeholder={placeholder}
    onChange={props.onCalcChange} />
  )
}

export default Input