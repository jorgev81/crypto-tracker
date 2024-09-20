import { RateInfo } from "./RateInfo";

export interface RatesResponse {
    [baseCurrency: string]: {
      [quoteCurrency: string]: RateInfo;
    };
  }