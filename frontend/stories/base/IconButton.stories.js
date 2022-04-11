import IconButton from "../../src/components/base/IconButton.vue";
import { Menu } from "lucide-vue-next";

export default {
  component: IconButton,
};

const Template = (args) => ({
  components: { IconButton, Menu },
  setup() {
    return { args };
  },
  template: "<IconButton v-bind='args'/>",
});

export const Primary = Template.bind({});

Primary.args = {
  onClick: () => ({}),
  icon: Menu,
};
