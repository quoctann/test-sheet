import React from 'react'


const Button = ({ displayText, customStyle, customClass, handler }) => {
  return (
    <button
      className={customClass}
      style={customStyle}
      onClick={(event) => handler(event)}
    >
      {displayText}
    </button>
  )
}

export default Button
