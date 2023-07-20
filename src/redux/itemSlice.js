import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItem: (state, { payload }) => {
            state.items = payload;
        }
    }
});

export const { addItem } = itemSlice.actions;
export default itemSlice.reducer;