<script lang="ts" setup>
export interface TzHeadingProps {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "small" | "medium" | "large" | "x_large";
  variant?:
    | "accent"
    | "accent-1"
    | "accent-2"
    | "primary"
    | "primary-1"
    | "primary-2"
    | "secondary"
    | "secondary-1"
    | "secondary-2"
    | "negative"
    | "negative-1"
    | "negative-2"
    | "dark"
    | "dark-1"
    | "dark-2"
    | "light"
    | "light-1"
    | "light-2";
}

const props = withDefaults(defineProps<TzHeadingProps>(), {
  level: "h1",
  size: "small",
  variant: "accent",
});

const headingClasses = computed(() => {
  let classes = "";

  switch (props.size) {
    case "small":
      classes = "text-c5 md:text-c6 lg:text-c7 xl:text-c8";
      break;
    case "medium":
      classes = "text-c7 sm:text-c8 lg:text-c10";
      break;
    default:
      classes = "text-c9 sm:text-c10 lg:text-c11";
      break;
  }

  switch (props.variant) {
    case "accent":
      classes += " text-accent dark:text-dark-accent";
      break;
    case "accent-1":
      classes += " text-accent-1 dark:text-dark-accent-1";
      break;
    case "accent-2":
      classes += " text-accent-2 dark:text-dark-accent-2";
      break;
    case "primary":
      classes += " text-primary dark:text-dark-primary";
      break;
    case "primary-1":
      classes += " text-primary-1 dark:text-dark-primary-1";
      break;
    case "primary-2":
      classes += " text-primary-2 dark:text-dark-primary-2";
      break;
    case "secondary":
      classes += " text-secondary dark:text-dark-secondary";
      break;
    case "secondary-1":
      classes += " text-secondary-1 dark:text-dark-secondary-1";
      break;
    case "secondary-2":
      classes += " text-secondary-2 dark:text-dark-secondary-2";
      break;
    case "negative":
      classes += " text-negative dark:text-dark-negative";
      break;
    case "negative-1":
      classes += " text-negative-1 dark:text-dark-negative-1";
      break;
    case "negative-2":
      classes += " text-negative-2 dark:text-dark-negative-2";
      break;
    case "dark":
      classes += " text-dark dark:text-dark-dark";
      break;
    case "dark-1":
      classes += " text-dark-1 dark:text-dark-dark-1";
      break;
    case "dark-2":
      classes += " text-dark-2 dark:text-dark-dark-2";
      break;
    case "light":
      classes += " text-light dark:text-dark-light";
      break;
    case "light-1":
      classes += " text-light-1 dark:text-dark-light-1";
      break;
    case "light-2":
      classes += " text-light-2 dark:text-dark-light-2";
      break;
  }
  return classes;
});
</script>

<template>
  <component :is="level" :class="`${headingClasses}`">
    <slot />
  </component>
</template>
