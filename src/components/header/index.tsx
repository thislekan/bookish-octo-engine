import { memo } from "react";
import { Avatar, Button, Row, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Beaver from "assets/beaver.svg";
import { HeaderComponentProps } from "components/header/inteerface";
import { StyledHeader, RowTwoStyle } from "components/header/styles";

const { Title } = Typography;

const HeaderFunctionComponent = ({
  setIsNewProject,
  hasProjects,
  isNewProject,
}: HeaderComponentProps): JSX.Element => {
  const toggleNewProject = () => setIsNewProject(true);

  return (
    <StyledHeader className={hasProjects ? "hideShadow" : ""}>
      <Row>
        <Avatar size={32} src={<img src={Beaver} alt="Beaver avatar" />} />
      </Row>
      <RowTwoStyle>
        <Title level={5}>MY PROJECTS</Title>
        <Button
          size="middle"
          icon={<PlusOutlined />}
          shape="circle"
          onClick={toggleNewProject}
          disabled={isNewProject}
        />
      </RowTwoStyle>
    </StyledHeader>
  );
};

export const HeaderComponent = memo(HeaderFunctionComponent);
