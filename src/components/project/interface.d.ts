import { IProject } from "interface";
import { BaseSyntheticEvent } from "react";

export interface ProjectProps {
  project?: IProject;
  isNewProject?: boolean;
  setIsNewProject?: (val: boolean) => void;
  handleEditProject?: (projectId: string, newName: string) => void;
  addToProjects?: (value: string) => void;
  handleDeleteProject?: (val: string) => (e: BaseSyntheticEvent) => void;
  setCheckList?: (cb: (value: string[]) => string[]) => void;
}
