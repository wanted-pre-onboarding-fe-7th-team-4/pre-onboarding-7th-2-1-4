import styled from "styled-components";

export const CardItemListWrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 101px);

  .message {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    vertical-align: middle;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.medium};
    line-height: 21px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;
