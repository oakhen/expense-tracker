import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import ExenseContext from "./components/store/store.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ExenseContext>
      <App />
    </ExenseContext>
  </React.StrictMode>,
)
