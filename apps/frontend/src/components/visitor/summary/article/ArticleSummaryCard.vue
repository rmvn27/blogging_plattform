<script setup lang="ts">
import VColumn from "@blog/frontend/components/base/layout/VColumn.vue";
import VHeading from "@blog/frontend/components/base/text/VHeading.vue";
import VText from "@blog/frontend/components/base/text/VText.vue";
import type { Article } from "@blog/frontend/api/article";
import VCard from "@blog/frontend/components/base/layout/VCard.vue";
import VLink from "@blog/frontend/components/base/VLink.vue";
import { computed } from "@vue/reactivity";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";
import CategoryList from "@blog/frontend/components/visitor/util/CategoryList.vue";
import { contentColorConfig } from "@blog/frontend/config/content/color";
import { visitorRoutes } from "@blog/frontend/lib/router/visitor";

// Limitations for the article card
//
// An article should have at least one category and
// a bit of a summary. Otherwise the cards don't look that great

interface ArticleCategoryTagProps {
  article: Article;
}

const props = defineProps<ArticleCategoryTagProps>();

const articleDestination = computed(() =>
  visitorRoutes.article.createRoute(props.article),
);
</script>

<template>
  <VCard :padding="contentSpacingConfig.md">
    <VColumn :gap="contentSpacingConfig.sm" align="start">
      <VColumn :height="12" justify="center">
        <VLink :to="articleDestination" :color="contentColorConfig.fgWithHover">
          <VHeading is="h2" size="md" :max-lines="2">
            {{ article.title }}
          </VHeading>
        </VLink>
      </VColumn>

      <VColumn :height="12" justify="center">
        <VLink :to="articleDestination" :color="contentColorConfig.fgWithHover">
          <VText is="p" size="sm" :max-lines="2">
            {{ article.summary }}
          </VText>
        </VLink>
      </VColumn>

      <CategoryList
        :categories="article.categories"
        justify="end"
        width="full"
        :height="6"
      />
    </VColumn>
  </VCard>
</template>
