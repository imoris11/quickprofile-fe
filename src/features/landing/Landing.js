import React from "react"
import { Login } from "../auth"
import twitter from "../../static/images/twitterwhite.svg"
import curves2 from "../../static/images/whitecurve1.svg"
import curves1 from "../../static/images/whitecurve2.svg"

import "./landing.css"

const Home = () => {
  return (
    <div className="container">
      <div className="nav">
        <div className="nav-auth"></div>
      </div>
      <div>
        <div className="banner">
          <h1 className="banner-header">
            Create a professional profile for Twitter
            <img alt="twitter logo" className="hanging-logo" src={twitter} />
          </h1>
          <p className="banner-text">
            share profile on Twitter "@tellmeaboutbot tell me about @beingrichard_"
          </p>
          <div className="signup">
            <Login />
          </div>
          <div className="curves">
            <img alt="line curve" className="curve1" src={curves1} />
            <img alt="line curve" className="curve2" src={curves2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
