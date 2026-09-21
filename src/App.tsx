import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  useState(false);
  return (
    <div>
      <Alert>ALERT</Alert>
      <Button color="danger" onClick={() => console.log("Clicked")}>
        Kira's Button
      </Button>
    </div>
  );
}

export default App;
