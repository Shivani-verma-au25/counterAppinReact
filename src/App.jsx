import React, { useState } from 'react'

function App() {
  var [a,seta] = useState(0)
  return (
    <>
      <div className='center w-full h-screen bg-gray-200 '> 
      <h1 className='text-6xl font-bold text-green-900'>CounterApp</h1>
          <div className=' w-2/2 h-1/4 bg-slate-700 rounded-md center2'>
            <button className='w-32 h-20 bg-blue-400 text-yellow-100 text-2xl rounded-lg font-bold' onClick={()=>{if (a >= 0) {
              seta(a+1)
            } else {
              seta(0)
            }}} >Start +</button>
            <div className='w-32 h20 bg-white text-4xl rounded-lg text-center font-bold'>{a}</div>
            <button className='w-32 h-20 bg-blue-400 text-yellow-100 text-2xl rounded-lg font-bold' onClick={()=>{if (a <=0) {
              seta(0)
            } else {
              seta(a-1)
            }}}>Less -</button>
          </div>
      </div>
    </>
  )
}

export default App