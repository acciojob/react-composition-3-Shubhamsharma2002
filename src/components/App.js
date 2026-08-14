import React from "react";
import Tooltip from "./Tooltip";
import "./../styles/App.css";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <h2 className="tooltip-heading">Tooltip Example</h2>

      <Tooltip text="This is a tooltip">
        <h2>Hover over me to see another tooltip</h2>
      </Tooltip>

      <br />

      <Tooltip text="This is another tooltip">
        <p>Hover over this text to see the tooltip</p>
      </Tooltip>
    </div>
  );
};

export default App;