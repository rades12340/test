import * as React from "react";
import C1 from "./components/C1";
import C2 from "./components/C2";
import C3 from "./components/C3";
import C4 from "./components/C4";
import C5 from "./components/C5";

function App() {
  const timeRange = "60";
  return (
    <div className="App">
      <C1 timeRange={timeRange} />
      <C2 timeRange={timeRange} />
      <C3 timeRange={timeRange} />
      <C4 timeRange={timeRange} />
      <C5 timeRange={timeRange} />
    </div>
  );
}

export default App;
