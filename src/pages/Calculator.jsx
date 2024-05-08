import React from 'react'
import './Calculator.scss'

const Calculator = () => {
  return (
      <div className='container'>
        <div className='panel'>
          <p className='result'>0</p>
        </div>

        <table>
          <tr>
            <td>
              <button id='ac' className='btn especial'>
                AC
              </button>
            </td>
            <td>
              <button id='sign' className='btn especial'>
                +/-
              </button>
            </td>
            <td>
              <button id='percentage' className='btn especial'>
                %
              </button>
            </td>
            <td>
              <button id='division' className='btn operator'>
                /
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <button id='seven' className='btn number'>
                7
              </button>
            </td>
            <td>
              <button id='eight' className='btn number'>
                8
              </button>
            </td>
            <td>
              <button id='nine' className='btn number'>
                9
              </button>
            </td>
            <td>
              <button id='multiplication' className='btn operator'>
                x
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <button id='four' className='btn number'>
                4
              </button>
            </td>
            <td>
              <button id='five' className='btn number'>
                5
              </button>
            </td>
            <td>
              <button id='six' className='btn number'>
                6
              </button>
            </td>
            <td>
              <button id='subtraction' className='btn operator'>
                -
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <button id='one' className='btn number'>
                1
              </button>
            </td>
            <td>
              <button id='two' className='btn number'>
                2
              </button>
            </td>
            <td>
              <button id='three' className='btn number'>
                3
              </button>
            </td>
            <td>
              <button id='addition' className='btn operator'>
                +
              </button>
            </td>
          </tr>

          <tr>
            <td colSpan='2'>
              <button id='zero' className='btn number'>
                <p id='zero'>0</p>
              </button>
            </td>
            <td>
              <button id='point' className='btn decimal'>
                .
              </button>
            </td>
            <td>
              <button id='equal' className='btn operator'>
                =
              </button>
            </td>
          </tr>
        </table>
      </div>
    
  )
}

export default Calculator
