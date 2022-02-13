import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  radicalList: null,
  radicalLoading: true,
  radicalSelected: "1",
  chineseCharactersList: null,
  chineseCharactersLoading: true,
  chineseCharacterMeaning: null,
  chineseCharacterMeaningLoading: true,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    fetchRadicals: (state, action) => {
      state.radicalList = action.payload;
      state.radicalLoading = false;
    },
    selectedRadical: (state, action) => {
      state.radicalSelected = action.payload;
    },
    fetchChineseCharacters: (state, action) => {
      state.chineseCharactersList = action.payload;
      state.chineseCharactersLoading = false;
    },
    fetchChineseCharactersMeaning: (state, action) => {
      state.chineseCharacterMeaning = action.payload;
      state.chineseCharacterMeaningLoading = false;
    },
  },
});

export const {
  fetchRadicals,
  selectedRadical,
  fetchChineseCharacters,
  fetchChineseCharactersMeaning,
} = characterSlice.actions;

export default characterSlice.reducer;
