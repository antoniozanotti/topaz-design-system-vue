<script lang="ts" setup>
import * as heroIcons from "@heroicons/vue/20/solid";

interface TopazButtonProps {
  label?: string;
  iconName?: string;
  isIconAfterLabel?: boolean;
  size?: "small" | "medium" | "large";
  variant?: "accent" | "primary" | "secondary" | "negative" | "black" | "white";
  treatment?: "fill" | "outline";
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<TopazButtonProps>(), {
  isIconAfterLabel: false,
  size: "medium",
  variant: "accent",
  treatment: "fill",
  isDisabled: false,
});

const iconName = computed(() =>
  props.iconName ? heroIcons[props.iconName] : ""
);

/* button style */
const classes = computed(() => ({
  // default
  "rounded-full font-medium flex justify-center items-center": true,

  // size
  "text-sm   min-h-42px min-w-42px lg:text-xs   lg:min-h-34px lg:min-w-34px": props.size == "small",
  "text-base min-h-60px min-w-60px lg:text-sm   lg:min-h-48px lg:min-w-48px": props.size == "medium",
  "text-lg   min-h-72px min-w-72px lg:text-base lg:min-h-58px lg:min-w-58px": props.size == "large",

  // padding only with text
  "px-42px": props.size == "small" && props.label != "",
  "px-60px": props.size == "medium" && props.label != "",
  "px-72px": props.size == "large" && props.label != "",

  // fill
  "bg-accent text-white":
    props.treatment == "fill" && props.variant == "accent",
  "bg-primary text-white":
    props.treatment == "fill" && props.variant == "primary",
  "bg-secondary text-primary":
    props.treatment == "fill" && props.variant == "secondary",
  "bg-negative text-white":
    props.treatment == "fill" && props.variant == "negative",
  "bg-black text-white": props.treatment == "fill" && props.variant == "black",
  "bg-white text-black": props.treatment == "fill" && props.variant == "white",

  // outline
  "outline outline-1": props.treatment == "outline",
  "outline-accent text-accent":
    props.treatment == "outline" && props.variant == "accent",
  "outline-primary text-primary":
    props.treatment == "outline" && props.variant == "primary",
  "outline-secondary text-primary":
    props.treatment == "outline" && props.variant == "secondary",
  "outline-negative text-negative":
    props.treatment == "outline" && props.variant == "negative",
  "outline-black text-black":
    props.treatment == "outline" && props.variant == "black",
  "outline-white text-white":
    props.treatment == "outline" && props.variant == "white",

  // is disabled
  "opacity-75": props.isDisabled,
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
