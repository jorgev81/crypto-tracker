
import { makeAutoObservable, runInAction } from 'mobx';

import axios from 'axios';
import { RateInfo } from '../models/RateInfo';
import { RatesResponse } from '../models/RatesResponse';

export interface CoinRate {
  symbol: string;
  rateInfo: RateInfo;
}

class RatesStore {
  rates: CoinRate[] = [];
  searchQuery: string = '';
  sortOption: string = 'symbol';
  loading: boolean = true;
  error: string = '';

  constructor() {
    makeAutoObservable(this);
    this.fetchRates();
  }

  fetchRates = async () => {
    try {
      const response = await axios.get<RatesResponse>(
        'https://app.youhodler.com/api/v3/rates/extended'
      );
      runInAction(() => {
        // Extract rates relative to USD
        const usdRates: CoinRate[] = [];

        for (const baseCurrency in response.data) {
          if (response.data[baseCurrency]['usd']) {
            usdRates.push({
              symbol: baseCurrency.toUpperCase(),
              rateInfo: response.data[baseCurrency]['usd'],
            });
          }
        }

        this.rates = usdRates;
        this.loading = false;
      });
    } catch (error: any) {
      runInAction(() => {
        this.error = error.message;
        this.loading = false;
      });
    }
  };

  setSearchQuery(query: string) {
    this.searchQuery = query;
  }

  setSortOption(option: string) {
    this.sortOption = option;
  }

  get filteredRates() {
    return this.rates.filter((coin) =>
      coin.symbol.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  get sortedRates() {
    const sorted = [...this.filteredRates];
    switch (this.sortOption) {
      case 'price':
        sorted.sort((a, b) => b.rateInfo.rate - a.rateInfo.rate);
        break;
      case 'change':
        sorted.sort((a, b) => b.rateInfo.diff24h - a.rateInfo.diff24h);
        break;
      case 'symbol':
      default:
        sorted.sort((a, b) => a.symbol.localeCompare(b.symbol));
        break;
    }
    return sorted;
  }
}

const ratesStore = new RatesStore();
export default ratesStore;
