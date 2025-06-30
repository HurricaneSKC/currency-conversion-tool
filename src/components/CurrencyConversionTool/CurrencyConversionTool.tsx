import { useState, type ChangeEvent } from "react";
import CurrencySelector from "./CurrencySelector";
import useCurrencies from "../../hooks/useCurrencies";
import useConvertedAmount from "../../hooks/useConvertedAmount";

// https://api.currencybeacon.com/v1/latest?api_key=YOUR_API_KEY

const CurrencyConversionTool = () => {
  const [from, setFrom] = useState<string>("GBP");
  const [to, setTo] = useState<string>("USD");
  const [amount, setAmount] = useState<number>(1);

  const { data: currencies } = useCurrencies();
  const { data: convertedAmount } = useConvertedAmount(from, to, amount);

  const currencyOptions = currencies?.map((currency) => ({
    id: currency.id,
    name: currency.name,
    code: currency.short_code,
  }));

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setAmount(value);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="py-10 text-4xl">Currency Conversion Tool</h1>
        <div className="flex flex-col gap-2 mt-2">
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
          <div className="flex items-center">
            <label htmlFor="currency" className="w-12 mx-2">
              Input
            </label>
            <input
              id="currency"
              name="currency"
              type="number"
              value={amount}
              onChange={handleAmountChange}
              min="0"
              aria-label="Amount to convert"
              className="input"
            />
          </div>
        </div>
        <p className="text-2xl mt-4">
          Result: {convertedAmount?.toFixed(2)} {to}
        </p>
      </div>
    </div>
  );
};

export default CurrencyConversionTool;
