import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CharacterType {
  name: string;
  img: string;
  types?: string[];
  moves?: string[];
  abilities?: string[];
};

interface InitialStateProps {
  history: CharacterType[];
  current?: CharacterType;
  error?: string;
};

const initialState: InitialStateProps = {
  history: [],
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addToHistory: (state: any, action: PayloadAction<CharacterType>) => {
      state.history.push(action.payload);
    },
    setCurrentPokemon: (state: any, action: PayloadAction<CharacterType>) => {
      state.current = action.payload;
    },
    setErrorMsg: (state: any, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
    },
  }
});

export const {
  addToHistory,
  setCurrentPokemon,
  setErrorMsg
} = SearchSlice.actions;
export default SearchSlice.reducer;
