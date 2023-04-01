import { Row } from "antd";
import styled from "styled-components";
import DeleteBin from "assets/delete.svg";
import DeleteBinHover from "assets/delete-hover.svg";

export const StyledDeleteDivAsButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${DeleteBin});
  background-size: cover;
  cursor: pointer
  outline: none;

  :hover {
    background-image: url(${DeleteBinHover});
  }
`;

export const StyledInputRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 55px;
  background-color: #fdfdfd;
  padding: 0 5px;
  border: 1px solid #000000;
  border-style: inset;
  outline: none;

  .ant-input {
    height: 30px;
    width: 210px;
    border-radius: unset;

    :focus {
      border: 1px solid #40a9ff;
    }
  }

  .ant-avatar {
    box-shadow: rgba(0, 0, 0, 0.25) 0px -1px 4px 0px;
    border: 1px solid #000000;
    border-radius: unset;
  }

  .ant-btn {
    min-width: unset;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 600px) {
    justify-content: unset;
    padding: 0 24px;

    .ant-input {
      margin: 0 24px;
      height: 32px;
    }
  }
`;

export const StyledRow = styled.div`
  height: 50px;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #fdfdfd;
  cursor: move;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;

  :nth-child(1) {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .ant-input {
    border-radius: unset;

    :focus {
      border: 1px solid #40a9ff;
    }
  }

  @media (min-width: 800px) {
    height: 70px;
  }
`;
export const StyledNameCol = styled.div`
  display: inherit;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .ant-typography {
    width: calc(100% - 42px);
  }

  .ant-btn {
    margin-left: 12px;
    border: unset;
    border-radius: unset;
    outline: none;
    color: rgba(0, 0, 0, 0.5);
    width: 30px;

    :hover {
      color: rgba(0, 0, 0, 0.9);
    }
  }

  @media (min-width: 600px) {
    width: 50%;

    .ant-typography {
      width: calc(100% - 54px);
    }

    .ant-btn {
      margin-left: 24px;
    }
  }

  @media (min-width: 800px) {
    width: 60%;
  }
`;
export const StyledDateCol = styled.div`
  display: none;

  .ant-typography {
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
  }

  @media (min-width: 600px) {
    display: unset;
  }
`;
export const NameAndDateWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 70%;

  @media (min-width: 600px) {
    justify-content: space-between;
  }
`;
export const EditRowDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .ant-btn {
    margin-left: 5px;
  }

  @media (min-width: 600px) {
    width: 60%;
  }
`;
