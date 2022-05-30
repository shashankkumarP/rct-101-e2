import React from "react";
import {Text,Image,Box,Stack,Heading,Tag,TagLabel} from "@chakra-ui/react"
const Product = ({l}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    
    <Stack data-cy="product" style={{display:"flex"}}>
      
      <Image data-cy="product-image" src={l.imageSrc} style={{width:"100px"}}/>
      <Text data-cy="product-category">{l.catogery}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{l.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{l.title}</Heading>
      <Box data-cy="product-price">{l.price}</Box>
    </Stack>
  );
};

export default Product;
