import styled, { css } from "styled-components";

export const TagWrapper = styled.button<{ selected: boolean }>`
  padding: 5px 17px;
  border-radius: 62px;
  border: none;
  font-family: "Inter";
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 17px;
  flex-shrink: 0;
  cursor: pointer;

  ${({ selected, theme }) => css`
    background-color: ${selected ? theme.color.black : theme.color.gray};
    color: ${selected ? theme.color.white : theme.color.black};
  `}
`;
