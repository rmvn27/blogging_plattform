<script setup lang="ts">
import VColumn from "@blog/frontend/components/base/layout/VColumn.vue";
import VRow from "@blog/frontend/components/base/layout/VRow.vue";
import VContainer from "@blog/frontend/components/base/layout/VContainer.vue";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";
import { contentColorConfig } from "@blog/frontend/config/content/color";
import VBox from "@blog/frontend/components/base/layout/VBox.vue";
import ContentDivider from "@blog/frontend/components/common/util/ContentDivider.vue";
import PageFooterLink from "./PageFooterLink.vue";
import type { FooterLink } from "./footerLink";

interface PageFooterProps {
  links: FooterLink[];
}

defineProps<PageFooterProps>();
</script>

<template>
  <VBox width="full" :background-color="contentColorConfig.highlightedBg">
    <ContentDivider />

    <VContainer size="lg">
      <VColumn :height="12" align="start" justify="center">
        <VRow
          :gap="contentSpacingConfig.md"
          :padding="{ x: contentSpacingConfig.xs, y: 0 }"
        >
          <template v-for="link in links">
            <PageFooterLink
              v-if="link.onClick === undefined"
              :key="link.label"
              :name="link.label"
              :destination="link.destination"
              :is-external="link.isExternal"
            />
            <PageFooterLink
              v-else
              :key="link.label"
              :name="link.label"
              :destination="link.destination"
              :is-external="link.isExternal"
              @click="link.onClick"
            />
          </template>
        </VRow>
      </VColumn>
    </VContainer>
  </VBox>
</template>
