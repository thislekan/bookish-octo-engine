import styled from "styled-components";

export const AppDiv = styled.div`
  min-height: 100vh;

  &.new-background {
    background-color: #f7f9fd;
  }

  .container {
    padding: 115px 10px;
    max-width: 1024px;
  }

  @media (min-width: 600px) {
    .container {
      padding: 184px 25px;
    }
  }

  @media (min-width: 800px) {
    .container {
      padding: 184px 100px;
    }
  }

  @media (min-width: 1024px) {
    .container {
      padding: 184px calc(50% - 400px);
    }
  }
`;

export const StyledDeleteBtnDiv = styled.div`
  margin-top: 25px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
