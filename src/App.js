import React from 'react'
import Navbar from './component/Navbar'
import Shop from './component/Shop'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container my-4'>
        <Shop />
      </div>
    </>
  )
}

export default App

