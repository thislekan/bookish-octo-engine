import { Layout, Row } from "antd";
import styled from "styled-components";

const { Header } = Layout;
export const StyledHeader = styled(Header)`
  background-color: #f7f9fd;
  border: 1px solid #979797;
  padding-inline: unset;
  height: 100px;
  padding: 12px 10px 0;
  width: 100%;
  box-shadow: rgb(0, 0, 0) 0px -1px 4px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  &.hideShadow {
    box-shadow: rgb(0, 0, 0) 0px -1px 2px 0px;
    border: unset;
  }

  .ant-btn {
    height: 45px;
    width: 45px;
    position: fixed;
    bottom: 50px;
    right: 25px;
    background-color: #4a475f;
    color: #ffffff;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;

    :hover {
      background-color: #3d3a4f;
      color: #ffffff;
      border: 1px solid #3d3a4f;
      outline: none;
    }
  }

  @media (min-width: 600px) {
    padding: 12px 25px 0;
    height: 124px;

    .ant-btn {
      position: absolute;
      top: 95px;
      right: 130px;
      height: 60px;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        height: 18px;
        width: 18px;
      }
    }
  }

  @media (min-width: 800px) {
    padding: 12px calc(50% - 400px) 0;
  }

  @media (min-width: 1024px) {
    .ant-btn {
      right: calc(50% - 390px);
    }
  }
`;
export const RowTwoStyle = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;

  h5 {
    margin: 0 0 12px;
    letter-spacing: 0.8px;
    line-height: 50%;
  }

  .ant-btn {
    z-index: 5;
  }
`;
