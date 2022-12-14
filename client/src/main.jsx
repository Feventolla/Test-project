import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "@rebass/preset";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
