import {
  deleteWithToken,
  get,
  getWithToken,
  patchWithToken,
  postWithToken,
} from "@/lib/fetch";
import type { Category } from "./category";

export interface Article {
  id: string;
  year: number;
  title: string;
  summary: string;
  content: string;
  categories: Category[];
}

export interface AuthorArticle extends Article {
  published: boolean;
}

export type NewArticlePayload = Omit<AuthorArticle, "id" | "year">;

const articlesBase = "/api/articles";

export async function getArticles(
  filterType: "category",
  filterId: string
): Promise<Article[]>;

export async function getArticles(
  filterType: "year",
  filterId: number
): Promise<Article[]>;

export async function getArticles(): Promise<Article[]>;

export async function getArticles(
  filterType?: "category" | "year",
  filterId?: number | string
): Promise<Article[]> {
  if (filterType === undefined) return get(articlesBase);

  // SAFETY: If filterType is not undefined
  // than the filterId is also not undefined
  if (filterType === "category") {
    const categoryId = filterId as string;

    return get(`${articlesBase}?category=${categoryId}`);
  } else {
    const year = filterId as number;

    return get(`${articlesBase}?year=${year}`);
  }
}

export const getArticle = (id: string) => get<Article>(`${articlesBase}/${id}`);

const authorArticlesBase = "/api/author/articles";

export const getAuthorArticles = (token: string) =>
  getWithToken<AuthorArticle[]>(authorArticlesBase, token);

export const getAuthorArticle = (token: string, id: string) =>
  getWithToken<AuthorArticle>(`${authorArticlesBase}/${id}`, token);

export const publishArticle = (token: string, payload: NewArticlePayload) =>
  postWithToken(authorArticlesBase, token, payload);

export const updateArticle = (
  token: string,
  article: AuthorArticle
): Promise<unknown> => {
  // Year needs to be extracted otherwise it will be put into the db
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, year: _, ...payload } = article;

  return patchWithToken(`${authorArticlesBase}/${id}`, token, payload);
};

export const deleteArticle = (token: string, article: AuthorArticle) =>
  deleteWithToken(`${authorArticlesBase}/${article.id}`, token);
