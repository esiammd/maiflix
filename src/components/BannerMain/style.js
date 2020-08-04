import styled from "styled-components";

export const BannerMainContainer = styled.section`
  height: 80vh;
  position: relative;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }
  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }
  &:before {
    top: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &:after {
    bottom: 0;
    background-color: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;

export const ContentAreaContainer = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  display: inline-block;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;
  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;

ContentAreaContainer.Description = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const WatchButton = styled.button`
  cursor: pointer;
  padding: 16px 24px;
  outline: none;
  border: 0;
  border-radius: 4px;
  color: var(--black);
  background-color: var(--white);
  font-size: 16px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  margin: 0 auto;
  display: none;

  @media (max-width: 800px) {
    display: block;
  }
`;
