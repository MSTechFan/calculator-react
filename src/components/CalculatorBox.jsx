import {React, useState, useReducer} from 'react'
import Screen from './Screen'
import Keyboard from './Keyboard'


export const ACTIONS  = {
  OPERATION: "operation",
  RESET: "reset",
  ADD: "add",
  EVALUATE: "evaluate"
}



const CalculatorBox = () => {
  function reducer (state, {type, payload}) {
    switch(type){
      case ACTIONS.ADD:
          return {
            ...state,
            currentInput: `${state.currentInput || "" }${payload.digit}`
          }     
      case ACTIONS.RESET:
        return {
          currentInput: null
        }  
    }

  }
  

  const [{currentInput, previousInput, operation, overwrite = true}, dispatch] = useReducer(reducer, {})

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
        <Screen currentInput={currentInput}/>
        <Keyboard dispatch={dispatch}/>
    </div>
  )
}

export default CalculatorBox