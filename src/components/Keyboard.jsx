import React from 'react'
import { ButtonEje, ButtonLarge, ButtonBig } from './Buttons'

const Keyboard = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row' ,  flex: 6, flexWrap: 'wrap', gap: '0px', justifyContent: 'flex-start', alignContent: 'end'} }>
        
        {/* first line */}  
        <ButtonLarge/>
        <ButtonEje/>
        <ButtonEje/>
        {/* second line */}
        <ButtonEje/>
        <ButtonEje/>
        <ButtonEje/>
        <ButtonEje/>
        {/* third line */}
        <ButtonEje/>
        <ButtonEje/>
        <ButtonEje/>
        <ButtonEje/>
        {/* fourth line */}
        <ButtonEje/>
        <ButtonEje/>
        <ButtonEje/>
        <ButtonBig/>
        
        {/* fifth line */}
       <ButtonLarge/>
       <ButtonEje/>
        
    </div>
  )
}

export default Keyboard