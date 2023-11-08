import { create } from '@storybook/theming/create';
import topazBrand from './topaz-brand.svg?url'

export default create({
  base: 'light',
  brandTitle: 'Topaz Design System Vue',
  brandUrl: 'https://topaz-vue.netlify.app',
  brandImage: topazBrand,
  brandTarget: '_self',
});