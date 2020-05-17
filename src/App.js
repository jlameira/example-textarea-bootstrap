import React from "react";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalStyles from "./styles/global";
import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./routes";
// import Header from './components/Header';

import './config/ReactotronConfig';
import store from "./store";
import history from "./services/history";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
        {/* <Header /> */}
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
