import { useState } from "react";
import CurrencySelector from "./CurrencySelector";
import useCurrencies from "../../hooks/useCurrencies";

// https://api.currencybeacon.com/v1/latest?api_key=YOUR_API_KEY

const CurrencyConversionTool = () => {
  const { data } = useCurrencies();
  console.log(data);
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
