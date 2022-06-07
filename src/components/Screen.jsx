import {React, useEffect} from 'react'
import screen from './screen.css'

const Screen = (props) => {

  return (
    <div className='screen' style={screen}>
      <div className='screenOperation'>{props.screenResult === "" ? "---" : props.screenResult}</div>
      <input type={'number'} step={0.00001} className={'screenInput'} placeholder={props.screenResult === '' ? 0: null} value={props.screenResult} onChange={(event) => props.setScreenResult(event.target.value)}></input>
      {/* crear un estado para saber si se está escribiendo o no, para poder dejar la calculadora en 0 */}
    </div>
  )
}

export default Screen