import React from "react";
import "./App.css";
import ErrorBoundaries from "./components/ErrorBoundaries";
import AxiosProvider from "./context/axiosContext";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <AxiosProvider>
      <div className="App">
        <BrowserRouter>
          <ErrorBoundaries>
            <Routes />
          </ErrorBoundaries>
        </BrowserRouter>
      </div>
    </AxiosProvider>
  );
}

export default App;
