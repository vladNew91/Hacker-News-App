import { createSlice } from "@reduxjs/toolkit";
import { News, Job } from "../../types";

export interface SelectedItemState {
  data?: News | Job;
}

const initialState: SelectedItemState = {
  data: undefined,
};

export const selectedItemSlice = createSlice({
  name: "selectedItem",
  initialState,
  reducers: {
    selectedItem(state: SelectedItemState, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const { selectedItem } = selectedItemSlice.actions;
