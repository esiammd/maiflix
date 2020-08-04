import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--grayDark);
  color: var(--white);
  flex: 1;
  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;
