import React from 'react'
import { sInput } from '../styles/CalculatorInlineStyle'

const CustomInput = ({ initialValue, handler }) => {
  return (
    <input
      type='text'
      style={sInput}
      className='output'
      id='customInput'
      value={initialValue}
      onChange={handler}
    />
  )
}

export default CustomInput
