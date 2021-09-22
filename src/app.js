import React from 'react';
import ToDo from './components/todo.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import SettingsForm from './context/settingsForm.js';
import './app.scss';
export default function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path='/'>
            <ToDo />
          </Route>
          <Route exact path='/settings'>
            <SettingsForm  />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
