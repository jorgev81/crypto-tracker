import { useContext } from 'react';
import { AxiosContext } from '../context/axiosContext';

export function useAxios() {
  const axiosInstance = useContext(AxiosContext);

  if (!axiosInstance) {
    throw new Error('Axios instance is null');
  }

  return axiosInstance;
}
