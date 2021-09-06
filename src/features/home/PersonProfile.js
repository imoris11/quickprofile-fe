import React from "react"
import { getUser } from "../auth/redux/selectors"
import { useSelector } from "react-redux"
import UserProfile from "./Profile"

export const PersonalProfile = (props) => {
  const user = useSelector(getUser)

  return <UserProfile toggleView={props.toggleView} user={user} showLogout={true} />
}

export default PersonalProfile
