import React from 'react';

import { Route } from 'react-router';

import { Home } from './components/Home';
import { Layout } from './components/Layout';

import './css/custom.css';

export const App = () => {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
    </Layout>
  );
}
