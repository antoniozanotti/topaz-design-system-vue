import type { Meta, StoryObj } from "@storybook/vue3";
import TzHeading from "./TzHeading.vue";
import { LevelEnum } from "./LevelEnum";
import { SizeEnum } from "./SizeEnum";
import { VariantEnum } from "./VariantEnum";

/**
 * The TzHeading component.
 */
const meta: Meta<typeof TzHeading> = {
  component: TzHeading,
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: ["", ...Object.keys(LevelEnum)],
    },
    size: {
      control: "select",
      options: ["", ...Object.keys(SizeEnum)],
    },
    variant: {
      control: "select",
      options: ["", ...Object.keys(VariantEnum)],
    },
    default: {
      control: "text",
      description: "Slot Content",
    },
  },
  args: {
    level: "h1",
    size: "large",
    variant: "accent",
    default: "Heading",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const h1: Story = {
  name: "h1, large, accent",
};

export const h2: Story = {
  name: "h2, large, accent-1",
  args: {
    level: "h2",
    size: "large",
    variant: "accent-1",
  },
};

export const h3: Story = {
  name: "h3, medium, accent-2",
  args: {
    level: "h3",
    size: "medium",
    variant: "accent-2",
  },
};

export const h4: Story = {
  name: "h4, small, secondary",
  args: {
    level: "h4",
    size: "small",
    variant: "secondary",
  },
};

export const SmallMobile: Story = {
  name: "Small Mobile",
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const LargeMobile: Story = {
  name: "Large Mobile",
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};

export const Tablet: Story = {
  name: "Tablet",
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const Desktop: Story = {
  name: "Desktop",
};
