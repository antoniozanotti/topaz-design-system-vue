import { VariantEnum } from "./VariantEnum";

export interface TzTextareaInterface {
  rows?: number;
  variant?: keyof typeof VariantEnum;
  filled?: boolean;
}