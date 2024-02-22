import type { Preview, VueRenderer } from "@storybook/vue3";
import { withThemeByClassName, withThemeByDataAttribute } from "@storybook/addon-themes";
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import topaz from "./topaz";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    theme: topaz,
    controls: { expanded: true },
    backgrounds: {
      disable: true,
      default: "green",
      values: [
        { name: "orange", value: "#f97316" },
        { name: "green", value: "#a3e635" },
      ],
    },
  },
  decorators: [
    withThemeByClassName<VueRenderer>({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "dark",
    }),
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
      attributeName: 'data-mode',
    }),
  ],
};

export default preview;
