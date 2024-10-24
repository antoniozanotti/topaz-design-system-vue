<script lang="ts" setup>
import { useVariantClasses } from "../TzStyles/TzStyles.vue";
import { TzLabelInterface } from "./TzLabelInterface";

const props = withDefaults(defineProps<TzLabelInterface>(), {
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
