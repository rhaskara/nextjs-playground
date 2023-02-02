import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

export const StoryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 1rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px 0px ${(props) => props?.theme?.colors?.primary};
    transition: all 0.5s ease;
  };
`;

export const StoryCardLink = styled.a`
  text-decoration: none;
  color: inherit;
  width: 100%;
  max-width: 600px;
`;

export const StoryCardTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1rem;
  width: 100%;
  text-align: left;
  color: ${(props) => props?.theme?.colors?.primary};
`;

export const StoryCardSubtitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0.5rem;
  width: 100%;
  text-align: left;
  color: ${(props) => props?.theme?.colors?.secondary};
`;

export const SkeletonLine = styled.div`
  width: 80%;
  height: 1rem;
  margin: 1rem 0;
  background-color: ${(props) => props?.theme?.colors?.tertiary};
  animation: ${pulse} 1s ease-in-out infinite;
`;
