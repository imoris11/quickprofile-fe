import React from "react"
import "./home.css"
import { useDispatch, useSelector } from "react-redux"
import { toggleCurrentView, getView } from "../auth/redux/authSlice"
import UserProfileForm from "./Form"
import PersonalProfile from "./PersonProfile"
import { isLoggedIn } from "../auth/redux/selectors"
import { Redirect } from "react-router-dom"

const Landing = () => {
  const dispatch = useDispatch()
  const view = useSelector(getView)
  const loggedIn = useSelector(isLoggedIn)

  const toggleView = () => {
    dispatch(toggleCurrentView())
  }
  if (!loggedIn) return <Redirect to="/" push />

  return view === "profile" ? (
    <PersonalProfile toggleView={toggleView} />
  ) : (
    <UserProfileForm />
  )
}

export default Landing
