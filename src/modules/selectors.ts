import { RootState } from ".";
import { NewStory } from "../types";

export const selectSelectedNews = (state: RootState): NewStory | undefined =>
  state.selectedNews.data;
