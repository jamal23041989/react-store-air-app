import { configureStore } from '@reduxjs/toolkit'
import planesSlice from './slice/planesSlice'
import planeSlice from './slice/planeSlice'

export const store = configureStore({ reducer: { planes: planesSlice, plane: planeSlice } })
