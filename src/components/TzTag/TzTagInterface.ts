import { VariantEnum } from "./VariantEnum";

export interface TzTagInterface {
  label?: string;
  variant?: keyof typeof VariantEnum;
  filled?: boolean;
  disabled?: boolean;
}