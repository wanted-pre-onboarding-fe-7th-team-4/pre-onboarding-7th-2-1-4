import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  height: 60px;
  position: relative;
  align-items: center;
  border-bottom: 1px solid var(--color-black);

  button {
    width: 24px;
    height: 24px;
    text-align: center;
    position: absolute;
    left: 20px;
    top: 18px;
    border: 0;
    background-color: transparent;
  }

  h1 {
    flex: 1;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    color: var(--color-black);
  }
`;
