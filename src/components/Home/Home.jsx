import React, { useContext, useState } from 'react'
import '../../App.css'
import { Numbercontext } from '../../Context/NumberContext/Numbercontext'
const Home = () => {
const {initialState, updatedState} = useContext(Numbercontext)

function increment(){
    updatedState(initialState+1)
}

function decrement(){
    updatedState(initialState-1)
}

  return (
    <div className='home'>
        <h1>HOME</h1>
       <h1>{initialState}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Home