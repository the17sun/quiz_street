import ReactDOM from "react-dom/client";
// import Root from "./Root";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
// import { Provider as RootProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        {/* <RootProvider> */}
        <App />
        {/* </RootProvider> */}
    </BrowserRouter>
);
