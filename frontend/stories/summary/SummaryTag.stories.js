import SummaryTag from "@/components/summary/SummaryTag.vue";
import ProvideGlobals from "@/components/ProvideGlobals.vue";
import VRoot from "@/components/base/VRoot.vue";

export default {
  component: SummaryTag,
};

const Template = (args) => ({
  components: { SummaryTag, ProvideGlobals, VRoot },
  setup() {
    return { args };
  },
  template: `
    <ProvideGlobals>
      <VRoot>
        <SummaryTag v-bind="args" />
      </VRoot>
    </ProvideGlobals>
  `,
});

export const Primary = Template.bind({});

Primary.args = {
  category: {
    name: "Programming",
  },
};
