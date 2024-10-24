<script lang="ts" setup>
import { computed } from "vue";
import { TzButtonInterface } from "./TzButtonInterface";
import { useVariantClasses, useFocusClasses } from "../TzStyles/TzStyles.vue";
import { VariantEnum as IconVariant } from "../TzIcon/VariantEnum";
import { VariantEnum } from "../TzIcon/VariantEnum";
import TzIcon from "../TzIcon/TzIcon.vue";

const props = withDefaults(defineProps<TzButtonInterface>(), {
  isIconAfterLabel: false,
  variant: VariantEnum.accent,
  filled: true,
  isLoading: false,
  disabled: false,
});

const baseStyles = "rounded-full font-medium";
const alignStyles = "flex gap-x-2 justify-center place-items-center";
const focusStyles = useFocusClasses();
const variantStyles = computed(() =>
  useVariantClasses(props.variant, props.filled)
);
const sizeStyles = computed(() => useSizeStyles(props.label));
const disabledStyles = computed(() =>
  useDisabledStyles(props.isLoading, props.disabled)
);
const iconVariant = computed(() => useIconVariant(props.variant, props.filled));
const iconBaseStyles = computed(() => {
  let classes = "";
  if (props.isIconAfterLabel) {
    classes += " order-last";
  }
  if (props.isLoading) {
    classes += " animate-spin";
  }
  return classes;
});
const label = computed(() => (props.isLoading ? "loading" : props.label));
const iconName = computed(() =>
  props.isLoading ? "ArrowPathIcon" : props.iconName
);

function useSizeStyles(label?: string) {
  let buttonSizeStyles = "h-[38px] lg:h-[48px] min-w-[38px] lg:min-w-[48px]";
  if (label) {
    buttonSizeStyles += " px-[27px] lg:px-[36px]";
  }
  return buttonSizeStyles;
}

function useDisabledStyles(isLoading?: boolean, disabled?: boolean) {
  return disabled || isLoading ? "opacity-50 pointer-events-none" : "";
}

function useIconVariant(variant?: keyof typeof VariantEnum, filled?: boolean) {
  if (!filled) {
    return variant;
  }
  switch (variant) {
    case VariantEnum.accent:
      return IconVariant["inverse-accent"];
    case VariantEnum.primary:
      return IconVariant["inverse-primary"];
    case VariantEnum.secondary:
      return IconVariant["inverse-secondary"];
    case VariantEnum.negative:
      return IconVariant["inverse-negative"];
    case VariantEnum.dark:
      return IconVariant["inverse-dark"];
    case VariantEnum.light:
      return IconVariant["inverse-light"];
  }
  return undefined;
}
</script>

<template>
  <button
    :class="`${baseStyles} ${alignStyles} ${focusStyles} ${variantStyles} ${sizeStyles} ${disabledStyles}`"
    :disabled="`${disabled || isLoading}`"
  >
    <TzIcon
      :iconName="iconName"
      :variant="iconVariant"
      :class="iconBaseStyles"
      v-if="iconName"
    />
    <span v-if="label">{{ label }}</span>
  </button>
</template>
