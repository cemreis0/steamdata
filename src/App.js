import React from "react"
import "./App.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

// Components
import Steam from "./pages/Steam"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Steam/>} />
      </Routes>
    </Router>
  )
}

export default App
