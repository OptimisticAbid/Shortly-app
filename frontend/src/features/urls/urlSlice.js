import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { urlService } from "./urlService";

const initialState = {
    urls : [],
    isError : false,
    isSuccess : false,
    isLoading : false,
    message: ''
}
// fetch urls
export const createShortUrl = createAsyncThunk('urls/shorten', async(longUrl, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await urlService.createShortUrl(longUrl,token)
    } 
    catch (error) {
        // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(error)
    }
})
// fetch urls
export const fetchUrls = createAsyncThunk('urls/fetch', async(data, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await urlService.fetchUrls(token)
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
            state.urls = action.payload
        })
        .addCase(createShortUrl.rejected, (state, action) => {
            state.isSuccess = false,
            state.isLoading = false,
            state.isError = true,
            message = action.payload
        })
    }
}) 


export const {reset} = urlSlice.actions
export default urlSlice.reducer