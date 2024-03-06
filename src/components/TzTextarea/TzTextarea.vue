<script lang="ts" setup>
import { useVariantClasses, useFocusClasses } from "../TzStyles/TzStyles.vue";

export interface TzTextareaProps {
  rows?: number;
  variant?: "accent" | "primary" | "secondary" | "negative" | "dark" | "light";
  filled?: boolean;
}

const props = withDefaults(defineProps<TzTextareaProps>(), {
  rows: 7,
  variant: "accent",
  filled: true,
});

/* input classes */
let inputOtherClasses = "rounded";

// focus
let focusClasses = useFocusClasses();

// size
let sizeClasses =
  "h-[177px] px-[10px] sm:px-[14px] lg:px-[20px] py-[7px] sm:py-[10px] lg:py-[12px]";

// variants and filled
const variantClasses = computed(() => {
  return useVariantClasses(props.variant, props.filled);
});
</script>

<template>
  <textarea
    rows="rows"
    :class="`${inputOtherClasses} ${focusClasses} ${sizeClasses} ${variantClasses}`"
  />
</template>
