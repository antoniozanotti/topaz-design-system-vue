<script lang="ts">
export const TzLabelVariants = [
  "accent",
  "primary",
  "secondary",
  "negative",
  "dark",
  "light",
] as const;
export type TzLabelVariant = (typeof TzLabelVariants)[number];
</script>

<script lang="ts" setup>
import { useVariantClasses } from "../TzStyles/TzStyles.vue";

export interface TzLabelProps {
  label?: string;
  variant?: TzLabelVariant;
  filled?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<TzLabelProps>(), {
  variant: "accent",
  filled: true,
  disabled: false,
});

/* label classes */
let labelOtherClasses = "rounded font-medium px-2 py-1";

// variants and filled
const variantClasses = computed(() => {
  return useVariantClasses(props.variant, props.filled);
});

// is disabled
const labelDisabledClasses = computed(() => {
  return props.disabled ? "opacity-50" : "";
});
</script>

<template>
  <span
    :class="`${labelOtherClasses} ${variantClasses} ${labelDisabledClasses}`"
  >
    {{ label }}
  </span>
</template>
