<script setup lang="ts">
import {
  createSystemPropsCss,
  systemProps,
} from "@blog/frontend/styling/props/systemProps";

const props = defineProps(systemProps);
</script>

<template>
  <component :is="is" :class="createSystemPropsCss(props)">
    <slot />
  </component>
</template>
