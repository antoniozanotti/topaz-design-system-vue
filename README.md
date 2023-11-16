# Welcome to Topaz for Vue Projects ;)

UI component library based on [tailwindcss](https://tailwindcss.com/), [UnoCSS](https://unocss.dev/), [heroicons](https://heroicons.com/). Topaz is a [MIT licensed](https://opensource.org/license/mit/) project that is developed and maintained by [Antônio Zanotti](https://www.linkedin.com/in/antoniozanotti/).

# Install Topaz Vue

```sh
npm install -D topaz-vue
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
    colors: {
      accent: {
        DEFAULT: "#22d3ee",
        600: "#06b6d4",
        700: "#0891b2",
      },
      primary: {
        DEFAULT: "#155e75",
        600: "#164e63",
        700: "#083344",
      },
      secondary: {
        DEFAULT: "#e2e8f0",
        600: "#cbd5e1",
        700: "#94a3b8",
      },
      negative: {
        DEFAULT: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
      },
      dark: {
        DEFAULT: "#000",
        600: "#1f2937",
        700: "#111827",
      },
      light: {
        DEFAULT: "#fff",
        600: "#f3f4f6",
        700: "#e5e7eb",
      },
    },
  },
});
```

### Design Point of View

The components was designed to work with these variants:

- "accent": color for greatest emphasis.
- "primary" color for medium emphasis.
- "secondary": color for lowest emphasis.
- "negative": color for emphasizing actions that can be destructive.
- "black": black on light theme, white on dark theme.
- "white": white on light theme, black on dark theme.

### Customization Tips

- "accent": use a vibrant colour.
- "primary": use a darker colour than accent variant.
- "secondary": use a lighter colour than accent variant.
- "negative", "black", "white": I don't recommend change them.

# Features

## Components
Visit the [official documentation](https://topaz-vue.netlify.app/) to see available components.

## Dark and Light Theme
It uses [class strategy](https://tailwindcss.com/docs/dark-mode) of [tailwindcss](https://tailwindcss.com/).

## Responsive
Some components on screens larger than or equal to 1024px will be 20% smaller than mobile version.

# Inpired In

- [Spectrum](https://spectrum.adobe.com/), Adobe’s design system
- [Vitamin](https://github.com/Decathlon/vitamin-web), Decathlon's design system
- [Vuetify](https://github.com/vuetifyjs/vuetify), Vue Component Framework
