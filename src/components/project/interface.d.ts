import { IProject } from "interface";

export interface ProjectProps {
  project?: IProject;
  isNewProject?: boolean;
  setIsNewProject?: (val: boolean) => void;
  handleEditProject?: (projectId: string, newName: string) => void;
  addToProjects?: (value: string) => void;
  handleDeleteProject?: (val: string) => () => void;
  setCheckList?: (cb: (value: string[]) => string[]) => void;
}
