import React from 'react';

const Input = (props) => {
    const { className, placeholder, value } = props;

  return (
    <input className={className} value={value} type="text" placeholder={placeholder} />
  )
}

export default Input