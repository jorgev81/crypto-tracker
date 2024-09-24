import { makeAutoObservable, runInAction } from 'mobx';
import { RatesResponse } from '../models/RatesResponse';
import { RateInfo } from '../models/RateInfo';
import axiosInstance from '../context/axiosInstance';

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
  viewType: 'table' | 'card' = 'table'; // Default to 'table'
  currentPage: number = 1;
  itemsPerPage: number = 20;

  constructor() {
    makeAutoObservable(this);

    const savedViewType = localStorage.getItem('viewType') as 'table' | 'card';
    if (savedViewType) {
      this.viewType = savedViewType;
    }

    this.fetchRates();
  }

  fetchRates = async () => {
    try {
      const response = await axiosInstance.get<RatesResponse>(
        'https://app.youhodler.com/api/v3/rates/extended'
      );
      runInAction(() => {
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

  setSearchQuery = (query: string) => {
    this.searchQuery = query;
    this.currentPage = 1; // Reset to first page when search query changes
  };

  setSortOption = (option: string) => {
    this.sortOption = option;
    this.currentPage = 1; // Reset to first page when sort option changes
  };

  setViewType = (view: 'table' | 'card') => {
    this.viewType = view;
    localStorage.setItem('viewType', view);
  };

  
  setCurrentPage = (page: number) => {
    this.currentPage = page;
  };

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

  get paginatedRates() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.sortedRates.slice(startIndex, endIndex);
  }
}

const ratesStore = new RatesStore();
export default ratesStore;
