import { createSlice } from "@reduxjs/toolkit";
import { ResponseData } from "../../types";

export interface SelectedItemState {
  data?: ResponseData;
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
