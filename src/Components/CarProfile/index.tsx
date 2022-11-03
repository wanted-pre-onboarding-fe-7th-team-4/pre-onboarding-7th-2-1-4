import React from "react";
import { ImgContainer, Title } from "./styles";

interface Props {
  imageUrl: string;
  brand: string;
  name: string;
}

const CarProfile = ({ imageUrl, brand, name }: Props) => {
  return (
    <>
      <ImgContainer>
        <img src={imageUrl} alt={name} />
      </ImgContainer>
      <Title>
        <h3>{brand}</h3>
        <h1>{name}</h1>
      </Title>
    </>
  );
};

export default CarProfile;
