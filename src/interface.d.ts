export interface IProject {
  id: string;
  name: string;
  date: string | Date | number;
}

export interface ReorderProjectPayload {
  startIndex: number;
  endIndex: number;
}

export interface BulkDeleteProjectPayload {
  checkList: string[];
}
