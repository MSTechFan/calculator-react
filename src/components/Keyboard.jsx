import {React, useState} from 'react'
import { ButtonEje, ButtonLarge, ButtonBig } from './Buttons'

const Keyboard = (props) => {

  const [firstValue, setFirstValue] = useState([])
  const [secondValue, setSecondValue] = useState(0)
  const [result, setResult] = useState(0)
  //write logic to handle every operation of the calculator

  const resetValues = () => {
    setFirstValue([])
    props.setScreenResult("")
    setSecondValue(null)
  }

  const handleOperation = (operation) => {
    switch(operation){
      case "suma":
          setFirstValue([props.screenResult, operation]) // se tiene que sobreescribir los resultados
          props.setScreenResult("")
          console.log(firstValue)
      case "resta":
        //do substraction
      case "multiplicacion":
        // do times
      case "division":
        //do divide
      default:
        //send to hell
    }
  }

  // descrubimos que el segunda valor alojado en secondValue no toma la primera inicialización que se hace

  const handleResult = (arrayOperation) => {
    switch(arrayOperation[1]) {
      case "suma":
        setSecondValue(props.screenResult)
        setResult((+arrayOperation[0]) + (+secondValue))
    }
  }
  return (
    <div style={{display: 'flex', flexDirection: 'row' ,  flex: 6, flexWrap: 'wrap', gap: '0px', justifyContent: 'flex-start', alignContent: 'end'} }>
        
        {/* first line */}  
        <ButtonLarge onClick={() => props.setScreenResult("")}>AC</ButtonLarge>
        <ButtonEje onClick={() => handleOperation("suma")}>+</ButtonEje>
        <ButtonEje onClick={() => props.setScreenResult("")}>-</ButtonEje>
        {/* second line */}
        <ButtonEje onClick={() => props.setScreenResult(props.screenResult + "1")}>1</ButtonEje>
        <ButtonEje onClick={() => props.setScreenResult(props.screenResult + "2")}>2</ButtonEje>
        <ButtonEje onClick={() => props.setScreenResult(props.screenResult + "3")}>3</ButtonEje>
        <ButtonEje onClick={() => props.setScreenResult("")}>x</ButtonEje>
        {/* third line */}
        <ButtonEje onClick={() => props.setScreenResult(props.screenResult + "4")}>4</ButtonEje>
        <ButtonEje onClick={() => props.setScreenResult(props.screenResult + "5")}>5</ButtonEje>
        <ButtonEje onClick={() => props.setScreenResult(props.screenResult + "6")}>6</ButtonEje>
        <ButtonEje onClick={() => props.setScreenResult("")}>/</ButtonEje>
        {/* fourth line */}
        <ButtonEje onClick={() => props.setScreenResult(props.screenResult + "7")}>7</ButtonEje>
        <ButtonEje onClick={() => props.setScreenResult(props.screenResult + "8")}>8</ButtonEje>
        <ButtonEje onClick={() => props.setScreenResult(props.screenResult + "9")}>9</ButtonEje>
        
        
        {/* fifth line */}
       <ButtonLarge onClick={() => props.setScreenResult(props.screenResult + "0")}>0</ButtonLarge>
       <ButtonEje onClick={() => props.setScreenResult(props.screenResult + ".")}>.</ButtonEje>

       <ButtonBig onClick={() => handleResult(firstValue)}>=</ButtonBig>
       
        
    </div>
  )
}

export default Keyboard