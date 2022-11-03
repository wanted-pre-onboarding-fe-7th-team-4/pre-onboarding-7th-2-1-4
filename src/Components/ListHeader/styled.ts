import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.color.blue};
  width: 100%;
  height: 48px;
  padding-left: 20px;

  h3 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.color.white};
    line-height: 48px;
  }
`;
