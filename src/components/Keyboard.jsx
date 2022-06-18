import {React, useState} from 'react'
import { ButtonEje, ButtonLarge, ButtonBig } from './Buttons'
import { ACTIONS } from './CalculatorBox'

const Keyboard = (props) => {

  /* const [firstValue, setFirstValue] = useState([])
  const [secondValue, setSecondValue] = useState(0)
  const [result, setResult] = useState(0)
  //write logic to handle every operation of the calculator */

  /* const resetValues = () => {
    setFirstValue([])
    props.setScreenResult("")
    setSecondValue(null)
  }
 */
  /* const handleOperation = (operation) => {
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
  } */

  // descrubimos que el segunda valor alojado en secondValue no toma la primera inicialización que se hace

  /* const handleResult = (arrayOperation) => {
    switch(arrayOperation[1]) {
      case "suma":
        setSecondValue(props.screenResult)
        setResult((+arrayOperation[0]) + (+secondValue))
    }
  } */
  return (
    <div style={{display: 'flex', flexDirection: 'row' ,  flex: 6, flexWrap: 'wrap', gap: '0px', justifyContent: 'flex-start', alignContent: 'end'} }>
        
        {/* first line */}  
        <ButtonLarge onClick={() => props.dispatch({type: ACTIONS.RESET})}>AC</ButtonLarge>
        <ButtonEje onClick={""}>+</ButtonEje>
        <ButtonEje onClick={""}>-</ButtonEje>
        {/* second line */}
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "1"}})}>1</ButtonEje>
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "2"}})}>2</ButtonEje>
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "3"}})}>3</ButtonEje>
        <ButtonEje onClick={""}>x</ButtonEje>
        {/* third line */}
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "4"}})}>4</ButtonEje>
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "5"}})}>5</ButtonEje>
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "6"}})}>6</ButtonEje>
        <ButtonEje onClick={""}>/</ButtonEje>
        {/* fourth line */}
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "7"}})}>7</ButtonEje>
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "8"}})}>8</ButtonEje>
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "9"}})}>9</ButtonEje>
        
        
        {/* fifth line */}
       <ButtonLarge onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "0"}})}>0</ButtonLarge>
       <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "."}})}>.</ButtonEje>

       <ButtonBig onClick={""}>=</ButtonBig>
       
        
    </div>
  )
}

export default Keyboard