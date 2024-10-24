import { VariantEnum } from "./VariantEnum";

export interface TzTextareaInterface {
  variant?: keyof typeof VariantEnum;
  filled?: boolean;
}