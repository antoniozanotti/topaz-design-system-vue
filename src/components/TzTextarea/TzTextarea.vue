<script lang="ts" setup>
import { computed } from "vue";
import { TzTextareaInterface } from "./TzTextareaInterface";
import { VariantEnum } from "./VariantEnum";
import { useVariantClasses, useFocusClasses } from "../TzStyles/TzStyles.vue";

const props = withDefaults(defineProps<TzTextareaInterface>(), {
  variant: VariantEnum.accent,
  filled: true,
});

const baseStyles = "rounded";
const focusStyles = useFocusClasses();
const sizeStyles =
  "h-[177px] px-[10px] sm:px-[14px] lg:px-[20px] py-[7px] sm:py-[10px] lg:py-[12px]";
const variantStyles = computed(() =>
  useVariantClasses(props.variant, props.filled)
);
</script>

<template>
  <textarea
    rows="rows"
    :class="`${baseStyles} ${focusStyles} ${sizeStyles} ${variantStyles}`"
  />
</template>
