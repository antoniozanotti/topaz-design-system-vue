import type { Meta, StoryObj } from "@storybook/vue3";
import TzHeading from "./TzHeading.vue";

/**
 * The TzHeading component.
 */
const meta: Meta<typeof TzHeading> = {
  component: TzHeading,
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large", "x_large"],
    },
    variant: {
      control: "select",
      options: [
        "accent",
        "accent-1",
        "accent-2",
        "primary",
        "primary-1",
        "primary-2",
        "secondary",
        "secondary-1",
        "secondary-2",
        "negative",
        "negative-1",
        "negative-2",
        "dark",
        "dark-1",
        "dark-2",
        "light",
        "light-1",
        "light-2"
      ]
    },
    default: {
      control: 'text',
      description: 'Slot Content'
    }
  },
  args: {
    level: "h1",
    size: "x_large",
    variant: "accent",
    default: "Heading"
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const h1: Story = {
  name: "h1, x_large, accent"
};

export const h2: Story = {
  name: "h2, large, accent-1",
  args: {
    level: "h2",
    size: "large",
    variant: "accent-1"
  },
};

export const h3: Story = {
  name: "h3, medium, accent-2",
  args: {
    level: "h3",
    size: "medium",
    variant: "accent-2"
  },
};

export const h4: Story = {
  name: "h4, small, secondary",
  args: {
    level: "h4",
    size: "small",
    variant: "secondary"
  },
};

export const SmallMobile: Story = {
  name: "Small Mobile",
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  }
};

export const LargeMobile: Story = {
  name: "Large Mobile",
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  }
};

export const Tablet: Story = {
  name: "Tablet",
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  }
};

export const Desktop: Story = {
  name: "Desktop"
};