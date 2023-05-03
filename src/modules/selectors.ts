import { RootState } from ".";
import { Story } from "../types";

export const selectedListItem = (state: RootState): Story | undefined =>
  state.list.listitem;

export const listPage = (state: RootState): number =>
  state.list.listPage;