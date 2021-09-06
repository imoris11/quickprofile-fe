import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { login_success } from "./redux/authSlice"
import { isLoggedIn } from "./redux/selectors"
import { getAuth, TwitterAuthProvider, signInWithPopup } from "firebase/auth"
import { Redirect } from "react-router-dom"
import { Button } from "../../components/Button/Button"
import twitterWhite from "../../static/images/twitterwhite.svg"

export const Login = () => {
  const dispatch = useDispatch()
  const loggedIn = useSelector(isLoggedIn)

  const loginWithTwitter = () => {
    const provider = new TwitterAuthProvider()
    const auth = getAuth()
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user
        const { accessToken, providerData } = user
        dispatch(login_success({ accessToken: accessToken, ...providerData[0] }))
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message

        console.log(errorMessage, errorCode)
      })
  }

  return (
    <>
      <Button
        className="button login default"
        onClick={loginWithTwitter}
        id="login"
        color="white"
        Icon={twitterWhite}
        title="Sign in With Twitter"
      />
      {loggedIn && <Redirect to="/home" push />}
    </>
  )
}

export default Login
