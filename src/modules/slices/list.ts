import { createSlice } from "@reduxjs/toolkit";
import { ResponseData } from "../../types";

export interface ListState {
  listitem?: ResponseData;
  listPage: number;
}

const initialState: ListState = {
  listitem: undefined,
  listPage: 1,
};

export const list = createSlice({
  name: "list",
  initialState,
  reducers: {
    setListitem(state: ListState, action) {
      return {
        ...state,
        listitem: action.payload,
      };
    },
    setListPage(state: ListState, action) {
      return {
        ...state,
        listPage: action.payload,
      };
    },
  },
});

export const { setListitem, setListPage } = list.actions;
