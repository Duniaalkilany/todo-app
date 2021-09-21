import React from 'react';
import ToDo from './components/Todo.js';
import SettingsContext from './context/settings/context';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';

import './app.scss';

function App() {
    return (
      <>
         <SettingsContext>
          <Header />
          <ToDo />
        </SettingsContext>
      </>
    );
  }
  
export default App;