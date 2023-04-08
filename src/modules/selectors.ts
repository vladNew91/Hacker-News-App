import { RootState } from ".";
import { ResponseData } from "../types";

export const selectedItem = (state: RootState): ResponseData | undefined =>
  state.selectedItem.data;
