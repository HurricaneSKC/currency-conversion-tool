import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useConvertedAmount = (from: string, to: string, amount:number) => {
  const fetchConvertedCurrency = () => {
    return axios.get('https://api.currencybeacon.com/v1/convert', 
      {
        params: {
          from: from,
          to: to,
          amount: amount,
          api_key: import.meta.env.VITE_CURRENCY_BEACON_API
        }
      }
    ).then(
      result => result.data.value
    )
  }
  
  return useQuery<number>({
    queryKey: ['convert', from, to, amount],
    queryFn: fetchConvertedCurrency,
    enabled: !!from && !!to && !!amount
  })
}

export default useConvertedAmount
