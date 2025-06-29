const CurrencySelector = () => {
  return (
    <>
      <label htmlFor="From" className="mx-2">
        From
      </label>
      <select
        id="From"
        onChange={() => {
          console.log("hello");
        }}
        aria-label=""
        className="select"
        defaultValue="Pick a currency"
      >
        <option disabled={true}>Pick a currency</option>
        <option>Pounds</option>
        <option>Dollars</option>
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
