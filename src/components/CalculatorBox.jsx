import {React, useState} from 'react'
import Screen from './Screen'
import Keyboard from './Keyboard'


const CalculatorBox = () => {
  const [result, setResult] = useState(0)  
  return (
    <div style={{
        display: "flex",
        width: "400px",
        height: "450px",
        flexDirection: "column",
        backgroundColor: "black",
        color: "white",
        fontFamily: "VT323",
        border: "4px solid red",
        fontSize: "2rem"
    }}>
        <Screen result={result}/>
        <Keyboard/>
    </div>
  )
}

export default CalculatorBox