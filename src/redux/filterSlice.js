import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cityList: [],
    clusterList: [],
    space: {}
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addCity: (state, { payload }) => {
            state.cityList.push(payload);
        },
        removeCity: (state, { payload }) => {
            state.cityList = state.cityList.filter((city) => city !== payload);
        },
        addCluster: (state, { payload }) => {
            state.clusterList.push(payload);
        },
        removeCluster: (state, { payload }) => {
            state.clusterList = state.clusterList.filter((cluster) => cluster !== payload);
        },
        setSpaceLimit: (state, { payload }) => {
            state.space = payload;
        },
        clearFilter: (state, action) => {
            state.cityList = [];
            state.clusterList = [];
            state.space = {};
        }
    }
});

export const { addCity, removeCity, setSpaceLimit, addCluster, removeCluster, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;