import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { urlService } from "./urlService";

const initialState = {
    urls : [],
    isError : false,
    isSuccess : false,
    isLoading : false,
    message: ''
}

const getAuthToken = (thunkAPI) => {
    const state = thunkAPI.getState()
    return state.auth?.token || state.auth?.user?.token || localStorage.getItem('token')
}

// fetch urls
export const createShortUrl = createAsyncThunk('urls/shorten', async({ longUrl, customAlias }, thunkAPI) => {
    try {
        const token = getAuthToken(thunkAPI)

        if (!token) {
            return thunkAPI.rejectWithValue('Authentication required')
        }

        return await urlService.createShortUrl(longUrl, token, customAlias)
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
// fetch urls
export const fetchUrls = createAsyncThunk('urls/fetch', async(_,thunkAPI) => {
    try {
        const token = getAuthToken(thunkAPI)

        if (!token) {
            return thunkAPI.rejectWithValue('Authentication required')
        }

        return await urlService.fetchUrls(token)
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
export const deleteUrl = createAsyncThunk('urls/delete',async(id, thunkAPI) => {
    try{
        const token = getAuthToken(thunkAPI)

        if (!token) {
            return thunkAPI.rejectWithValue('Authentication required')
        }

        return await urlService.deleteUrl(id, token)
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const urlSlice = createSlice({
    name: "url",
    initialState,
    reducers: {
        reset: () => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(createShortUrl.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createShortUrl.fulfilled, (state, action) => {
            state.isSuccess = true,
            state.isLoading = false
            state.urls.push(action.payload)
        })
        .addCase(createShortUrl.rejected, (state, action) => {
            state.isLoading = false,
            state.isError = true,
            state.message = action.payload
        })
        .addCase(fetchUrls.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchUrls.fulfilled, (state, action) => {
            state.isSuccess = true,
            state.isLoading = false
            state.urls = Array.isArray(action.payload) ? action.payload
            : (action.payload && action.payload.urls) ? action.payload.urls : []
        })
        .addCase(fetchUrls.rejected, (state, action) => {
            state.isLoading = false,
            state.isError = true,
            state.message = action.payload
        })
        .addCase(deleteUrl.pending, (state, action) => {
            state.isLoading = true
        })
        .addCase(deleteUrl.fulfilled, (state, action) => {
            state.isSuccess = true,
            state.isLoading = false
            console.log(action.payload)
            state.urls = state.urls.filter(item => item.id !== action.payload.id)
        })
    }
}) 


export const {reset} = urlSlice.actions
export default urlSlice.reducer