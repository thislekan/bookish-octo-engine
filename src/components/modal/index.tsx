import { Avatar, Button, Typography } from "antd";
import { QuestionOutlined } from "@ant-design/icons";
import { ModalComponentProps } from "components/modal/interface";
import { v4 as uuidV4 } from "uuid";
import { StyledModal } from "components/modal/styles";

const { Text } = Typography;
export function ModalComponent({
  openModal,
  setOpenModal,
  deleteProject,
}: ModalComponentProps) {
  const closeModal = () => setOpenModal(false);

  return (
    <StyledModal
      open={openModal}
      closable={false}
      footer={[
        <div className="btns-div" key={uuidV4()}>
          <Button onClick={closeModal}>No</Button>
          <Button onClick={deleteProject}>Yes</Button>
        </div>,
      ]}
    >
      <div className="text-div">
        <div className="left">
          <Avatar shape="circle" icon={<QuestionOutlined />} size={22} />
        </div>
        <div className="right">
          <Text>Are you sure you want to delete this project?</Text>
          <Text>This action can't be undone</Text>
        </div>
      </div>
    </StyledModal>
  );
}
