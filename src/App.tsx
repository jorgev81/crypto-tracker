import React from 'react';
import './App.css'
import ErrorBoundaries from './components/ErrorBoundaries';
import AxiosProvider from './context/axiosContext';
import { Router } from "react-router-dom";
import Routes from './routes';
import { history } from './helpers/common';

function App() {
 // if (!Object.prototype.hasOwnProperty.call(new class { x: unknown }(), 'x')) throw new Error('Transpiler is not configured correctly');

  return (
    <AxiosProvider>
      <div className="App">
        <Router history={history}>
          <ErrorBoundaries>
            <Routes />
          </ErrorBoundaries>
        </Router>
      </div>
    </AxiosProvider>
  )
}

export default App
