// @flow
import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

import styled from 'styled-components/macro';

const logoHackathon = require('../../images/logo-wirvsvirus.png');

const StyledFooter = styled.footer`
  margin: 3rem 0 0;
  padding: 3rem 0;
  background: lightgray;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Image src={logoHackathon} style={{ width: 250 }} />
            </Grid.Column>
            <Grid.Column />
            <Grid.Column />
          </Grid.Row>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
