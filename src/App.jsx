import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DigitalClock from "./commit/DigitalClock"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DigitalClock />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
