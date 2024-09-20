// hooks/useGetRates.ts
import { useState, useEffect } from 'react';
import { useAxios } from './useAxios';
import { RatesResponse } from '../models/RatesResponse';

export function useGetRates() {
  const axiosInstance = useAxios();
  const [data, setData] = useState<RatesResponse | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  console.log(data);

  useEffect(() => {
    let isMounted = true;

    axiosInstance
      .get<RatesResponse>('https://app.youhodler.com/api/v3/rates/extended')
      .then((response) => {
        if (isMounted) {
          console.log('API Response:', response.data);
          setData(response.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [axiosInstance]);

  return { data, error, loading };
}
