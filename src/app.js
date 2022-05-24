import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

// // Import styles
// import "./assets/css/app.css";

// // Import icons
// import "material-icons/iconfont/material-icons.css";

// Import components
import Main from "./components/main.js";

//Variable global que almacena los elementos creados algo.
window.elements = [];
window.throwError = null;
function App() {
  return <Main />;
}

export default App;
