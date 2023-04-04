import { RootState } from ".";
import { News, Job } from "../types";

export const selectNews = (state: RootState): News | Job | undefined =>
  state.selectedItem.data;

// export const selectJob = (state: RootState): Job | undefined =>
//   state.selectedJob.data;
