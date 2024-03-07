<script lang="ts">
export const TzButtonVariants = [
  "accent",
  "primary",
  "secondary",
  "negative",
  "dark",
  "light",
] as const;
export type TzButtonVariant = (typeof TzButtonVariants)[number];
</script>

<script lang="ts" setup>
import * as heroIcons from "@heroicons/vue/20/solid";
import { useVariantClasses, useFocusClasses } from "../TzStyles/TzStyles.vue";
import TzIcon, { TzIconVariants } from "../TzIcon/TzIcon.vue";

export interface TzButtonProps {
  label?: string;
  iconName?: keyof typeof heroIcons;
  isIconAfterLabel?: boolean;
  variant?: TzButtonVariant;
  filled?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<TzButtonProps>(), {
  isIconAfterLabel: false,
  variant: "accent",
  filled: true,
  isLoading: false,
  disabled: false,
});

/* button classes */
let buttonOtherClasses =
  "rounded-full font-medium flex gap-x-2 justify-center place-items-center";

// focus
let focusClasses = useFocusClasses();

// size
const buttonSizeClasses = computed(() => {
  let classes = "h-[38px] lg:h-[48px] min-w-[38px] lg:min-w-[48px]";
  if (props.label) {
    classes += " px-[27px] lg:px-[36px]";
  }
  return classes;
});

// variants and filled
const variantClasses = computed(() => {
  return useVariantClasses(props.variant, props.filled);
});

// is disabled
const buttonDisabledClasses = computed(() => {
  return props.disabled || props.isLoading
    ? "opacity-50 pointer-events-none"
    : "";
});

/* icon classes */
const iconClasses = computed(() => {
  let classes = "";
  if (props.isIconAfterLabel) {
    classes += " order-last";
  }
  if (props.isLoading) {
    classes += " animate-spin";
  }
  return classes;
});

// label
const label = computed(() => {
  return props.isLoading ? "loading" : props.label;
});

// icon
const iconName = computed(() => {
  return props.isLoading ? "ArrowPathIcon" : props.iconName;
});

// icon variant
const iconVariant = computed(() => {
  let classes: (typeof TzIconVariants)[number] = props.variant;
  if (props.filled) {
    switch (props.variant) {
      case "accent":
        classes = "inverse-accent";
        break;
      case "primary":
        classes = "inverse-primary";
        break;
      case "secondary":
        classes = "inverse-secondary";
        break;
      case "negative":
        classes = "inverse-negative";
        break;
      case "dark":
        classes = "inverse-dark";
        break;
      case "light":
        classes = "inverse-light";
        break;
    }
  }
  return classes;
});
</script>

<template>
  <button
    :class="`${buttonOtherClasses} ${focusClasses} ${buttonSizeClasses} ${variantClasses} ${buttonDisabledClasses}`"
    :disabled="`${disabled || isLoading}`"
  >
    <TzIcon
      :iconName="iconName"
      :variant="iconVariant"
      :class="iconClasses"
      v-if="iconName"
    />
    <span v-if="label">{{ label }}</span>
  </button>
</template>
