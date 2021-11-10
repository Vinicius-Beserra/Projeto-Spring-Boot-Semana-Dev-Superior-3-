import { seller } from "./seller";

export type sale = {
  id: number;
  visited: String;
  deals: number;
  amount: number;
  date: string;
  seller: seller;
};

export type SalePage = {
  content?: sale[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  size?: number;
  number: number;
  first: boolean;
  numberOfElements?: number;
  empty?: number;
};

export type SalesSum = {
  sellerName: string;
  sum: number;
};

export type SalesSucess = {
  sellerName: string;
  visited: number;
  deals: number;
};
