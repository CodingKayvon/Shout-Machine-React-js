import React, { useState } from 'react'
import './ShoutInput.css'

const ShoutInput = () => {
  const [swap, setSwapped] = useState(""); //Initial State empty string

  const handleShout = (e) => { //Take an Event 
    let shout = ""; //Assign Empty String
    shout += e.target.value.toUpperCase(); //toUppercase on current Event and add each char to the empty string
    setSwapped(swap => shout); //change initial state value to shout value
  }

  return (
    <div className='Input-w'>
      <input type="text" 
      placeholder='Enter Some Text...'
      onChange={(e)=> handleShout(e)}
      />

      <p>
        {swap}
      </p>
    </div>
  )
}

export default ShoutInput