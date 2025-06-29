interface CurrencyOptions {
  id: number;
  name: string;
}

interface CurrencySelectorProps {
  options: CurrencyOptions[];
  value: string;
  onChange: (value: string) => void;
  label: string;
}

const CurrencySelector = ({
  options,
  value,
  onChange,
  label,
}: CurrencySelectorProps) => {
  return (
    <>
      <label htmlFor={label} className="mx-2">
        {label}
      </label>
      <select
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={`Select ${label.toLowerCase()} currency`}
        className="select"
        defaultValue="Pick a currency"
      >
        {options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default CurrencySelector;

// sample model data

// "0": {
//     "id": 1,
//     "name": "UAE Dirham",
//     "short_code": "AED",
//     "code": "784",
//     "precision": 2,
//     "subunit": 100,
//     "symbol": "د.إ",
//     "symbol_first": true,
//     "decimal_mark": ".",
//     "thousands_separator": ","
// },
// "1": {
//     "id": 2,
//     "name": "Afghani",
//     "short_code": "AFN",
//     "code": "971",
//     "precision": 2,
//     "subunit": 100,
//     "symbol": "؋",
//     "symbol_first": false,
//     "decimal_mark": ".",
//     "thousands_separator": ","
// },
