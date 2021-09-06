import React from "react"
import facebook from "../../static/images/facebook.svg"
import linkedin from "../../static/images/linkedin.svg"
import twitter from "../../static/images/twitter-circle.svg"
import { useDispatch } from "react-redux"
import { Button } from "../../components/Button/Button"
import { logout } from "../auth/redux/authSlice"
import { toast } from "react-toastify"

export const UserProfile = (props) => {
  const { user, showLogout } = props
  const dispatch = useDispatch()

  const handleCopyUrl = () => {
    const location = window.location.origin
    navigator.clipboard.writeText(`${location}/profiles/${user.screen_name}`).then(
      function () {
        toast.success("Copying to clipboard was successful!")
      },
      function (err) {
        console.error("Async: Could not copy text: ", err)
      }
    )
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div>
      <div className="center">
        <div className="profile-card">
          <div className="profile-details">
            <div className="profile-header">
              <h3>Profile</h3>
              <h2>{user.quickprofile?.name || user.displayName}</h2>
            </div>
            <div className="row">
              <div>
                <div>
                  <p className="info">Email</p>
                </div>
                <div>
                  <p className="text">
                    {user.quickprofile?.email || user.screen_name}
                  </p>
                </div>
              </div>
              <div className="col">
                <div>
                  <p className="info">Phone</p>
                </div>
                <div>
                  <p className="text">{user.quickprofile?.phone || "-"}</p>
                </div>
              </div>
              <div className="col">
                <div>
                  <p className="info">Personal Website</p>
                </div>
                <div>
                  <p className="text">
                    {user.quickprofile?.website ? (
                      <a
                        rel="noreferrer noopener"
                        target="_blank"
                        href={user.quickprofile?.website}
                      >
                        Open
                      </a>
                    ) : (
                      "-"
                    )}{" "}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="info">Bio</p>
              <p className="body-text">
                {user.quickprofile?.bio || user.description}
              </p>
              <span onClick={() => props.toggleView()} className="text action">
                Edit
              </span>
            </div>
          </div>
          <div className="profile-socials">
            <div
              className="img-responsive"
              style={{
                background: `url(${user.profile_banner_url}) no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <img
              alt="user profile"
              className="profile-picture"
              src={user.profile_image_url}
            />
            <div className="row">
              <p className="col text">Follow on</p>
              <div className="col">
                <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href={`https://twitter.com/${user.screen_name}`}
                >
                  <img alt="Twitter logo as link" className="icon" src={twitter} />
                </a>
                <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href={`${user.quickprofile?.linkedin || "#"}`}
                >
                  <img alt="Linkedin logo as link" className="icon" src={linkedin} />
                </a>
                <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href={`${user.quickprofile?.facebook || "#"}`}
                >
                  <img alt="Facebook logo as link" className="icon" src={facebook} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mobile-credits">
        🚀🚀🚀 &nbsp;by{" "}
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://twitter.com/beingrichard_"
        >
          @beingrichard_
        </a>
      </p>
      <div className="bottom-nav">
        <Button
          onClick={handleCopyUrl}
          className="info button"
          title="Copy Profile"
          color="#2587be"
        />
        {showLogout && (
          <Button
            onClick={handleLogout}
            className="danger button"
            title="Logout"
            color="red"
          />
        )}
      </div>
      <p className="credits">
        🚀🚀🚀 &nbsp;by{" "}
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://twitter.com/beingrichard_"
        >
          @beingrichard_
        </a>
      </p>
    </div>
  )
}

export default UserProfile
