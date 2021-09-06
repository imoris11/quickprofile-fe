import React from "react"
import "./App.css"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import Landing from "./features/landing"
import Home from "./features/home"
import PublicProfile from "./features/home/PublicProfile"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/profiles/:id" component={PublicProfile} />
        <Route path="/" component={Landing} />
      </Switch>
      <ToastContainer />
    </Router>
  )
}

export default App
