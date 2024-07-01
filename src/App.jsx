import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { SideBarProvider } from "./container/layout/SideBarContext"
import Header from "./container/layout/Header"
import SideBar from "./container/layout/SideBar"
import Footer from "./container/layout/Footer"
import Container from "./container/layout/Container"
import './style/index.css'
import AppFake from "./AppFake"

function App() {

  return (
    <SideBarProvider>
      <Router>
        <Header />
        <Container>
          <SideBar />
          <Routes>
            <Route path="/" element={<AppFake />} />
            <Route path="/automations" element={<AppFake />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </SideBarProvider>
  )
}

export default App
