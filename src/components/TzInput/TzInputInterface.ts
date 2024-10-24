import { VariantEnum } from "./VariantEnum";

export interface TzInputInterface {
  variant?: keyof typeof VariantEnum;
  filled?: boolean;
}