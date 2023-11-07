import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";
import * as heroIcons from '@heroicons/vue/20/solid'

/**
 * The button component has styles for hover, active and focus events, try it.
 */
const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    iconName: { control: "select", options: ["", ...Object.keys(heroIcons)] },
    size: { control: "select", options: ["small", "medium", "large"] },
    variant: {
      control: "select",
      options: ["accent", "primary", "secondary", "negative", "black", "white"],
    },
    style: { control: "select", options: ["fill", "outline"] }
  },
  args: {
    label: "Button",
    iconName: undefined,
    isIconAfterLabel: false,
    size: "medium",
    variant: "accent",
    style: "fill",
    isDisabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/*
label
icon
label and icon on the right
label and icon on the left
size small
size medium
size large
variant accent
variant primary
variant secondary
variant negative
variant black
variant white
style fill
style outline
disabled
dark mode
mobile
*/
