import React, { useContext } from 'react'
import '../../App.css'
import { Numbercontext } from '../../Context/NumberContext/Numbercontext'
const About = () => {
const {initialState, updatedState} =useContext(Numbercontext)
function increment(){
  updatedState(initialState+1)
}
function decrement(){
updatedState(initialState-1)
}
  return (
    <div className='about'>
        <h1>This is about page</h1>
        <button onClick={increment}>About Increment</button>
        <button onClick={decrement}>About Decrement</button>
    </div>
  )
}

export default About