<<<<<<< HEAD
import {React, useState} from 'react'
import Screen from './Screen'
import Keyboard from './Keyboard'


const CalculatorBox = () => {
  const [screenResult, setScreenResult] = useState(0)  
=======
import {React, useReducer} from 'react'
import Screen from './Screen'
import Keyboard from './Keyboard'
import { reducer } from './reducerFunction'

const CalculatorBox = () => {

  
  const [{currentInput, previousInput, operation, overwrite = false}, dispatch] = useReducer(reducer, {})

>>>>>>> a9857ff9a99f2ff06366c52ef65a3d05f31577be
  return (
    <div style={{
        display: "flex",
        width: "400px",
<<<<<<< HEAD
        height: "450px",
=======
        height: "480px",
>>>>>>> a9857ff9a99f2ff06366c52ef65a3d05f31577be
        flexDirection: "column",
        backgroundColor: "#2E0249",
        color: "white",
        fontFamily: "VT323",
        border: "4px solid #570A57",
        fontSize: "2rem"
    }}>
<<<<<<< HEAD
        <Screen setScreenResult={setScreenResult} screenResult={screenResult}/>
        <Keyboard setScreenResult={setScreenResult}/>
=======
        <Screen currentInput={currentInput} previousInput={previousInput} operation={operation}/>
        <Keyboard dispatch={dispatch}/>
>>>>>>> a9857ff9a99f2ff06366c52ef65a3d05f31577be
    </div>
  )
}

export default CalculatorBox