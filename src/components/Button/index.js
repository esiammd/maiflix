import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--black);
  border: 1px solid var(--white);
  border-radius: 4px;
  padding: 16px 24px;

  color: var(--white);
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;

  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    border: none;
    border-radius: 0;
    background-color: var(--primary);

    color: var(--white);
    text-align: center;
  }
`;
