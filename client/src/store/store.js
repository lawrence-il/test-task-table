import { configureStore } from "@reduxjs/toolkit";

import { dataSlice } from "../redux/dataSlice";
import filters from "../redux/filtersSlice";

export const store = configureStore({
    reducer: {
        filters,
        [dataSlice.reducerPath]: dataSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(dataSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});