import { RootState } from ".";
import { News, Job } from "../types";

export const selectedItem = (state: RootState): News | Job | undefined =>
  state.selectedItem.data;
