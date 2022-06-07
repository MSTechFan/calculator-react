import {React, useState} from 'react'
import Screen from './Screen'
import Keyboard from './Keyboard'


const CalculatorBox = () => {
  const [screenResult, setScreenResult] = useState("")  
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
        <Screen setScreenResult={setScreenResult} screenResult={screenResult}/>
        <Keyboard setScreenResult={setScreenResult} screenResult={screenResult}/>
    </div>
  )
}

export default CalculatorBox