import { defineConfig, presetAttributify, presetWind } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
  shortcuts: {
    /*------------------
      TYPOGRAPHY
    ------------------*/

    // Small
    'text-xs': 'text-xs tracking-wider',
    'text-xs-bold': 'text-xs font-semibold',
    'text-xs-stamp': 'text-xs-bold uppercase',
    'text-sm': 'text-sm tracking-wide',
    'text-sm-bold': 'text-sm font-semibold',

    // Base & Large
    'text-base-bold': 'text-base font-semibold',
    'text-lg-bold': 'text-lg font-semibold',

    // X-Large
    'text-xl-bold': 'text-xl font-semibold',
    'text-2xl-bold': 'text-2xl font-semibold',
    'text-3xl-bold': 'text-3xl font-bold',
    'text-4xl-bold': 'text-4xl font-bold',
    'text-5xl-bold': 'text-5xl font-bold',
    'text-6xl': 'text-6xl tracking-tight',
    'text-6xl-bold': 'text-6xl font-bold',
    'text-7xl': 'text-7xl tracking-tight',
    'text-7xl-bold': 'text-7xl font-bold',

    /*------------------
      COLORS
    ------------------*/

    // Text
    'cl-text-primary': 'text-neutral-900',
    'cl-text-base': 'text-neutral-700',
    'cl-text-secondary': 'text-neutral-500',
    'cl-text-tertiary': 'text-neutral-400',
    'cl-text-inactive': 'text-neutral-300',
    'cl-text-inverse-primary': 'text-white',

    // Background
    'cl-bg-primary': 'bg-white',
    'cl-bg-secondary': 'bg-neutral-50',
    'cl-bg-tertiary': 'bg-neutral-400',
    'cl-bg-quaternary': 'bg-neutral-300',

    // Border
    'cl-border-primary': 'border-neutral-200',
    'cl-border-selected': 'border-neutral-900',

    // Status
    'cl-text-status-red': 'text-rose-500',
    'cl-text-status-blue': 'text-blue-500',
    'cl-text-green-blue': 'text-emerald-500',
    'cl-text-amber-blue': 'text-amber-400'
  },
  theme: {
    colors: {
      orange: {
        //Extend primitives with custom orange
        250: '#FFB057'
      }
    },
    fontSize: {
      //New primitives with tighter line-height
      xl: ['1.25rem', '1.5rem'],
      '2xl': ['1.5rem', '1.75rem']
    }
  },
  presets: [
    presetWind(),
    presetAttributify({
      prefix: '-',
      prefixedOnly: false
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        inter: [
          {
            name: 'Inter',
            weights: [400, 600, 700],
            italic: true
          }
        ]
      }
    })
  ]
})
