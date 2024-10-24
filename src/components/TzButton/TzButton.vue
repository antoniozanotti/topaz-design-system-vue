<script lang="ts" setup>
import { useVariantClasses, useFocusClasses } from "../TzStyles/TzStyles.vue";
import TzIcon from "../TzIcon/TzIcon.vue";
import { VariantEnum } from "../TzIcon/VariantEnum";
import { TzButtonInterface } from "./TzButtonInterface";

const props = withDefaults(defineProps<TzButtonInterface>(), {
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
  let classes: keyof typeof VariantEnum = props.variant;
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
