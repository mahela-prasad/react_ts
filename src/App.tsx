import { useState } from "react";
import ListGroup from "./components/ListGroup/ListGroup";
import Like from "./components/Like";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
