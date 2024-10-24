import * as heroIcons from "@heroicons/vue/24/outline";
import { VariantEnum } from "./VariantEnum";

export interface TzIconInterface {
  iconName: keyof typeof heroIcons;
  variant?: keyof typeof VariantEnum;
}