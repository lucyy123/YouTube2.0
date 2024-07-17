import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateType, ItemsType } from "../vite-env";




const initialState: InitialStateType = {
    videos: [],
    loading: false,
}




export const searchReducer = createSlice({
    name: "SearchReducer",
    initialState,
    reducers: {
        newRequest: (state) => {
            state.loading = true

        },
        getVideos: (state, action: PayloadAction<ItemsType[]>) => {
            state.loading = false
            state.videos = action.payload
        }



    }
});

export const {getVideos,newRequest}=searchReducer.actions