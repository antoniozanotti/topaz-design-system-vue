import type { Preview } from "@storybook/vue3";
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import topaz from './topaz';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    theme: topaz
  },
};

export default preview;
