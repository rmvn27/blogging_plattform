import { fetchArticle, type Article } from "@/api/article";
import type { Option } from "@/lib/types";
import { computed } from "@vue/reactivity";
import type { Ref } from "vue";
import { useRoute } from "vue-router";
import { useEndpoint } from "../useEndpoint";
import { usePageHead } from "../usePageHead";

export interface ArticlePageState {
  article: Ref<Option<Article>>;
}

export const useArticlePageState = (): ArticlePageState => {
  const route = useRoute();
  const articleFetcher = computed(() => {
    const articleId = route.params.id as string;

    return () => fetchArticle(articleId);
  });

  const article = useEndpoint(articleFetcher);
  const articleTitle = computed(() => article.value?.title ?? "");

  usePageHead(articleTitle);

  return {
    article,
  };
};
