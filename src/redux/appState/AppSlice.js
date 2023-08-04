import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    language: "ru"
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
        state.language = action.payload
    },
  },
  // extraReducers: {  
  //   [get_all_items.pending]: (state) => {
  //   },
  // }
})

export const { setLanguage } = appSlice.actions

export default appSlice.reducer


