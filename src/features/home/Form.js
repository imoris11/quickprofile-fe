import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { update_quick_profile, toggleCurrentView } from "../auth/redux/authSlice"
import { getUser } from "../auth/redux/selectors"
import { Button } from "../../components/Button/Button"

export const UserProfileForm = () => {
  const user = useSelector(getUser)
  const [state, setState] = useState(user.quickprofile)

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    //move to saga at a later time
    const data = {
      quickprofile: state,
    }
    dispatch(update_quick_profile(data))
  }

  const handleChange = (e) => {
    let oldState = state
    setState({ ...oldState, [e.target.name]: e.target.value })
  }

  return (
    <div className="center">
      <div className="profile-card form">
        <form onSubmit={handleSubmit} className="profile-details">
          <div className="row"></div>
          <h3>Contact</h3>
          <div className="form-group">
            <input
              onChange={handleChange}
              className="form__input"
              name="name"
              type="text"
              value={state?.name}
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <input
              className="form__input"
              name="email"
              type="email"
              value={state?.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              className="form__input"
              name="phone"
              type="tel"
              onChange={handleChange}
              value={state?.phone}
              placeholder="Phone"
            />
          </div>
          <div className="form-group">
            <input
              className="form__input"
              name="website"
              type="text"
              onChange={handleChange}
              value={state?.website}
              placeholder="Website"
            />
          </div>
          <h3>Bio</h3>
          <div className="form-group">
            <textarea
              onChange={handleChange}
              name="bio"
              className="form__input"
              placeholder="Bio"
              rows={5}
              value={state?.bio}
            />
          </div>
          <h3>Socials</h3>
          <div className="form-group">
            <input
              className="form__input"
              name="linkedin"
              type="text"
              onChange={handleChange}
              value={state?.linkedin}
              placeholder="LinkedIn"
            />
          </div>
          <div className="form-group">
            <input
              className="form__input"
              name="facebook"
              type="text"
              onChange={handleChange}
              placeholder="Facebook"
              value={state?.facebook}
            />
          </div>
          <div className="form-group">
            <input
              className="form__input"
              name="twitter"
              disabled
              type="text"
              value={user?.screen_name}
              onChange={handleChange}
              placeholder="Twitter"
            />
          </div>
          <div className="form-group">
            <input
              className="form__input"
              name="portfolio"
              type="text"
              value={state?.portfolio}
              onChange={handleChange}
              placeholder="Other link"
            />
          </div>
          <div className="bottom-nav">
            <Button
              color="#2587be"
              className="info button"
              title="Save"
              type="submit"
            />
            <Button
              color="red"
              onClick={() => dispatch(toggleCurrentView())}
              className="danger button"
              title="Close"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserProfileForm
