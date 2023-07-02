import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLSHistory, updateLSHistory } from "../localStorageHistory";

export interface CharacterImageType {
  name: string;
  url: string;
};
export interface CharacterType {
  name: string;
  img: string;
  types?: string[];
  moves?: string[];
  abilities?: string[];
  sprites?:CharacterImageType[];
};

interface InitialStateProps {
  history: CharacterType[];
  current?: CharacterType;
  error?: string;
};

const initialHistory: CharacterType[] = getLSHistory();
const initialState: InitialStateProps = {
  history: initialHistory,
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addToHistory: (state: any, action: PayloadAction<CharacterType>) => {
      updateLSHistory(action.payload);
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
