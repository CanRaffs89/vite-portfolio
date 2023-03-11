import React from 'react'
import Intro from './Intro'
import Gallery from './Gallery'
import '../assets/scss/main.scss'

function App() {
  return (
    <div className='container'>
        <Intro />
        <Gallery />
    </div>
  )
}

export default App