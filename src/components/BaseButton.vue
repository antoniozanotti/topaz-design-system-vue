<script lang="ts" setup>
import { cva, type VariantProps } from 'class-variance-authority'

const sizeClasses = {
  base: 'px-5 py-2',
  large: 'px-8 py-4',
  small: ''
}
const baseButton = cva('', {
  variants: {
    size: sizeClasses,
  }
})

type ButtonProps = VariantProps<typeof baseButton>

interface BaseButtonProps {
  /**
   * size of the button
   */
  size?: 'base' | 'large' | 'small'
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  size: 'base'
})
</script>

<template>
  <button :class="baseButton({ size })">
    Button
  </button>
</template>
