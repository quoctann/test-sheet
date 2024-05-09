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
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { BUTTON_NAME } from '../constant/buttonName'
const Calculator = () => {
  const [history, setHistory] = useState([])
  const [result, setResult] = useState(0)

  const handleChangeInput = (event) => {
    alert('test')
    console.log(event.target.value)
    setResult(event.target.value)
  }

  const handleOnClickInput = (event) => {
    console.log(event.target.value)
  }

  return (
    <div style={sCenterVertically}>
      <main style={sMain}>
        <CustomInput initialValue={result} handler={handleChangeInput} s />

        <div className='myRow' style={sMyRow}>
          <CustomButton
            displayText={BUTTON_NAME.CLEAR}
            customStyle={{ ...sButton, ...sDarkGray }}
            customClass={'btn'}
            handler={handleOnClickInput}
          />

          <CustomButton
            displayText={BUTTON_NAME.TOGGLE_MINUS}
            customStyle={{ ...sButton, ...sDarkGray }}
            customClass={'btn'}
            handler={handleOnClickInput}
          />

          <CustomButton
            displayText={BUTTON_NAME.MOD}
            customStyle={{ ...sButton, ...sDarkGray }}
            customClass={'btn'}
            handler={handleOnClickInput}
          />
          <CustomButton
            displayText={BUTTON_NAME.DIV}
            customStyle={{ ...sButton, ...sSecondary }}
            customClass={'btn secondary'}
            handler={handleOnClickInput}
          />
        </div>
        <div className='myRow' style={sMyRow}>
          <CustomButton
            displayText={BUTTON_NAME.SEVEN}
            customStyle={sButton}
            customClass={'btn'}
            handler={handleOnClickInput}
          />
          <CustomButton
            displayText={BUTTON_NAME.EIGHT}
            customStyle={sButton}
            customClass={'btn'}
            handler={handleOnClickInput}
          />
          <CustomButton
            displayText={BUTTON_NAME.NINE}
            customStyle={sButton}
            customClass={'btn'}
            handler={handleOnClickInput}
          />
          <CustomButton
            displayText={BUTTON_NAME.MULTIPLY}
            customStyle={{ ...sButton, ...sSecondary }}
            customClass={'btn secondary'}
            handler={handleOnClickInput}
          />
        </div>
        <div className='myRow' style={sMyRow}>
          <CustomButton
            displayText={BUTTON_NAME.FOUR}
            customStyle={sButton}
            customClass={'btn'}
            handler={handleOnClickInput}
          />
          <CustomButton
            displayText={BUTTON_NAME.FIVE}
            customStyle={sButton}
            customClass={'btn'}
            handler={handleOnClickInput}
          />
          <CustomButton
            displayText={BUTTON_NAME.SIX}
            customStyle={sButton}
            customClass={'btn'}
            handler={handleOnClickInput}
          />
          <CustomButton
            displayText={BUTTON_NAME.MINUS}
            customStyle={{ ...sButton, ...sSecondary }}
            customClass={'btn secondary'}
            handler={handleOnClickInput}
          />
        </div>
        <div className='myRow' style={sMyRow}>
          <CustomButton
            displayText={BUTTON_NAME.ONE}
            customStyle={sButton}
            customClass={'btn'}
            handler={handleOnClickInput}
          />
          <CustomButton
            displayText={BUTTON_NAME.TWO}
            customStyle={sButton}
            customClass={'btn'}
            handler={handleOnClickInput}
          />
          <CustomButton
            displayText={BUTTON_NAME.THREE}
            customStyle={sButton}
            customClass={'btn'}
            handler={handleOnClickInput}
          />
          <CustomButton
            displayText={BUTTON_NAME.PLUS}
            customStyle={{ ...sButton, ...sSecondary }}
            customClass={'btn secondary'}
            handler={handleOnClickInput}
          />
        </div>
        <div className='myRow' style={sMyRow}>
          <CustomButton
            displayText={BUTTON_NAME.ZERO}
            customStyle={{ ...sButton, ...sBtn0 }}
            customClass={'btn btn0'}
            handler={handleOnClickInput}
          />
          <CustomButton
            displayText={BUTTON_NAME.DOT}
            customStyle={{ ...sButton, ...sBtn1 }}
            customClass={'btn btn0'}
            handler={handleOnClickInput}
          />
          <CustomButton
            displayText={BUTTON_NAME.EQUAL}
            customStyle={{ ...sButton, ...sBtn1, ...sSecondary }}
            customClass={'btn btn1 secondary'}
            handler={handleOnClickInput}
          />
        </div>
      </main>
    </div>
  )
}

export default Calculator
