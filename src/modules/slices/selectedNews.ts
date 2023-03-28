import { createSlice } from "@reduxjs/toolkit";
import { NewStory } from "../../types";

export interface SelectedNewsState {
  data?: NewStory;
}

const initialState: SelectedNewsState = {
  data: undefined,
};

export const selectedNewsSlice = createSlice({
  name: "selectedNews",
  initialState,
  reducers: {
    selectedNews(state: SelectedNewsState, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const { selectedNews } = selectedNewsSlice.actions;
