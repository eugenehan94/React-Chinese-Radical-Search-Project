import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import {store} from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline } from "@mui/material/";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
