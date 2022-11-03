import styled, { css } from "styled-components";

export const TagWrapper = styled.button<{ selected: boolean }>`
  padding: 5px 17px;
  border-radius: 62px;
  border: none;
  font-family: "Inter";
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  flex-shrink: 0;
  cursor: pointer;

  ${({ selected }) =>
    selected
      ? css`
          color: #ffffff;
          background-color: var(--color-black);
        `
      : css`
          background-color: var(--color-gray);
        `}
`;
