import { LevelEnum } from "./LevelEnum";
import { SizeEnum } from "./SizeEnum";
import { VariantEnum } from "./VariantEnum";

export interface TzHeadingInterface {
  level?: keyof typeof LevelEnum;
  size?: keyof typeof SizeEnum;
  variant?: keyof typeof VariantEnum;
}