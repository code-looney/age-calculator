import React from 'react'

const Label = (props) => {
    const {className, children, htmlFor } = props;

  return (
    <label htmlFor={htmlFor}>{children}</label>
  )
}

export default Label