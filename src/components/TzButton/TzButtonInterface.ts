import * as heroIcons from "@heroicons/vue/20/solid";
import { VariantEnum } from './VariantEnum';

export interface TzButtonInterface {
  label?: string;
  iconName?: keyof typeof heroIcons;
  isIconAfterLabel?: boolean;
  variant?: keyof typeof VariantEnum;
  filled?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}