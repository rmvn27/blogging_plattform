<script setup lang="ts">
import VCard from "@blog/frontend/components/base/layout/VCard.vue";
import {
  contentSpacingConfig,
  defaultContentSpacing,
} from "@blog/frontend/config/content/spacing";
import { globalContentConfig } from "@blog/frontend/config/content/global";
import VColumn from "@blog/frontend/components/base/layout/VColumn.vue";
import VHeading from "@blog/frontend/components/base/text/VHeading.vue";
import VRow from "@blog/frontend/components/base/layout/VRow.vue";
import TextButton from "@blog/frontend/components/base/button/TextButton.vue";
import type { Responsive } from "@blog/frontend/lib/responsive";
import type { Color } from "@blog/frontend/styling/color";
import {
  greenButtonBg,
  greenButtonFg,
  redButtonBg,
  redButtonFg,
} from "@blog/frontend/config/content/color";
import { computed } from "vue";

interface SimpleDialogLayoutProps {
  title: string;
  positiveButtonLabel: string;
  positiveButtonBg?: Responsive<Color>;
  positiveButtonFg?: Responsive<Color>;
}

interface SimpleDialogLayoutEmits {
  (e: "cancel"): void;
  (e: "confirm"): void;
}

const emit = defineEmits<SimpleDialogLayoutEmits>();

const props = defineProps<SimpleDialogLayoutProps>();
// Somehow 'withDefaults' couldn't infer the correct types for the colors
const positiveButtonBg = computed(() => props.positiveButtonBg ?? greenButtonBg);
const positiveButtonFg = computed(() => props.positiveButtonFg ?? greenButtonFg);
</script>

<template>
  <VCard
    :padding="contentSpacingConfig.md"
    :background-color="globalContentConfig.backgroundColor"
    :width="{ sm: 'sm', md: 'md' }"
  >
    <VColumn :gap="defaultContentSpacing" align="start">
      <VHeading size="lg" is="h2"> {{ title }} </VHeading>
      <slot />

      <VRow
        width="full"
        justify="end"
        :gap="{ sm: contentSpacingConfig.xs, md: contentSpacingConfig.sm }"
      >
        <TextButton
          label="Cancel"
          :color="redButtonFg"
          :background-color="redButtonBg"
          :show-border="false"
          @click="emit('cancel')"
        />
        <TextButton
          :label="positiveButtonLabel"
          :color="positiveButtonFg"
          :background-color="positiveButtonBg"
          :show-border="false"
          @click="emit('confirm')"
        />
      </VRow>
    </VColumn>
  </VCard>
</template>
