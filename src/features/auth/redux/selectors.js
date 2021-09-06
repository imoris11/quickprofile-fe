export const getUser = (state) => state.auth.user
export const loading_user = (state) => state.auth.ui.loading.get_user
export const isLoggedIn = (state) => (state.auth.user.accessToken ? true : false)
