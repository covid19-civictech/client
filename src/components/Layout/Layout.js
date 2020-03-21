// @flow
import React from 'react';
// import logo from '../../images/logo.svg';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const App = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
  }
`;

const Layout = props => {
  const { children } = props;

  return (
    <App>
      <Header />

      <main>{children}</main>

      <Footer />
    </App>
  );
};

export default Layout;
