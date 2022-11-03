import React, { ReactNode } from "react";
import { Container } from "./styles";

interface Props {
  name?: string;
  value?: ReactNode;
}

const ListItem = ({ name = "", value = "" }: Props) => {
  return (
    <Container>
      <span className="name">{name}</span>
      <span className="value">{value}</span>
    </Container>
  );
};

export default ListItem;
