<script lang="ts">
export const TzIconVariants = [
  "accent",
  "inverse-accent",
  "primary",
  "inverse-primary",
  "secondary",
  "inverse-secondary",
  "negative",
  "inverse-negative",
  "dark",
  "inverse-dark",
  "light",
  "inverse-light",
] as const;
</script>

<script lang="ts" setup>
import * as heroIcons from "@heroicons/vue/24/outline";

export interface TzIconProps {
  iconName: keyof typeof heroIcons;
  variant?: (typeof TzIconVariants)[number];
}

const props = withDefaults(defineProps<TzIconProps>(), {
  variant: "accent",
});

// size
let sizeClasses =
  "w-[12px] h-[12px] sm:w-[16px] sm:h-[16px] lg:w-[20px] lg:h-[20px]";

// variants
const variantClasses = computed(() => {
  switch (props.variant) {
    case "accent":
      return "text-accent dark:text-dark-accent";
    case "inverse-accent":
      return "text-inverse-accent dark:text-inverse-dark-accent";
    case "primary":
      return "text-primary dark:text-dark-primary";
    case "inverse-primary":
      return "text-inverse-primary dark:text-inverse-dark-primary";
    case "secondary":
      return "text-secondary dark:text-dark-secondary";
    case "inverse-secondary":
      return "text-inverse-secondary dark:text-inverse-dark-secondary";
    case "negative":
      return "text-negative dark:text-dark-negative";
    case "inverse-negative":
      return "text-inverse-negative dark:text-inverse-dark-negative";
    case "dark":
      return "text-dark dark:text-dark-dark";
    case "inverse-dark":
      return "text-inverse-dark dark:text-inverse-dark-dark";
    case "light":
      return "text-light dark:text-dark-light";
    case "inverse-light":
      return "text-inverse-light dark:text-inverse-dark-light";
  }
});
</script>

<template>
  <component
    :is="heroIcons[iconName]"
    :class="`${sizeClasses} ${variantClasses}`"
  />
</template>
