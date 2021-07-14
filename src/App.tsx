import React from "react";

function App() {
  const BadComponent = () => {
    throw new Error("something went wrong");
  };
  return (
    <div className="App">
      hoge
      {/* <BadComponent /> */}
    </div>
  );
}

export default App;
