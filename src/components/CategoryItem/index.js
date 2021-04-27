import React from "react";
import { Container, CategoryImage } from "./styles";

export default ({ data, activeCategory, setActiveCategory }) => {
  return (
    <Container
      active={activeCategory}
      id={data.id}
      onClick={() => setActiveCategory(data.id)}
      data-tip={data.name}
      data-for="tip-top"
    >
      <CategoryImage src={data.image} />
    </Container>
  );
};
