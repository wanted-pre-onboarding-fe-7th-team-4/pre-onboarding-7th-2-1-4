"use client";
import React from "react";
import { ImgContainer, Title } from "./styles";
import Image from "next/image";

interface Props {
  imageUrl: string;
  brand: string;
  name: string;
}

const CarProfile = ({ imageUrl, brand, name }: Props) => {
  return (
    <>
      <ImgContainer>
        {imageUrl && <Image src={imageUrl} alt={name} fill priority />}
      </ImgContainer>
      <Title>
        <h3>{brand}</h3>
        <h1>{name}</h1>
      </Title>
    </>
  );
};

export default CarProfile;
