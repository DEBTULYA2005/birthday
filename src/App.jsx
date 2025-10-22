import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import SlidingGifReveal from './SlidingGifReveal'
import GiftPage from './giftbox'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SlidingGifReveal />} />
          <Route path="/gift" element={<GiftPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
