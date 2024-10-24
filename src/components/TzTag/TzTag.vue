<script lang="ts" setup>
import { computed } from "vue";
import { TzTagInterface } from "./TzTagInterface";
import { useVariantClasses } from "../TzStyles/TzStyles.vue";

const props = withDefaults(defineProps<TzTagInterface>(), {
  variant: "accent",
  filled: true,
  disabled: false,
});

const baseStyles = "rounded font-medium px-2 py-1 text-c2";
const variantStyles = computed(() =>
  useVariantClasses(props.variant, props.filled)
);
const disabledStyles = computed(() => (props.disabled ? "opacity-50" : ""));
</script>

<template>
  <span :class="`${baseStyles} ${variantStyles} ${disabledStyles}`">
    {{ label }}
  </span>
</template>
