import React, { useEffect, useState } from "react"
import UserProfile from "./Profile"
import { databaseRef } from "../../utils/firebase"
import { toast } from "react-toastify"

export const PublicProfile = (props) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const id = props.match.params.id
    try {
      databaseRef
        .child("users")
        .orderByChild("screen_name")
        .equalTo(id)
        .once("value", (snapshot) => {
          const retrievedUser = { ...snapshot.val() }
          const key = Object.keys(retrievedUser)
          if (key) {
            setUser(retrievedUser[key])
            setLoading(false)
          } else {
            toast.error("User not found")
            setUser(null)
            setLoading(false)
          }
        })
    } catch (error) {
      toast.error("User not found")
      setUser(null)
      setLoading(false)
    }
  }, [props.match.params.id])
  if (loading) {
    return (
      <div className="center">
        <div>Loading...</div>
      </div>
    )
  }

  if (!loading && user) {
    return <UserProfile user={user} showLogout={false} />
  }

  return (
    <div className="center">
      <h3>No user found</h3>
    </div>
  )
}

export default PublicProfile
