import React from 'react';

import { Switch, Redirect, Route } from 'react-router-dom';

import { About } from './components/General/About';
import { Home } from './components/General/Home';
import { Layout } from './components/General/Layout';
import { Reports } from './components/General/Reports';

export const App = () => {
  return (
    <Layout>
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route path='/about' component={About} />
        <Route path='/home' component={Home} />
        <Route path='/reports' component={Reports} />
      </Switch>
    </Layout>
  );
}
