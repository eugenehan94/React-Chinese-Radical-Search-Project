import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    radicalList: null,
    radicalLoading: true,
    radicalSelected: "1"
}

export const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers: {
        fetchRadicals: (state, action) => {
            state.radicalList = action.payload
            state.radicalLoading = false
        },
        selectedRadical: (state, action) => {
            state.radicalSelected = action.payload
        }
    }
})

export const {fetchRadicals, selectedRadical} = characterSlice.actions

export default characterSlice.reducer