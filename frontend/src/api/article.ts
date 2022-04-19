import type { Category } from "./category";

export interface Article {
  id: string;
  title: string;
  summary: string;
  categories: Category[];
}