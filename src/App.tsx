import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVis, setAlertVis] = useState(false);

  return (
    <div>
      {alertVis && (
        <Alert onClose={() => setAlertVis(false)}>Btn clicked</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVis(!alertVis)}>
        Click
      </Button>
    </div>
  );
}

export default App;
