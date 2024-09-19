import React, { createContext, PropsWithChildren, useMemo } from "react";
import axios, { AxiosInstance } from "axios";

export const AxiosContext = createContext<AxiosInstance | null>(null);

export default function AxiosProvider({
  children,
}: PropsWithChildren<unknown>) {
  
  const axiosMemo = useMemo(() => {
    const axiosInstance = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
    });

    axiosInstance.interceptors.request.use((config) => {
      // Read token for anywhere, in this case directly from localStorage
     /*  const token = localStorage.getItem('authToken'); */
      /* if (token) {
        config.headers[BACKEND_REQUEST_ACCESS_TOKEN] = `${token}`;
      } */

      return config;
    },
    (error) => {
      return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response) {
          switch (error.response.status) {
            case 401:
              alert('Unauthorized access. Redirecting to login...');
              break;
            case 500:
              alert('Server error occurred');
              break;
            default:
              alert('An error occurred');
          }
        }
        return Promise.reject(error);
      }
    );
    
    return axiosInstance;
  }, []);

  return (
    <AxiosContext.Provider value={axiosMemo}>{children}</AxiosContext.Provider>
  );
}
