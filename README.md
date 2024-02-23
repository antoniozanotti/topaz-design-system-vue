# Welcome to Topaz for Vue Projects ;)

UI component library based on [tailwindcss](https://tailwindcss.com/), [UnoCSS](https://unocss.dev/), [heroicons](https://heroicons.com/). Topaz is a [MIT licensed](https://opensource.org/license/mit/) project that is developed and maintained by [Antônio Zanotti](https://www.linkedin.com/in/antoniozanotti/).

# Install Topaz Vue

```sh
npm i -D topaz-vue
```

Install UnoCSS [(instructions here)](https://unocss.dev/integrations/vite)

Update the main.ts file:

```ts
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
```

Update the uno.config.ts file:

```ts
import { defineConfig } from "unocss";
import presetTopazVue from "topaz-vue/src/unocss-preset-topaz-vue";

export default defineConfig({
  presets: [presetTopazVue()],
  content: {
    filesystem: ["./node_modules/topaz-vue/**/*.vue"],
  },
});
```

That's all! Topaz's components can be imported in your .vue files.
```html
<script setup lang="ts">
  import {TzButton} from "topaz-vue";
</script>

<template>
  <TzButton label="Button" />
</template>
```
# UnoCSS Preset Topaz Vue

You can **customize colours**, just update the uno.config.ts file.

```ts
import { defineConfig } from "unocss";
import presetTopazVue from "topaz-vue/src/unocss-preset-topaz-vue";

export default defineConfig({
  presets: [presetTopazVue()],
  content: {
    filesystem: ["./node_modules/topaz-vue/**/*.vue"],
  },
  theme: {
    fontSize: {
      c1: "10px",
      c2: "12px",
      c3: "14px",
      c4: "16px",
      c5: "20px",
      c6: "24px",
      c7: "32px",
      c8: "36px",
      c9: "40px",
      c10: "48px",
      c11: "64px",
      c12: "96px",
    },
    colors: {
      accent: "#0891B2",
      "accent-1": "#06B6D4",
      "accent-2": "#22D3EE",
      "dark-accent": "#22D3EE",
      "dark-accent-1": "#06B6D4",
      "dark-accent-2": "#0891B2",
      primary: "#083344",
      "primary-1": "#164E63",
      "primary-2": "#155E75",
      "dark-primary": "#E2E8F0",
      "dark-primary-1": "#CBD5E1",
      "dark-primary-2": "#94A3B8",
      secondary: "#94A3B8",
      "secondary-1": "#CBD5E1",
      "secondary-2": "#E2E8F0",
      "dark-secondary": "#155E75",
      "dark-secondary-1": "#164E63",
      "dark-secondary-2": "#083344",
      negative: "#B91C1C",
      "negative-1": "#DC2626",
      "negative-2": "#EF4444",
      "dark-negative": "#EF4444",
      "dark-negative-1": "#DC2626",
      "dark-negative-2": "#B91C1C",
      dark: "#E5E7EB",
      "dark-1": "#F3F4F6",
      "dark-2": "#FFFFFF",
      "dark-dark": "#000000",
      "dark-dark-1": "#111827",
      "dark-dark-2": "#1F2937",
      light: "#000000",
      "light-1": "#111827",
      "light-2": "#1F2937",
      "dark-light": "#FFFFFF",
      "dark-light-1": "#F3F4F6",
      "dark-light-2": "#E5E7EB",
      "inverse-accent": "#000000",
      "inverse-dark-accent": "#000000",
      "inverse-primary": "#FFFFFF",
      "inverse-dark-primary": "#000000",
      "inverse-secondary": "#000000",
      "inverse-dark-secondary": "#FFFFFF",
      "inverse-negative": "#FFFFFF",
      "inverse-dark-negative": "#000000",
      "inverse-dark": "#000000",
      "inverse-dark-dark": "#FFFFFF",
      "inverse-light": "#FFFFFF",
      "inverse-dark-light": "#000000",
    },
  },
});
```

### Design Point of View

The components was designed to work with these variants:

- **accent**: color for greatest emphasis.
- **primary**: color for medium emphasis.
- **secondary**: color for lowest emphasis.
- **negative**: color for emphasizing actions that can be destructive.
- **black**: black on light theme, white on dark theme.
- **white**: white on light theme, black on dark theme.

### Customization Tips

If you want to change colors, I recommend:

- **accent**: use a vibrant colour.
- **primary**: use a darker colour than accent variant.
- **secondary**: use a lighter colour than accent variant.
- **negative**, "black", "white": I don't recommend change them.

# Features

- **Components**: visit the [official documentation](https://topaz-vue.netlify.app/) to see available components.
- **Dark and Light Theme**: it uses [class strategy](https://tailwindcss.com/docs/dark-mode) of [tailwindcss](https://tailwindcss.com/).
- **Responsive**: some components on screens larger than or equal to 1024px will be ~20% smaller than mobile version.

***The primary and secondary variations swap with each other. The black and white variations swap with each other.***

# Inpired In

- [Spectrum](https://spectrum.adobe.com/), Adobe’s design system
- [Vitamin](https://github.com/Decathlon/vitamin-web), Decathlon's design system
- [Vuetify](https://github.com/vuetifyjs/vuetify), Vue Component Framework

# License

MIT © [antoniozanotti](https://github.com/antoniozanotti)