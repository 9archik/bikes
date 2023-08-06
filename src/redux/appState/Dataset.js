import { createSlice } from '@reduxjs/toolkit'

import scoopy from './../../static/images/bikes/scoopy.png'
import vario from './../../static/images/bikes/vario.png'
import fazzio from './../../static/images/bikes/fazzio.png'
import lexi from './../../static/images/bikes/lexi.png'

import nmax from './../../static/images/bikes/nmax.png'
import adv from './../../static/images/bikes/adv.png'
import pcx from './../../static/images/bikes/pcx.png'

import vespa from './../../static/images/bikes/vespa.png'
import xmax from './../../static/images/bikes/xmax.png'

const initialState = {
  mini: {
    type: "mini",
    items: [   
      {
          name: "Scoopy",
          img: scoopy,
          price: 3,
      }, 
      {
          name: "Vario",
          img: vario,
          price: 3,
      },
      {
          name: "Fazzio",
          img: fazzio,
          price: 3,
      },
      {
          name: "Lexi",
          img: lexi,
          price: 4,
      }
  ]
  },
  highways: {
    type: "highways",
    items: [   
      {
          name: "Nmax",
          img: nmax,
          price: 4,
      }, 
      {
          name: "ADV",
          img: adv,
          price: 6,
      },
      {
          name: "PCX",
          img: pcx,
          price: 4,
      },
  ]
  },
  luxe: {
    type: "luxe",
    items: [   
      {
          name: "Vespa",
          img: vespa,
          price: 8,
      }, 
      {
          name: "Xmax",
          img: xmax,
          price: 11,
      },    
  ]
  },

  selected_bike: {
    type: "mini",
    name: "",
    date_at: "",
    date_to: "",
    release: "",
    color: "",
    helmet_count: "",
    options: {
      abs: false,
      keyless_access: false,
    }
  }
}

export const appSlice = createSlice({
  name: 'dataset',
  initialState,
  reducers: {
    setSelectedBike: (state, action) => {
        state.selected_bike = action.payload
    },
    setName: (state, action) => {
      state.selected_bike.name = action.payload
    },
    setDateAt: (state, action) => {
      state.selected_bike.date_at = action.payload
    },
    setDateTo: (state, action) => {
      state.selected_bike.date_to = action.payload
    },
    setRelease: (state, action) => {
      state.selected_bike.release = action.payload
    },
    setColor: (state, action) => {
      state.selected_bike.color = action.payload
    },
    setHelmet: (state, action) => {
      state.selected_bike.helmet_count = action.payload
    },
    setAbs: (state, action) => {
      state.selected_bike.options.abs = action.payload
    },
    setKeyless: (state, action) => {
      state.selected_bike.options.keyless_access = action.payload
    },
  },
})

export const { setSelectedBike, setName, setDateAt, setDateTo, setRelease, setColor, setHelmet, setAbs, setKeyless } = appSlice.actions

export default appSlice.reducer


