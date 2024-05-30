import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import "./index.css";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persister } from "Store";

// if (process.env.REACT_APP_ENVIRONMENT === Environment.prod) {
//   console.log = () => {};
// }

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Suspense fallback={<div className="preloader-container">loading</div>}>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <App />
      </PersistGate>
    </ReduxProvider>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
