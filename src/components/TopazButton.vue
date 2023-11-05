<script lang="ts" setup>
import * as heroIcons from "@heroicons/vue/20/solid";

interface TopazButtonProps {
  label?: string;
  iconName?: string;
  isIconAfterLabel?: boolean;
  size?: "small" | "medium" | "large";
  variant?: "accent" | "primary" | "secondary" | "negative" | "black" | "white";
  style?: "fill" | "outline";
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<TopazButtonProps>(), {
  isIconAfterLabel: false,
  size: "medium",
  variant: "accent",
  style: "fill",
  isDisabled: false,
});

const iconName = computed(() =>
  props.iconName ? heroIcons[props.iconName] : ""
);

/* button style */
const classes = computed(() => ({
  // default
  "rounded-full font-medium flex justify-center items-center": true,

  // focus
  "focus:outline focus:outline-offset-2px focus:outline-2px": true,

  // size
  "text-sm   min-h-42px min-w-42px lg:text-xs   lg:min-h-34px lg:min-w-34px":
    props.size == "small",
  "text-base min-h-60px min-w-60px lg:text-sm   lg:min-h-48px lg:min-w-48px":
    props.size == "medium",
  "text-lg   min-h-72px min-w-72px lg:text-base lg:min-h-58px lg:min-w-58px":
    props.size == "large",

  // padding only with text
  "px-21px lg:px-17px": props.size == "small" && props.label != "",
  "px-30px lg:px-24px": props.size == "medium" && props.label != "",
  "px-36px lg:px-29px": props.size == "large" && props.label != "",

  // fill
  // fill -> accent
  "bg-accent hover:bg-accent-600 active:bg-accent-700 text-light focus:outline-accent":
    props.style == "fill" && props.variant == "accent",
  // fill -> primary
  "bg-primary hover:bg-primary-600 active:bg-primary-700 text-light focus:outline-primary":
    props.style == "fill" && props.variant == "primary",
  // fill -> secondary
  "bg-secondary hover:bg-secondary-600 active:bg-secondary-700 text-primary focus:outline-secondary":
    props.style == "fill" && props.variant == "secondary",
  // fill -> negative
  "bg-negative hover:bg-negative-600 active:bg-negative-700 text-light focus:outline-negative":
    props.style == "fill" && props.variant == "negative",
  // fill -> black
  "bg-dark hover:bg-dark-700 active:bg-dark-600 text-light focus:outline-dark":
    props.style == "fill" && props.variant == "black",
  // fill -> white
  "bg-light hover:bg-light-600 active:bg-light-700 text-dark focus:outline-light":
    props.style == "fill" && props.variant == "white",

  // outline
  "outline outline-1px": props.style == "outline",
  // outline -> accent
  "outline-accent hover:outline-accent-600 active:outline-accent-700 active: text-accent":
    props.style == "outline" && props.variant == "accent",
  // outline -> primary
  "outline-primary  hover:outline-primary-600 active:outline-primary-700 text-primary":
    props.style == "outline" && props.variant == "primary",
  // outline -> secondary
  "outline-secondary hover:outline-secondary-600 active:outline-secondary-700  text-primary":
    props.style == "outline" && props.variant == "secondary",
  // outline -> negative
  "outline-negative hover:outline-negative-600 active:outline-negative-700  text-negative":
    props.style == "outline" && props.variant == "negative",
  // outline -> black
  "outline-dark hover:outline-dark-700 active:outline-dark-600  text-dark":
    props.style == "outline" && props.variant == "black",
  // outline -> white
  "outline-light hover:outline-light-600 active:outline-light-700  text-light":
    props.style == "outline" && props.variant == "white",

  // is disabled
  "opacity-50 pointer-events-none": props.isDisabled,
}));

/* icon style */
const iconClasses = computed(() => ({
  // size
  "h-18px w-18px lg:h-14px lg:w-14px": props.size == "small",
  "h-30px w-30px lg:h-24px lg:w-24px": props.size == "medium",
  "h-36px w-36px lg:h-29px lg:w-29px": props.size == "large",
}));

/* label style */
const spanClasses = computed(() => ({
  // padding between icon and text
  "pl-7px": iconName.value != "" && !props.isIconAfterLabel,
  "pr-7px": iconName.value != "" && props.isIconAfterLabel,
}));
</script>

<template>
  <button :class="classes" :disabled="props.isDisabled">
    <component
      :is="iconName"
      :class="iconClasses"
      v-if="iconName && !props.isIconAfterLabel"
    />
    <span v-if="props.label" :class="spanClasses">{{ label }}</span>
    <component
      :is="iconName"
      :class="iconClasses"
      v-if="iconName && props.isIconAfterLabel"
    />
  </button>
</template>
