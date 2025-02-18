import type { Meta, StoryObj } from "@storybook/vue3";
import TzToggleTheme from "./TzToggleTheme.vue";

/**
 * The TzToggleTheme component.
 */
const meta: Meta<typeof TzToggleTheme> = {
  component: TzToggleTheme,
  tags: ["autodocs"],
  argTypes: {
    initialTheme: {
      control: "select",
      options: ["dark", ""],
    }
  },
  args: {
    initialTheme: "dark",
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialThemeDark: Story = {
  name: "Initial Theme: Dark",
  parameters: {
    themes: {
      themeOverride: 'dark'
    },
  },
};

export const InitialThemeLight: Story = {
  name: "Initial Theme: Light",
  args: {
    initialTheme: ""
  },
  parameters: {
    themes: {
      themeOverride: 'light'
    },
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