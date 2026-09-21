import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="danger" onClick={() => console.log("Clicked")}>
        Kira's Button
      </Button>
    </div>
  );
}

export default App;
