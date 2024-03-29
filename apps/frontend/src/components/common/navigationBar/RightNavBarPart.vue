<script setup lang="ts">
import { Menu, X } from "lucide-vue-next";
import ThemeButton from "./ThemeButton.vue";
import { computed } from "vue";
import TextButton from "@blog/frontend/components/base/button/TextButton.vue";
import IconButton from "@blog/frontend/components/base/button/IconButton.vue";
import VRow from "@blog/frontend/components/base/layout/VRow.vue";
import type { NavigationDestination } from "./navDestination";
import VLink from "@blog/frontend/components/base/VLink.vue";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";

interface RightNavBarPartProps {
  menuExpanded: boolean;
  destinations: NavigationDestination[];
}

interface RightNavBarPartEmits {
  (e: "menuClick"): void;
}

const props = defineProps<RightNavBarPartProps>();
const emit = defineEmits<RightNavBarPartEmits>();

const menuIcon = computed(() => (props.menuExpanded ? X : Menu));

const textButtonHiddenProp = {
  sm: true,
  md: false,
};
</script>

<template>
  <VRow :gap="{ sm: contentSpacingConfig.xs, md: contentSpacingConfig.sm }">
    <VLink
      v-for="destination in destinations"
      :key="destination.label"
      :to="destination.to"
      :replace="destination.replace"
    >
      <TextButton :label="destination.label" :hidden="textButtonHiddenProp" />
    </VLink>

    <ThemeButton />
    <IconButton
      :icon="menuIcon"
      @click="emit('menuClick')"
      :hidden="{ sm: false, md: true }"
    />
  </VRow>
</template>
