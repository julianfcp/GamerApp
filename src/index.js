import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Redux SetUp
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

// So Thunk is because we use async functions (axios e.g)
const middleware = [thunk];

const store = createStore(
  rootReducer, // I use combine reducers to use multiple reducers
  composeWithDevTools(applyMiddleware(...middleware)) // I use compose to add devtools combined with thunk
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
