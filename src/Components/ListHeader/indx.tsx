import React from "react";
import { Container } from "./styled";

interface Props {
  title: string;
}

const ListHeader = ({ title }: Props) => {
  return (
    <Container>
      <h3>{title}</h3>
    </Container>
  );
};

export default ListHeader;
