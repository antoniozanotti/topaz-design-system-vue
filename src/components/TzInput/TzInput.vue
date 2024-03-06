<script lang="ts" setup>
import { useVariantClasses, useFocusClasses } from "../TzStyles/TzStyles.vue";

export interface TzInputProps {
  variant?: "accent" | "primary" | "secondary" | "negative" | "dark" | "light";
  filled?: boolean;
}

const props = withDefaults(defineProps<TzInputProps>(), {
  variant: "accent",
  filled: true,
});

/* input classes */
let inputOtherClasses = "rounded";

// focus
let focusClasses = useFocusClasses();

// size
let sizeClasses =
  "h-[28px] sm:h-[38px] lg:h-[48px] px-[10px] sm:px-[14px] lg:px-[20px]";

// variants and filled
const variantClasses = computed(() => {
  return useVariantClasses(props.variant, props.filled);
});
</script>

<template>
  <input
    :class="`${inputOtherClasses} ${focusClasses} ${sizeClasses} ${variantClasses}`"
  />
</template>
