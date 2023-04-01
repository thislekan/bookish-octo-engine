import { IProject } from "interface";
import { DropResult } from "react-beautiful-dnd";

export interface ProjectListProps {
  projects: IProject[];
  handleEditProject: (projectId: string, newName: string) => void;
  handleDeleteProject?: (val: string) => () => void;
  onDragEnd: (result: DropResult) => void;
  setCheckList: (cb: (value: string[]) => string[]) => void;
}
