import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    byNameСolumn: 'name',
    byСondition: 'equally',
    input: ''
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeNameColumn(state, action) {
            state.byNameСolumn = action.payload;
        },
        changeCondition(state, action) {
            state.byСondition = action.payload;
        },
        changeInput(state, action) {
            state.input = action.payload;
        }
    }
});

export const {
        changeNameColumn,
        changeCondition,
        changeInput
    } = filtersSlice.actions;

export default filtersSlice.reducer;