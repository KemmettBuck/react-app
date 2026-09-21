import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert>ALERT</Alert>}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Kira's Button
      </Button>
    </div>
  );
}

export default App;
