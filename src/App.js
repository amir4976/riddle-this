import Riddels from "./Riddels";
import { useState } from "react";
function App() {
  let [test,SetTest]= useState(false);
  setTimeout(() => {
      SetTest(true)
  }, 2000);
  return (
    <div className="App">
        
        {!test&& <h1 style={{fontSize:"60px"}}> {'<?>'} </h1>}
      {test && <Riddels/>}
    </div>
  );
}

export default App;
