import CollectionSummaryCard from "@/components/summary/collection/CollectionSummaryCard.vue";
import { createContainerDecorator } from "@/stories/decorators/containerDecorator";
import { mockCollection } from "../../../data/collection";

export default {
  component: CollectionSummaryCard,
};

const Template = (args) => ({
  components: { CollectionSummaryCard },
  setup() {
    return { args };
  },
  template: `<CollectionSummaryCard v-bind="args" />`,
});

export const Primary = Template.bind({});

Primary.decorators = [createContainerDecorator("sm")];
Primary.args = {
  collection: mockCollection,
};