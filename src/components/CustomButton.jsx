import React from 'react'


const CustomButton = ({ displayText, customStyle, customClass, handler }) => {
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

export default CustomButton
