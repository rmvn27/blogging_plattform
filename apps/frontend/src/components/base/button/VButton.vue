<script setup lang="ts">
import type { Color } from "@blog/frontend/styling/color";
import {
  systemProps,
  createSystemPropsCss,
} from "@blog/frontend/styling/props/systemProps";
import type { BorderRadius } from "@blog/frontend/styling/system";
import type { Responsive } from "@blog/frontend/lib/responsive";
import type { PropType } from "vue";
import { contentColorConfig } from "@blog/frontend/config/content/color";

const props = defineProps({
  ...systemProps,

  backgroundColor: {
    type: [Object, String] as PropType<Responsive<Color>>,
    default: () => contentColorConfig.bgWithHover,
  },

  color: {
    type: [Object, String] as PropType<Responsive<Color>>,
    default: () => contentColorConfig.buttonFg,
  },

  showBorder: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  borderRadius: {
    type: [Object, String] as PropType<Responsive<BorderRadius>>,
    default: "md",
  },
  borderColor: {
    type: [Object, String] as PropType<Responsive<Color>>,
    default: () => contentColorConfig.buttonBorder,
  },
} as const);
</script>

<template>
  <!-- Can't use VBox since 'is' doesn't work every time
  and reacts very weird to comments in the setup script
  -->
  <button :class="createSystemPropsCss(props)" type="button">
    <slot />
  </button>
</template>
