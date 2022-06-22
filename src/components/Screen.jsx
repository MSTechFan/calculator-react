<<<<<<< HEAD
import {React, useEffect} from 'react'
=======
import {React} from 'react'
>>>>>>> a9857ff9a99f2ff06366c52ef65a3d05f31577be
import screen from './screen.css'

const Screen = (props) => {

  return (
<<<<<<< HEAD
    <div style={{flex: 1, textAlign: "end", padding: "5px", fontSize: "2.5rem"}}>
      <input type={'number'} className={'screenInput'} style={screen} placeholder={props.screenResult === '' ? 0: null} value={props.screenResult} onChange={(event) => props.setScreenResult(event.target.value)}></input>
      {/* crear un estado para saber si se está escribiendo o no, para poder dejar la calculadora en 0 */}
=======
    <div className='screen' style={screen}>
      <div className='screenOperation'>{props.operation ? props.previousInput : props.currentInput}{props.operation}{props.operation ? props.currentInput : null}</div> 
      <div className='screenInput'>{props.currentInput ? props.currentInput : "0"}</div>
>>>>>>> a9857ff9a99f2ff06366c52ef65a3d05f31577be
    </div>
  )
}

export default Screen