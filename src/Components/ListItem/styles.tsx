import styled from "styled-components";

export const Container = styled.div`
  height: 48px;
  padding: 13px 21px 14px 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: ${({ theme }) => theme.fontSize.medium};
    line-height: 21px;
  }
  .name {
    font-weight: 700;
  }
  .value {
    font-weight: 400;
  }
`;
