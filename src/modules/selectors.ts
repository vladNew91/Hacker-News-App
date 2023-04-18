import { RootState } from ".";
import { ResponseData } from "../types";

export const selectedListItem = (state: RootState): ResponseData | undefined =>
  state.list.listitem;

export const listPage = (state: RootState): number =>
  state.list.listPage;