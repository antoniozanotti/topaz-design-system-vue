import type { Meta, StoryObj } from "@storybook/vue3";
import TzIcon from "./TzIcon.vue";
import { VariantEnum } from "./VariantEnum";
import * as heroIcons from "@heroicons/vue/24/outline";

/**
 * The TzIcon component.
 */
const meta: Meta<typeof TzIcon> = {
  component: TzIcon,
  tags: ["autodocs"],
  argTypes: {
    iconName: { control: "select", options: ["", ...Object.keys(heroIcons)] },
    variant: {
      control: "select",
      options: ["", ...Object.keys(VariantEnum)],
    },
  },
  args: {
    iconName: "ArrowRightIcon",
    variant: "light",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const arrowRightIcon: Story = {
  name: "ArrowRightIcon, light",
};

export const moon: Story = {
  name: "MoonIcon, primary",
  args: {
    iconName: "MoonIcon",
    variant: "primary",
  },
};

export const sun: Story = {
  name: "SunIcon, secondary",
  args: {
    iconName: "SunIcon",
    variant: "secondary",
  },
};

export const heart: Story = {
  name: "HeartIcon, negative",
  args: {
    iconName: "HeartIcon",
    variant: "negative",
  },
};
