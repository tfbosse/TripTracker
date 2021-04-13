import React from 'react';

import { Route } from 'react-router';

import { Home } from './components/General/Home';
import { Layout } from './components/General/Layout';

export const App = () => {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
    </Layout>
  );
}
