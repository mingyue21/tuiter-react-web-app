import { createSlice } from '@reduxjs/toolkit';
import profile from './profile.json';

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        saveProfile(state, action) {
            return action.payload;
        }
    }
});

export const { saveProfile } = profileSlice.actions;
export default profileSlice.reducer;