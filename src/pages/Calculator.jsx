import React, { useState } from 'react'
import '../styles/Calculator.css'
import {
  sBtn0,
  sBtn1,
  sButton,
  sCenterVertically,
  sDarkGray,
  sInput,
  sMain,
  sMyRow,
  sSecondary,
} from '../styles/CalculatorInlineStyle'

const Calculator = () => {
  const [history, setHistory] = useState([])
  const [result, setResult] = useState(0)

  return (
    <div style={sCenterVertically}>
      <main style={sMain}>
        <input
          type='text'
          style={sInput}
          className='output'
          id='test'
          value={result}
          onChange={(event) => console.log(event.target.value)}
        />

        <div className='myRow' style={sMyRow}>
          <button
            className='btn'
            style={{ ...sButton, ...sDarkGray }}
            value='all-clear'
            onClick='buttonClick(this)'
          >
            AC
          </button>
          <button
            className='btn'
            style={{ ...sButton, ...sDarkGray }}
            value='opposite'
            onClick='buttonClick(this)'
          >
            +/-
          </button>
          <button
            className='btn'
            style={{ ...sButton, ...sDarkGray }}
            value='percent'
            onClick='buttonClick(this)'
          >
            %
          </button>
          <button
            className='btn secondary'
            style={{ ...sButton, ...sSecondary }}
            value='divide'
            onClick='buttonClick(this)'
          >
            /
          </button>
        </div>
        <div className='myRow' style={sMyRow}>
          <button
            className='btn'
            style={sButton}
            value='7'
            onClick='buttonClick(this)'
          >
            7
          </button>
          <button
            className='btn'
            style={sButton}
            value='8'
            onClick='buttonClick(this)'
          >
            8
          </button>
          <button
            className='btn'
            style={sButton}
            value='9'
            onClick='buttonClick(this)'
          >
            9
          </button>
          <button
            className='btn secondary'
            style={{ ...sButton, ...sSecondary }}
            value='multiply'
            onClick='buttonClick(this)'
          >
            x
          </button>
        </div>
        <div className='myRow' style={sMyRow}>
          <button
            className='btn'
            style={sButton}
            value='4'
            onClick='buttonClick(this)'
          >
            4
          </button>
          <button
            className='btn'
            style={sButton}
            value='5'
            onClick='buttonClick(this)'
          >
            5
          </button>
          <button
            className='btn'
            style={sButton}
            value='6'
            onClick='buttonClick(this)'
          >
            6
          </button>
          <button
            className='btn secondary'
            style={{ ...sButton, ...sSecondary }}
            value='subtract'
            onClick='buttonClick(this)'
          >
            -
          </button>
        </div>
        <div className='myRow' style={sMyRow}>
          <button
            className='btn'
            style={sButton}
            value='1'
            onClick='buttonClick(this)'
          >
            1
          </button>
          <button
            className='btn'
            style={sButton}
            value='2'
            onClick='buttonClick(this)'
          >
            2
          </button>
          <button
            className='btn'
            style={sButton}
            value='3'
            onClick='buttonClick(this)'
          >
            3
          </button>
          <button
            className='btn secondary'
            style={{ ...sButton, ...sSecondary }}
            value='add'
            onClick='buttonClick(this)'
          >
            +
          </button>
        </div>
        <div className='myRow' style={sMyRow}>
          <button
            className='btn btn0'
            style={{ ...sButton, ...sBtn0 }}
            value='0'
            onClick='buttonClick(this)'
          >
            0
          </button>
          <button
            className='btn btn1'
            style={{ ...sButton, ...sBtn1 }}
            value='period'
            onClick='buttonClick(this)'
          >
            .
          </button>
          <button
            className='btn btn1 secondary'
            style={{ ...sButton, ...sBtn1, ...sSecondary }}
            value='equals'
            onClick='buttonClick(this)'
          >
            =
          </button>
        </div>
      </main>
    </div>
  )
}

export default Calculator
