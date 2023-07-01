import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./features/Search/search.slice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {

    search: SearchReducer

  }
});

export default store;