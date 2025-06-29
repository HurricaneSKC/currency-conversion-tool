import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

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

export interface Currency {
  id: number;
  name: string;
  short_code: string;
  code: string;
  precision: number;
  subunit: number;
  symbol: string;
  symbol_first: boolean;
  decimal_mark: string;
  thousands_separator: string;
}

const useCurrencies = () => {
  const fetchCurrencies = (): Promise<Currency[]> => {
    return axios.get<{ [key: string]: Currency; }>('https://api.currencybeacon.com/v1/currencies', {
      params: { api_key: import.meta.env.VITE_CURRENCY_BEACON_API }
    })
      .then(
        result => Object.values(result.data)
      );
  }
  return useQuery<Currency[]>({
    queryKey: ['currencies'],
    queryFn: fetchCurrencies
  })
}

export default useCurrencies
