import styled from "styled-components";

export const FilterSelectWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 25px;
  padding: 0 20px;
  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;
