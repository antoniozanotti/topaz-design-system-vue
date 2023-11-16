import type { Preview, VueRenderer } from "@storybook/vue3";
import { withThemeByClassName } from "@storybook/addon-themes";
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import topaz from "./topaz";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    theme: topaz,
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
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
