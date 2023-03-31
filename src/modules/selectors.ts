import { RootState } from ".";
import { NewStory } from "../types";

export const selectNews = (state: RootState): NewStory | undefined =>
  state.selectedNews.data;
