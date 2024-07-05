import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { SideBarProvider } from "./context/SideBarContext"
import Header from "./container/layout/Header"
import SideBar from "./container/layout/SideBar"
import Container from "./container/layout/Container"
import Profile from "./container/profile/Profile"
import Projects from "./container/projects/Projects"
import Services from "./container/service/Services"
import './style/index.css'

function App() {

  return (
    <SideBarProvider>
      <Router>
        <Header />
        <Container>
          <SideBar />
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Container>
      </Router>
    </SideBarProvider>
  )
}

export default App
