<script lang="ts" setup>
import * as heroIcons from '@heroicons/vue/20/solid'
export type HeroIconName = keyof typeof heroIcons

interface TopazButtonProps {
  label?: string;
  iconName?: HeroIconName;
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
const classes = computed(() => ({
  // Default
  "rounded-md font-medium flex items-center": true,

  // Size
  "px-4 py-1 text-sm": props.size == "small",
  "px-6 py-2 text-base": props.size == "medium",
  "px-8 py-3 text-lg": props.size == "large",

  // Fill
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

  // Outline
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

  // Is Disabled
  "opacity-75": props.isDisabled,
}));

const iconClasses = computed(() => ({
  // Size
  "h-5 w-5": props.size == "small",
  "h-6 w-6": props.size == "medium",
  "h-7 w-7": props.size == "large",
}));
// BeakerIcon
// ArchiveBoxIcon
const iconName = computed(() =>
  props.iconName ? heroIcons[props.iconName] : ''
);
</script>

<template>
  <button :class="classes" :disabled="props.isDisabled">
    <component
      :is="iconName"
      :class="iconClasses"
      v-if="iconName && !props.isIconAfterLabel"
    />
    <span v-if="props.label">{{ label }}</span>
    <component
      :is="iconName"
      :class="iconClasses"
      v-if="iconName && props.isIconAfterLabel"
    />
  </button>
</template>
