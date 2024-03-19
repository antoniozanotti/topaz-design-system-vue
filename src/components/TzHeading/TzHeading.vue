<script lang="ts">
export const TzHeadingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
export type TzHeadingLevel = (typeof TzHeadingLevels)[number];

export const TzHeadingSizes = ["small", "medium", "large", "x_large"] as const;
export type TzHeadingSize = (typeof TzHeadingSizes)[number];

export const TzHeadingVariants = [
  "accent",
  "accent-1",
  "accent-2",
  "primary",
  "primary-1",
  "primary-2",
  "secondary",
  "secondary-1",
  "secondary-2",
  "negative",
  "negative-1",
  "negative-2",
  "dark",
  "dark-1",
  "dark-2",
  "light",
  "light-1",
  "light-2",
] as const;
export type TzHeadingVariant = (typeof TzHeadingVariants)[number];
</script>

<script lang="ts" setup>
export interface TzHeadingProps {
  level?: TzHeadingLevel;
  size?: TzHeadingSize;
  variant?: TzHeadingVariant;
}

const props = withDefaults(defineProps<TzHeadingProps>(), {
  level: "h1",
  size: "small",
  variant: "accent",
});

const headingClasses = computed(() => {
  let headingClasses = 'leading-none';

  switch (props.size) {
    case "small":
      headingClasses += " text-c5 md:text-c6 lg:text-c7 xl:text-c8";
      break;
    case "medium":
      headingClasses += " text-c7 sm:text-c8 lg:text-c10";
      break;
    default:
      headingClasses += " text-c9 sm:text-c10 lg:text-c11";
      break;
  }

  switch (props.variant) {
    case "accent":
      headingClasses += " text-accent dark:text-dark-accent";
      break;
    case "accent-1":
      headingClasses += " text-accent-1 dark:text-dark-accent-1";
      break;
    case "accent-2":
      headingClasses += " text-accent-2 dark:text-dark-accent-2";
      break;
    case "primary":
      headingClasses += " text-primary dark:text-dark-primary";
      break;
    case "primary-1":
      headingClasses += " text-primary-1 dark:text-dark-primary-1";
      break;
    case "primary-2":
      headingClasses += " text-primary-2 dark:text-dark-primary-2";
      break;
    case "secondary":
      headingClasses += " text-secondary dark:text-dark-secondary";
      break;
    case "secondary-1":
      headingClasses += " text-secondary-1 dark:text-dark-secondary-1";
      break;
    case "secondary-2":
      headingClasses += " text-secondary-2 dark:text-dark-secondary-2";
      break;
    case "negative":
      headingClasses += " text-negative dark:text-dark-negative";
      break;
    case "negative-1":
      headingClasses += " text-negative-1 dark:text-dark-negative-1";
      break;
    case "negative-2":
      headingClasses += " text-negative-2 dark:text-dark-negative-2";
      break;
    case "dark":
      headingClasses += " text-dark dark:text-dark-dark";
      break;
    case "dark-1":
      headingClasses += " text-dark-1 dark:text-dark-dark-1";
      break;
    case "dark-2":
      headingClasses += " text-dark-2 dark:text-dark-dark-2";
      break;
    case "light":
      headingClasses += " text-light dark:text-dark-light";
      break;
    case "light-1":
      headingClasses += " text-light-1 dark:text-dark-light-1";
      break;
    case "light-2":
      headingClasses += " text-light-2 dark:text-dark-light-2";
      break;
  }
  return headingClasses;
});
</script>

<template>
  <component :is="level" :class="`${headingClasses}`">
    <slot />
  </component>
</template>
