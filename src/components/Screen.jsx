import {React} from 'react'
import screen from './screen.css'

const Screen = (props) => {

  return (
    <div className='screen' style={screen}>
      <div className='screenOperation'>{props.operation ? props.previousInput : props.currentInput}{props.operation}{props.operation ? props.currentInput : null}</div> 
      <div className='screenInput'>{props.currentInput ? props.currentInput : "0"}</div>
    </div>
  )
}

export default Screen