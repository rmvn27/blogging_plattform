<script setup lang="ts">
import VTableRow from "@blog/frontend/components/base/table/VTableRow.vue";
import VTableData from "@blog/frontend/components/base/table/VTableData.vue";
import { redButtonBg, redButtonFg } from "@blog/frontend/config/content/color";
import { contentSpacingConfig } from "@blog/frontend/config/content/spacing";
import VRow from "../../base/layout/VRow.vue";
import TagButton from "../../base/button/TagButton.vue";
import VTableTextEntry from "../../base/table/VTableTextEntry.vue";

interface RegisterCodesEntryProps {
  registerCode: string;
}

interface RegisterCodesEntryEmits {
  (e: "deleteCode", registerCode: string): void;
}

defineProps<RegisterCodesEntryProps>();
const emit = defineEmits<RegisterCodesEntryEmits>();
</script>
<template>
  <VTableRow>
    <VTableData>
      <VTableTextEntry :label="registerCode" />
    </VTableData>
    <VTableData>
      <VRow :gap="contentSpacingConfig.xs">
        <TagButton
          label="DELETE"
          :background-color="redButtonBg"
          :color="redButtonFg"
          :show-border="false"
          @click="emit('deleteCode', registerCode)"
        />
      </VRow>
    </VTableData>
  </VTableRow>
</template>
