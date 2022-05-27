import React from 'react'
import { ButtonEje, ButtonLarge, ButtonBig } from './Buttons'

const Keyboard = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row' ,  flex: 6, flexWrap: 'wrap', gap: '0px', justifyContent: 'flex-start', alignContent: 'end'} }>
        
        {/* first line */}  
        <ButtonLarge>AC</ButtonLarge>
        <ButtonEje>+</ButtonEje>
        <ButtonEje>-</ButtonEje>
        {/* second line */}
        <ButtonEje>1</ButtonEje>
        <ButtonEje>2</ButtonEje>
        <ButtonEje>3</ButtonEje>
        <ButtonEje>x</ButtonEje>
        {/* third line */}
        <ButtonEje>4</ButtonEje>
        <ButtonEje>5</ButtonEje>
        <ButtonEje>6</ButtonEje>
        <ButtonEje>/</ButtonEje>
        {/* fourth line */}
        <ButtonEje>7</ButtonEje>
        <ButtonEje>8</ButtonEje>
        <ButtonEje>9</ButtonEje>
        
        
        {/* fifth line */}
       <ButtonLarge>0</ButtonLarge>
       <ButtonEje>.</ButtonEje>

       <ButtonBig>=</ButtonBig>
       
        
    </div>
  )
}

export default Keyboard