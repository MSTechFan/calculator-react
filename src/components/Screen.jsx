import React from 'react'

const Screen = (props) => {
  return (
    <div style={{flex: 1, textAlign: "end", padding: "5px", fontSize: "2.5rem"}}>{props.result}</div>
  )
}

export default Screen