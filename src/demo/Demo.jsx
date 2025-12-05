import React, { useState } from 'react'

const Demo = () => {
    // let player = "virat"
    const [state,setState] = useState("Virat")
    function change(){
        setState("Abhishek")
    }
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={change}>Change name</button>
    </div>
  )
}

export default Demo