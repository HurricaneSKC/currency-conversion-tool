import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useCurrencies = () => {
  const fetchCurrencies = () => {
    axios.get('https://api.currencybeacon.com/v1/currencies', {
        params: { api_key: import.meta.env.VITE_CURRENCY_BEACON_API }}
    ).then(
      result => result.data
    )
  }
  return useQuery({
    queryKey: ['currencies'],
    queryFn: fetchCurrencies
  })
}

export default useCurrencies
