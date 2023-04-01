import { Modal } from "antd";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  background-color: #eeeff3;
  padding: 24px;
  max-width: calc(100vw - 32px);

  .ant-modal-content {
    border: unset;
    border-radius: unset;
    box-shadow: unset;
    background-color: unset;
    padding: unset;
  }

  .text-div {
    display: flex;

    .left {
      .ant-avatar {
        background-color: #faad14;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      margin-left: 15px;

      .ant-typography {
        :nth-child(1) {
          color: rgba(0, 0, 0, 0.85);
        }

        :nth-child(2) {
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  .btns-div {
    margin-top: 30px;

    .ant-btn {
      border-radius: 4px;
      width: 60px;

      :nth-child(1) {
        background-color: inherit;
        border: 1px solid rgba(0, 0, 0, 0.2);
        color: rgba(0, 0, 0, 0.65);
      }

      :nth-child(2) {
        border: 1px solid 979797;
        background-color: #1890ff;
        color: #ffffff;
      }
    }
  }

  @media (min-width: 475px) {
    width: unset !important;
    max-width: 435px !important;
  }
`;
