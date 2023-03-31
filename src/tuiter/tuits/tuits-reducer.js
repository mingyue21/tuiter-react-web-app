import { createSlice } from "@reduxjs/toolkit";
import { createTuitThunk, findTuitsThunk } from "../../services/tuits-thunks";
import { deleteTuitThunk } from "../../services/tuits-thunks";
import { updateTuitThunk } from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    reducers: {},
    extraReducers: {
        [findTuitsThunk.pending]: 
            (state) => {
                state.loading = true;
                state.tuits = [];
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.tuits = payload;
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false;
                state.error = action.error;
            },
        [deleteTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.tuits = state.tuits.filter(tuit => tuit._id !== payload);
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.tuits.push(payload);
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                  .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                  ...state.tuits[tuitNdx],
                  ...payload
                }
            },
    }
});

export const { createTuit, deleteTuit, likedToggle } = tuitsSlice.actions;
export default tuitsSlice.reducer;