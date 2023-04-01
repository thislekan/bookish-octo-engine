import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import type { RootState } from "app/store";
import {
  IProject,
  ReorderProjectPayload,
  BulkDeleteProjectPayload,
} from "interface";

const initialState: IProject[] = [];
export const projectsSlice = createSlice({
  initialState,
  name: "projects",
  reducers: {
    createProject: (state, action: PayloadAction<Omit<IProject, "date">>) => {
      state.push({ ...action.payload, date: new Date().getTime() });
    },

    editProject: (state, action: PayloadAction<Omit<IProject, "date">>) => {
      const { id, name } = action.payload;
      const foundIndex = state.findIndex((project) => project.id === id);
      if (foundIndex !== -1) state[foundIndex].name = name;
    },

    deleteProjectFunc: (state, action: PayloadAction<string>) => {
      const foundIndex = current(state)?.findIndex(
        ({ id }) => id === action.payload
      );
      if (foundIndex !== -1) state?.splice(foundIndex, 1);
    },

    reorderProject: (state, action: PayloadAction<ReorderProjectPayload>) => {
      const { startIndex, endIndex } = action.payload;
      const [removed] = state.splice(startIndex, 1);
      state.splice(endIndex, 0, removed);
    },

    bulkDelete: (state, action: PayloadAction<BulkDeleteProjectPayload>) => {
      const { checkList } = action.payload;
      state = state.filter(({ id }) => !checkList.includes(id));
      return state;
    },
  },
});

export const {
  createProject,
  editProject,
  deleteProjectFunc,
  reorderProject,
  bulkDelete,
} = projectsSlice.actions;
export const getProjects = (state: RootState) => state.projects;
export default projectsSlice.reducer;
