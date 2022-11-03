import styled from "styled-components";

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.div`
  width: 100%;
  padding: 1rem;
  & > h3 {
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  & > h1 {
    font-size: ${({ theme }) => theme.fontSize.XLarge};
    font-weight: 700;
  }
`;
