import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";
import api from "../../lib/axios";

interface User {
  id: number,
  name: string,
  email: string
}

interface AuthState {
  user: User | null,
  loading: boolean,
  error: string | null
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
}

// Fetch authenticated user
export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (_, thunkAPI) => {
    try {
      const res = await api.get('/user')
      return res.data
    } catch {
      return thunkAPI.rejectWithValue('Not authenticated')
    }
  }
)

// Logout
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const res = await api.post('/logout')
      return res.data
    } catch {
      return thunkAPI.rejectWithValue('Log out failed')
    }
  }
)

const authSlice = createSlice ({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
    clearUser(state) {
      state.user = null
    }
  },
  extraReducers: (builders) => {
    builders
      .addCase(fetchUser.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
      })
      .addCase(fetchUser.rejected, (state) => {
        state.user = null
        state.loading = false
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null
      })
  }
})

export const { setUser, clearUser} = authSlice.actions
export default authSlice.reducer