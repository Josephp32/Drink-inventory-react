import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        brand: 'Brand',
        size: "Size",
        price: "Price",
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        // chooseName: (state, action) => { state.name = action.payload }, // All we're doing is setting the input to the state.name
        chooseBrand: (state, action) => { state.brand = action.payload },
        chooseSize: (state, action) => { state.size = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseBrand, chooseSize, choosePrice } = rootSlice.actions