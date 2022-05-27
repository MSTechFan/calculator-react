import React from 'react'

const Screen = (props) => {
  return (
    <div style={{flex: 1, textAlign: "end", padding: "5px", fontSize: "2.5rem"}}>
      <input type={'number'} style={{all: 'none', backgroundColor: '#2E0249', color: 'white'}}></input>
      {/* crear un estado para saber si se está escribiendo o no, para poder dejar la calculadora en 0 */}
    </div>
  )
}

export default Screen