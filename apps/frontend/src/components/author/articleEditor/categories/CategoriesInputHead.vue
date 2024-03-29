<script setup lang="ts">
import TagButton from "@blog/frontend/components/base/button/TagButton.vue";
import type { AuthorCategory } from "@blog/frontend/api/category";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";
import { contentColorConfig } from "@blog/frontend/config/content/color";
import VRow from "../../../base/layout/VRow.vue";
import { ChevronDown, ChevronUp } from "lucide-vue-next";
import IconButton from "../../../base/button/IconButton.vue";
import { computed } from "vue";

interface CategoriesInputHeadProps {
  showListing: boolean;
  availableCategoriesSize: number;
  selectedCategories: AuthorCategory[];
}

interface CategoriesInputHeadEmits {
  (e: "update:showListing", newValue: boolean): void;
  (e: "removeCategory", category: AuthorCategory): void;
}

const props = defineProps<CategoriesInputHeadProps>();
const emit = defineEmits<CategoriesInputHeadEmits>();

const toggleIcon = computed(() => (props.showListing ? ChevronUp : ChevronDown));
</script>
<template>
  <VRow
    :show-border="true"
    border-radius="base"
    :border-color="contentColorConfig.border"
    :padding="{
      x: contentSpacingConfig.sm,
      y: contentSpacingConfig.xs,
    }"
    width="full"
    justify="space-between"
    @click="emit('update:showListing', !showListing)"
    :style="{ cursor: 'pointer' }"
  >
    <VRow :gap="contentSpacingConfig.xs">
      <TagButton
        v-for="category in selectedCategories"
        :key="category.id"
        :label="category.name"
        :size="{ sm: 'sm', md: 'md' }"
        @click.stop="emit('removeCategory', category)"
      />
    </VRow>

    <IconButton
      v-if="availableCategoriesSize !== 0"
      :show-border="false"
      :padding="{ sm: 0, md: 1 }"
      :icon="toggleIcon"
    />
  </VRow>
</template>
