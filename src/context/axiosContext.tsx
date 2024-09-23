import React, { PropsWithChildren } from "react";
import axiosInstance from "./axiosInstance";

export const AxiosContext = React.createContext(axiosInstance);

export default function AxiosProvider({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
}
