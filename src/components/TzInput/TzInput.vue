<script lang="ts" setup>
import { computed } from "vue";
import { TzInputInterface } from "./TzInputInterface";
import { useVariantClasses, useFocusClasses } from "../TzStyles/TzStyles.vue";
import { VariantEnum } from "./VariantEnum";

const props = withDefaults(defineProps<TzInputInterface>(), {
  variant: VariantEnum.accent,
  filled: true,
});

const baseStyles = "rounded";
const focusStyles = useFocusClasses();
const sizeStyles =
  "h-[28px] sm:h-[38px] lg:h-[48px] px-[10px] sm:px-[14px] lg:px-[20px]";
const variantStyles = computed(() => {
  return useVariantClasses(props.variant, props.filled);
});
</script>

<template>
  <input
    :class="`${baseStyles} ${focusStyles} ${sizeStyles} ${variantStyles}`"
  />
</template>
