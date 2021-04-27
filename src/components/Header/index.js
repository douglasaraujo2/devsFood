import React, { useState } from "react";

import { Container, Logo, SearchInput } from "./styles";

export default ({ search, onSearch }) => {
  const [isActive, setIsActive] = useState(!search ? false : true);

  return (
    <Container>
      <Logo src="/assets/logo.png" />
      <SearchInput
        type="text"
        active={isActive}
        value={search}
        placeholder="Digite um produto..."
        onChange={(e) => onSearch(e.target.value)}
        onFocus={() => setIsActive(true)}
        onBlur={() => {
          if (!search) setIsActive(false);
        }}
      />
    </Container>
  );
};
