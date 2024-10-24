<script lang="ts" setup>
import * as heroIcons from "@heroicons/vue/24/outline";
import { TzIconInterface } from "./TzIconInterface";

const props = withDefaults(defineProps<TzIconInterface>(), {
  variant: "accent",
});

// size
let sizeClasses = "w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]";

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
