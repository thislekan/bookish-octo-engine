import { useState, useRef, BaseSyntheticEvent } from "react";
import { v4 as uuidV4 } from "uuid";
import { DropResult } from "react-beautiful-dnd";
import { Button } from "antd";
import { Project } from "components/project";
import { HeaderComponent } from "components/header";
import { ModalComponent } from "components/modal";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  createProject,
  deleteProjectFunc,
  editProject,
  reorderProject,
  bulkDelete,
} from "app/projectSlice";
import { AppDiv, StyledDeleteBtnDiv } from "appStyles";
import { ProjectList } from "components/projectList";
import { IProject } from "interface";

function App() {
  const projects: IProject[] = useAppSelector((state) => state.projects);
  const dispatch = useAppDispatch();
  const [isNewProject, setIsNewProject] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [checkList, setCheckList] = useState<string[]>([]);
  const idToBeDeleted = useRef("");

  const addToProjects = (name: string) => {
    if (!name || !isNewProject) return;
    const id = uuidV4();
    dispatch(createProject({ id, name }));
  };

  const handleEditProject = (projectId: string, newName: string) => {
    dispatch(editProject({ name: newName, id: projectId }));
  };

  const deleteProject = () => {
    const id: string = idToBeDeleted.current;
    if (!id) return;

    const foundIndex = projects?.findIndex((project) => project.id === id);

    if (foundIndex || foundIndex === 0) {
      dispatch(deleteProjectFunc(id));
    }

    idToBeDeleted.current = "";
    setOpenModal(false);
  };

  const handleDeleteProject = (id: string) => (e: BaseSyntheticEvent) => {
    if (!id) return;
    e.stopPropagation();
    idToBeDeleted.current = id;
    setOpenModal(true);
  };

  const handleDragOver = (result: DropResult) => {
    if (!result.destination) return;
    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    dispatch(reorderProject({ startIndex, endIndex }));
  };

  const handleBulkDelete = () => {
    if (!checkList.length) return;
    dispatch(bulkDelete({ checkList }));
    setCheckList([]);
  };

  return (
    <AppDiv
      className={!!projects?.length || isNewProject ? "new-background" : ""}
    >
      <HeaderComponent
        setIsNewProject={setIsNewProject}
        hasProjects={isNewProject || !!projects?.length}
        isNewProject={isNewProject}
      />
      <div className="container">
        {!!projects?.length && (
          <ProjectList
            onDragEnd={handleDragOver}
            handleEditProject={handleEditProject}
            handleDeleteProject={handleDeleteProject}
            projects={projects}
            setCheckList={setCheckList}
          />
        )}
        {isNewProject && (
          <Project
            isNewProject={isNewProject}
            setIsNewProject={setIsNewProject}
            addToProjects={addToProjects}
          />
        )}
        <ModalComponent
          openModal={openModal}
          setOpenModal={setOpenModal}
          deleteProject={deleteProject}
        />
        {!!checkList.length && (
          <StyledDeleteBtnDiv>
            <Button type="primary" danger onClick={handleBulkDelete}>
              Delete Checked Items
            </Button>
          </StyledDeleteBtnDiv>
        )}
      </div>
    </AppDiv>
  );
}

export default App;
