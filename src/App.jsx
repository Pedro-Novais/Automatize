import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { SideBarProvider } from "./container/layout/SideBarContext"
import Header from "./container/layout/Header"
import SideBar from "./container/layout/SideBar"
import Footer from "./container/layout/Footer"
import Container from "./container/layout/Container"
import Profile from "./container/profile/Profile"
import Projects from "./container/projects/Projects"
import Signature from "./container/signature/Signature"
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
            <Route path="/signature" element={<Signature />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </SideBarProvider>
  )
}

export default App
