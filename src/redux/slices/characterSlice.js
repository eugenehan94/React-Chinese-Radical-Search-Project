import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
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
    leftSidebarOpen: (state, action) => {
      state.open = action.payload
    },
    fetchRadicals: (state, action) => {
      state.radicalList = action.payload;
      state.radicalLoading = false;
    },
    selectedRadical: (state, action) => {
      state.chineseCharactersLoading = true;
      state.chineseCharactersLoading = true;
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
  leftSidebarOpen,
} = characterSlice.actions;

export default characterSlice.reducer;
