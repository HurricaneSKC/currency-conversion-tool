import { useState } from "react";
import CurrencySelector from "./CurrencySelector";

const CurrencyConversionTool = () => {
  const [from, setFrom] = useState("GBP");
  return (
    <div>
      <h1 className="py-10 text-4xl">Currency Conversion Tool</h1>
      <CurrencySelector
        options={[]}
        value={from}
        onChange={setFrom}
        label={"From"}
      />
    </div>
  );
};

export default CurrencyConversionTool;
