import { BaseSyntheticEvent, useState, memo, useEffect } from "react";
import { Input, Avatar, Typography, Button, Checkbox } from "antd";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import { format } from "date-fns";
import BeaverFull from "assets/beaver-full.svg";
import { ProjectProps } from "components/project/interface";
import {
  StyledDateCol,
  StyledDeleteDivAsButton,
  StyledInputRow,
  StyledNameCol,
  StyledRow,
  NameAndDateWrapper,
  EditRowDiv,
} from "components/project/styles";

const { Text } = Typography;

/**
 * @todo: fix edit title input & close button
 */
const ProjectComponent = ({
  isNewProject,
  setIsNewProject,
  handleEditProject,
  project,
  addToProjects,
  handleDeleteProject,
  setCheckList,
}: ProjectProps): JSX.Element => {
  const [projectName, setProjectName] = useState(project?.name);
  const [isEditing, setIsEditing] = useState(false);
  const [showCheckBox, setShowCheckBox] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isMouseOn, setIsMouseOn] = useState(false);
  let timeoutId: ReturnType<typeof setTimeout>;

  const toggleInputField = () => {
    console.log("toggling input field");
    setIsEditing(!isEditing);
  };
  const toggleChecked = () => setChecked(!checked);
  const cancelNewProject = () => setIsNewProject?.(false);
  const handleMouseOver = () => {
    timeoutId = setTimeout(() => {
      setIsMouseOn(true);
    }, 1000);
  };
  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setIsMouseOn(false);
    if (showCheckBox) setShowCheckBox(false);
  };
  // const handleRowClick = () => {
  //   console.log("row clicked");
  //   setChecked(true);
  //   setShowCheckBox(true);
  // };
  const handleChange = (e: BaseSyntheticEvent) => {
    const { value } = e.target;
    setProjectName(value);
  };
  const handleEnterKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Enter" || !projectName) return;

    if (isEditing && projectName && project?.id) {
      handleEditProject?.(project?.id, projectName);
      setIsEditing(false);
    }

    if (!isEditing && isNewProject) {
      addToProjects?.(projectName);
      setIsNewProject?.(false);
    }

    setProjectName("");
  };

  useEffect(() => {
    if (checked && project?.id) {
      setCheckList?.((prevState: string[]) => [...prevState, project.id]);
    } else if (project?.id) {
      setCheckList?.((prevState: string[]) =>
        prevState.filter((id) => id !== project.id)
      );
    }
  }, [checked, project?.id, setCheckList]);

  useEffect(() => {
    if (isMouseOn) {
      setShowCheckBox(true);
    } else {
      setShowCheckBox(false);
    }
  }, [isMouseOn]);

  if (isNewProject) {
    return (
      <StyledInputRow>
        <Avatar src={<img src={BeaverFull} alt="project logo" />} />
        <Input
          type="text"
          value={projectName}
          onChange={handleChange}
          onKeyUp={handleEnterKey}
          autoFocus
          placeholder="Name your project"
        />
        <Button
          shape="circle"
          type="primary"
          icon={<CloseOutlined />}
          onClick={cancelNewProject}
          danger
        />
      </StyledInputRow>
    );
  }

  return (
    <StyledRow
      // onClick={handleRowClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {(showCheckBox || checked) && (
        <Checkbox checked={checked} onChange={toggleChecked} />
      )}
      <Avatar size={32} src={<img src={BeaverFull} alt="project logo" />} />
      <NameAndDateWrapper>
        {isEditing ? (
          <EditRowDiv>
            <Input
              type="text"
              value={projectName}
              onChange={handleChange}
              onKeyUp={handleEnterKey}
              autoFocus={isEditing}
            />
            <Button
              shape="circle"
              type="primary"
              icon={<CloseOutlined />}
              onClick={toggleInputField}
              danger
            />
          </EditRowDiv>
        ) : (
          <StyledNameCol>
            <Text ellipsis strong>
              {project?.name}
            </Text>
            <Button icon={<EditOutlined />} onClick={toggleInputField} />
          </StyledNameCol>
        )}
        {project?.date && (
          <StyledDateCol>
            <Text>
              {format(new Date(project.date), "MMM dd, yyyy h:mmaaa")}
            </Text>
          </StyledDateCol>
        )}
      </NameAndDateWrapper>
      <StyledDeleteDivAsButton
        onClick={handleDeleteProject?.(project?.id || "")}
      />
    </StyledRow>
  );
};

export const Project = memo(ProjectComponent);
