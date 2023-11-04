import { defineConfig, presetWind } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
  ],
  shortcuts: {
    'component-height-100': 'h-8'
  },
  theme: {
    colors: {
      accent: '#22D3EE',
      primary: '#083344',
      secondary: '#94A3B8',
      negative: '#EF4444'
    }
  }
})