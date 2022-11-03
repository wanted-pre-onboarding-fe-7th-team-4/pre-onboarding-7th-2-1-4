import styled from "styled-components";
export const CategoryWrapper = styled.nav`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 6px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.color.black};
  overflow-x: auto;
  overflow-y: hidden;
`;
