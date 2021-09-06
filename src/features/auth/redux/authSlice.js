import { createSlice } from "@reduxjs/toolkit"

const user = JSON.parse(localStorage.getItem("user"))
const initialState = {
  user: user || { quickprofile: {} },
  status: "idle",
  ui: {
    errors: {},
    loading: {
      get_user: false,
    },
    currentView: "profile",
  },
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state) => {
      state.status = "logging_in"
    },
    logout: (state) => {
      state.status = "Logging Out"
      state.user = {}
      localStorage.removeItem("user")
      window.location = "/"
    },
    login_success: (state, { payload }) => {
      state.status = "Logged In"
      Object.assign(state.user, payload)
    },
    get_user_details: (state) => {
      state.status = "Loading User Details"
      state.ui.loading.get_user = true
    },
    get_user_details_success: (state, { payload }) => {
      state.status = "User Loaded"
      Object.assign(state.user, payload)
      localStorage.setItem("user", JSON.stringify(state.user))
      state.ui.loading.get_user = false
    },
    update_quick_profile: (state, { payload }) => {
      Object.assign(state.user, payload)
      localStorage.setItem("user", JSON.stringify(state.user))
    },
    toggleCurrentView: (state) => {
      if (state.ui.currentView === "profile") {
        state.ui.currentView = "form"
      } else {
        state.ui.currentView = "profile"
      }
    },
  },
})

export const {
  login,
  login_success,
  logout,
  get_user_details,
  get_user_details_success,
  update_quick_profile,
  toggleCurrentView,
} = authSlice.actions

//selectors
export const getView = (state) => state.auth.ui.currentView
export const getUserId = (state) => state.auth.user.id

export default authSlice.reducer
