import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// Import Slice
import authReducer, { loadUser } from "./slices/auth";
import postReducer, { allBlogFetch } from "./slices/post";

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
});

store.dispatch(loadUser());
// store.dispatch(allBlogFetch());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Provider store={store}>
          <App />
        </Provider>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);
