import styled from "styled-components";

export const ContainerHome = styled.div`
  background-color: var(--grayDark);
  color: var(--white);
  flex: 1;
  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

export const ContainerBase = styled.div`
  background-color: var(--grayDark);
  color: var(--white);
  flex: 1;
  padding-top: 94px;
  padding-left: 5%;
  padding-right: 5%;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;
