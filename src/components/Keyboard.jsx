import {React} from 'react'
import { ButtonEje, ButtonLarge, ButtonBig } from './Buttons'

const Keyboard = (props) => {


  //write logic to handle every operation of the calculator
  const handleOperation = (firstValue, secondValue, operation) => {
    switch(operation){
      case "suma":
        //do adding
      case "resta":
        //do substraction
      case "multiplicacion":
        // do times
      case "division":
        //do divide
      default:
        //sent to hell
    }
  }
  return (
    <div style={{display: 'flex', flexDirection: 'row' ,  flex: 6, flexWrap: 'wrap', gap: '0px', justifyContent: 'flex-start', alignContent: 'end'} }>
        
        {/* first line */}  
        <ButtonLarge onClick={() => props.setScreenResult("")}>AC</ButtonLarge>
        <ButtonEje onClick={() => props.setScreenResult("")}>+</ButtonEje>
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

       <ButtonBig>=</ButtonBig>
       
        
    </div>
  )
}

export default Keyboard