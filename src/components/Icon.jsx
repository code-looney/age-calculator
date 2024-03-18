import React from 'react';

const Icon = (props) => {
    const { className, iconURL } = props;

  return (
    <img className={className} src={iconURL} alt="" />
  )
}

export default Icon