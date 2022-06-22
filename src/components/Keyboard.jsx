import {React} from 'react'
import { ButtonEje, ButtonLarge, ButtonBig } from './Buttons'
<<<<<<< HEAD
=======
import { ACTIONS } from './reducerFunction'
>>>>>>> a9857ff9a99f2ff06366c52ef65a3d05f31577be

const Keyboard = (props) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row' ,  flex: 6, flexWrap: 'wrap', gap: '0px', justifyContent: 'flex-start', alignContent: 'end'} }>
        
        {/* first line */}  
<<<<<<< HEAD
        <ButtonLarge onClick={() => props.setScreenResult("")}>AC</ButtonLarge>
        <ButtonEje onClick={() => props.setScreenResult("+")}>+</ButtonEje>
        <ButtonEje onClick={() => props.setScreenResult("-")}>-</ButtonEje>
        {/* second line */}
        <ButtonEje onClick={() => props.setScreenResult(1)}>1</ButtonEje>
        <ButtonEje onClick={() => props.setScreenResult(2)}>2</ButtonEje>
        <ButtonEje onClick={() => props.setScreenResult(3)}>3</ButtonEje>
        <ButtonEje onClick={() => props.setScreenResult("*")}>x</ButtonEje>
        {/* third line */}
        <ButtonEje onClick={() => props.setScreenResult(4)}>4</ButtonEje>
        <ButtonEje onClick={() => props.setScreenResult(5)}>5</ButtonEje>
        <ButtonEje onClick={() => props.setScreenResult(6)}>6</ButtonEje>
        <ButtonEje onClick={() => props.setScreenResult("/")}>/</ButtonEje>
        {/* fourth line */}
        <ButtonEje onClick={() => props.setScreenResult(7)}>7</ButtonEje>
        <ButtonEje onClick={() => props.setScreenResult(7)}>8</ButtonEje>
        <ButtonEje onClick={() => props.setScreenResult(9)}>9</ButtonEje>
        
        
        {/* fifth line */}
       <ButtonLarge onClick={() => props.setScreenResult("0")}>0</ButtonLarge>
       <ButtonEje onClick={() => props.setScreenResult(".")}>.</ButtonEje>

       <ButtonBig>=</ButtonBig>
       
        
=======
        <ButtonLarge onClick={() => props.dispatch({type: ACTIONS.RESET})}>AC</ButtonLarge>
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.OPERATION, payload: {digit: "+"}})}>+</ButtonEje>
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.OPERATION, payload: {digit: "-"}})}>-</ButtonEje>
        {/* second line */}
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "1"}})}>1</ButtonEje>
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "2"}})}>2</ButtonEje>
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "3"}})}>3</ButtonEje>
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.OPERATION, payload: {digit: "x"}})}>x</ButtonEje>
        {/* third line */}
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "4"}})}>4</ButtonEje>
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "5"}})}>5</ButtonEje>
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "6"}})}>6</ButtonEje>
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.OPERATION, payload: {digit: "/"}})}>/</ButtonEje>
        {/* fourth line */}
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "7"}})}>7</ButtonEje>
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "8"}})}>8</ButtonEje>
        <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "9"}})}>9</ButtonEje>
        
        
        {/* fifth line */}
       <ButtonLarge onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "0"}})}>0</ButtonLarge>
       <ButtonEje onClick={() => props.dispatch({type: ACTIONS.ADD, payload: {digit: "."}})}>.</ButtonEje>
       <ButtonBig onClick={() => props.dispatch({type: ACTIONS.EVALUATE})}>=</ButtonBig>  
>>>>>>> a9857ff9a99f2ff06366c52ef65a3d05f31577be
    </div>
  )
}

export default Keyboard