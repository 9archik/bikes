import { configureStore } from '@reduxjs/toolkit'

import app from './appState/AppSlice'
// import cart from './cartState/CartSlice'
// import window from './windowState/WindowSlice'

export default configureStore({
  reducer: {
    app,
    // cart,
    // window,
  },
})