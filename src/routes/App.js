import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; //este encapsula todos los elementos para poder trabajar con la navegación
import Home from '../containers/Home';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import ErrorNotFound from '../containers/ErrorNotFound';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route component={ErrorNotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
); //Return implicito

export default App;
