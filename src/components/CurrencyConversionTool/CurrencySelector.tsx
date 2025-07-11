interface CurrencyOptions {
  id: number;
  name: string;
  code: string;
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
    <div className="flex items-center">
      <label htmlFor={label} className="mx-2 w-12">
        {label}
      </label>
      <select
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={`Select ${label.toLowerCase()} currency`}
        className="select"
      >
        {options.map(({ id, name, code }) => (
          <option key={id} value={code}>
            ({code}) {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
