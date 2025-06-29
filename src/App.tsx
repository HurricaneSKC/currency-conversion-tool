import CurrencySelector from "./components/CurrencySelector";
import "./App.css";
import { useState } from "react";

function App() {
  const [from, setFrom] = useState("USD");
  return (
    <div className="mx-4">
      <h1 className="py-10 text-4xl">Currency Conversion Tool</h1>
      <CurrencySelector
        options={[]}
        value={from}
        onChange={setFrom}
        label={"From"}
      />
    </div>
  );
}

export default App;
