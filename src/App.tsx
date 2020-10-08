import React from 'react';
import { Button, Navbar, NavbarGroup, NavbarHeading } from '@blueprintjs/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Details from './pages/details';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar
            fixedToTop
          >
            <NavbarGroup>
              <NavbarHeading>RF test</NavbarHeading>
            </NavbarGroup>
            <NavbarGroup align="right">
              <Button minimal icon="user" />
            </NavbarGroup>
          </Navbar>
          <Switch>
            <Route path="/:id">
              <Details />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
