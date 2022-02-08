import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    radicalList: null,
    radicalLoading: true
}

export const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers: {
        fetchRadicals: (state, action) => {
            state.radicalList = action.payload
            state.radicalLoading = false
        }
    }
})

export const {fetchRadicals} = characterSlice.actions

export default characterSlice.reducer