import { useState } from "react";
import CurrencySelector from "./CurrencySelector";
import useCurrencies from "../../hooks/useCurrencies";

// https://api.currencybeacon.com/v1/latest?api_key=YOUR_API_KEY

const CurrencyConversionTool = () => {
  const { data: currencies } = useCurrencies();
  const currencyOptions = currencies?.map((currency) => ({
    id: currency.id,
    name: currency.name,
    code: currency.short_code,
  }));
  const [from, setFrom] = useState("GBP");
  const [to, setTo] = useState("GBP");

  console.log(from, to);

  return (
    <div>
      <h1 className="py-10 text-4xl">Currency Conversion Tool</h1>
      <div className="flex">
        <CurrencySelector
          options={currencyOptions || []}
          value={from}
          onChange={setFrom}
          label={"From"}
        />
        <CurrencySelector
          options={currencyOptions || []}
          value={to}
          onChange={setTo}
          label={"To"}
        />
      </div>
    </div>
  );
};

export default CurrencyConversionTool;
