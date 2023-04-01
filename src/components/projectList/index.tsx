import { memo } from "react";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable } from "components/utils/strictModeDroppable";
import { Project } from "components/project";
import { ProjectListProps } from "components/projectList/interface";

function ProjectListComponent({
  projects,
  handleDeleteProject,
  handleEditProject,
  onDragEnd,
  setCheckList,
}: ProjectListProps): JSX.Element {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {projects.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Project
                      handleEditProject={handleEditProject}
                      project={item}
                      handleDeleteProject={handleDeleteProject}
                      key={item.id}
                      setCheckList={setCheckList}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
    // <>
    //   {projects.map((item) => (
    //     <Project
    //       handleEditProject={handleEditProject}
    //       project={item}
    //       handleDeleteProject={handleDeleteProject}
    //       key={item.id}
    //       setCheckList={setCheckList}
    //     />
    //   ))}
    // </>
  );
}

export const ProjectList = memo(ProjectListComponent);
