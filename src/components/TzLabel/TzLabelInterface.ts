import { VariantEnum } from "./VariantEnum";

export interface TzLabelInterface {
  label?: string;
  variant?: keyof typeof VariantEnum;
  filled?: boolean;
  disabled?: boolean;
}