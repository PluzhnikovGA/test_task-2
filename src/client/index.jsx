import React from "react";
import { createRoot } from "react-dom/client";
import { AppComponent } from "../App";

window.addEventListener("load", () => {
  const root = createRoot(document.getElementById("react_root"));
  root.render(<AppComponent />);
})
