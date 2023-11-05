import type { Meta, StoryObj } from "@storybook/vue3";
import TopazButton from "./TopazButton.vue";
import * as heroIcons from '@heroicons/vue/20/solid'

const meta: Meta<typeof TopazButton> = {
  component: TopazButton,
  tags: ["autodocs"],
  argTypes: {
    iconName: { control: "select", options: Object.keys(heroIcons) },
    size: { control: "select", options: ["small", "medium", "large"] },
    variant: {
      control: "select",
      options: ["accent", "primary", "secondary", "negative", "black", "white"],
    },
    treatment: { control: "select", options: ["fill", "outline"] }
  },
  args: {
    label: "Button",
    iconName: undefined,
    isIconAfterLabel: false,
    size: "medium",
    variant: "accent",
    treatment: "fill",
    isDisabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
