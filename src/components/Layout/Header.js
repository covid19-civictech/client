// @flow
import React, { useState } from 'react';
import { Menu, Container } from 'semantic-ui-react';

import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 3rem 0;
`;

const Header = () => {
  const [activeItem, setActiveItem] = useState('home');
  const handleItemClick = item => {
    setActiveItem(item);
  };

  return (
    <StyledHeader>
      <Container>
        <Menu>
          <Menu.Item header>Project name</Menu.Item>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={handleItemClick}
          >
            Home
          </Menu.Item>
        </Menu>
      </Container>
    </StyledHeader>
  );
};

export default Header;
