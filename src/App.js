// @flow
import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import Layout from './components/Layout';
import OverviewPage from './pages/overview/OverviewPage';

function App() {
  return (
    <Layout>
      {/* TODO: Replace with router */}
      <OverviewPage />
    </Layout>
  );
}

export default App;
