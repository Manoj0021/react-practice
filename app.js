import React from "react";
import ReactDOM from "react-dom/client";

const title = (
  <h1 className="heading" tabIndex="5">
    This is created using jsx
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1>This is functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
