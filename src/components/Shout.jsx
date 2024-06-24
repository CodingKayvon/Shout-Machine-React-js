import React from 'react'
import './Shout.css'
import ShoutInput from './Input/ShoutInput'

const Shout = () => {

  return (
    <div className='Shout-w'>
      <header className='Shout-h'>
        <img src="moonfix-r.png" alt="logo" />
        <h1>30 Projects in React</h1>
        <h2>Project 2: Shout Machine</h2>
      </header>

      <ShoutInput />
    </div>
  )
}



export default Shout