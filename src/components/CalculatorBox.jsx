import {React, useReducer} from 'react'
import Screen from './Screen'
import Keyboard from './Keyboard'
import { reducer } from './reducerFunction'

const CalculatorBox = () => {

  
  const [{currentInput, previousInput, operation, overwrite = false}, dispatch] = useReducer(reducer, {})

  return (
    <div style={{
        display: "flex",
        width: "400px",
        height: "480px",
        flexDirection: "column",
        backgroundColor: "#2E0249",
        color: "white",
        fontFamily: "VT323",
        border: "4px solid #570A57",
        fontSize: "2rem"
    }}>
        <Screen currentInput={currentInput} previousInput={previousInput} operation={operation}/>
        <Keyboard dispatch={dispatch}/>
    </div>
  )
}

export default CalculatorBox