<script lang="ts" setup>
import * as heroIcons from "@heroicons/vue/20/solid";
type IconName = keyof typeof heroIcons;

const props = withDefaults(
  defineProps<{
    /**
     * The label of the button.
     */
    label?: string;
    /**
     * The icon of the button.
     */
    iconName?: IconName;
    /**
     * Is the icon after the label?
     */
    isIconAfterLabel?: boolean;
    /**
     * The size of the button.
     */
    size?: "small" | "medium" | "large";
    /**
     * The variant of the button.
     */
    variant?:
      | "accent"
      | "primary"
      | "secondary"
      | "negative"
      | "black"
      | "white";
    /**
     * The style of the button.
     */
    style?: "fill" | "outline";
    /**
     * Is the button disabled?
     */
    isDisabled?: boolean;
    /**
     * Is the button loading?
     */
    isLoading?: boolean;
  }>(),
  {
    isIconAfterLabel: false,
    size: "medium",
    variant: "accent",
    style: "fill",
    isDisabled: false,
    isLoading: false,
  }
);

const label = computed(() => {
  if(props.isLoading){
    return "loading";
  }
  return props.label ?? "";
})

const iconName = computed(() => {
  if (props.isLoading) {
    return heroIcons["ArrowPathIcon"];
  }
  return props.iconName ? heroIcons[props.iconName] : ""
});

const variantStyleMode = computed(() => {
  if (document.documentElement.classList.contains("dark")) {
    if (props.variant == "primary") {
      return "secondary";
    }
    if (props.variant == "secondary") {
      return "primary";
    }
    if (props.variant == "black") {
      return "white";
    }
    if (props.variant == "white") {
      return "black";
    }
  }
  return props.variant;
});

/* button classes */
const buttonClasses = computed(() => ({
  // default
  "rounded-full font-medium flex justify-center items-center": true,

  // focus
  "focus:outline focus:outline-offset-2 focus:outline-2": true,

  // size
  // size -> small
  "text-sm min-h-11 min-w-11 lg:text-xs lg:min-h-9 lg:min-w-9":
    props.size == "small",
  // size -> base
  "text-base min-h-12 min-w-12 lg:text-sm lg:min-h-10 lg:min-w-10":
    props.size == "medium",
  // size -> large
  "text-lg min-h-14 min-w-14 lg:text-base lg:min-h-11 lg:min-w-11":
    props.size == "large",

  // padding only with text
  "px-6 lg:px-4": props.size == "small" && props.label != "",
  "px-7 lg:px-5": props.size == "medium" && props.label != "",
  "px-8 lg:px-6": props.size == "large" && props.label != "",

  // fill
  // fill -> accent
  "bg-accent hover:bg-accent-600 active:bg-accent-700 text-light dark:text-dark focus:outline-accent":
    props.style == "fill" && variantStyleMode.value == "accent",
  // fill -> primary
  "bg-primary hover:bg-primary-600 active:bg-primary-700 text-light focus:outline-primary":
    props.style == "fill" && variantStyleMode.value == "primary",
  // fill -> secondary
  "bg-secondary hover:bg-secondary-600 active:bg-secondary-700 text-primary focus:outline-secondary":
    props.style == "fill" && variantStyleMode.value == "secondary",
  // fill -> negative
  "bg-negative hover:bg-negative-600 active:bg-negative-700 text-light dark:text-dark focus:outline-negative":
    props.style == "fill" && variantStyleMode.value == "negative",
  // fill -> black
  "bg-dark hover:bg-dark-700 active:bg-dark-600 text-light focus:outline-dark":
    props.style == "fill" && variantStyleMode.value == "black",
  // fill -> white
  "bg-light hover:bg-light-600 active:bg-light-700 text-dark focus:outline-light":
    props.style == "fill" && variantStyleMode.value == "white",

  // outline
  "outline outline-px": props.style == "outline",
  // outline -> accent
  "outline-accent hover:outline-accent-600 active:outline-accent-700 active: text-accent":
    props.style == "outline" && variantStyleMode.value == "accent",
  // outline -> primary
  "outline-primary hover:outline-primary-600 active:outline-primary-700 text-primary":
    props.style == "outline" && variantStyleMode.value == "primary",
  // outline -> secondary
  "outline-secondary hover:outline-secondary-600 active:outline-secondary-700 text-primary":
    props.style == "outline" && variantStyleMode.value == "secondary",
  // outline -> negative
  "outline-negative hover:outline-negative-600 active:outline-negative-700 text-negative":
    props.style == "outline" && variantStyleMode.value == "negative",
  // outline -> black
  "outline-dark hover:outline-dark-700 active:outline-dark-600 text-dark":
    props.style == "outline" && variantStyleMode.value == "black",
  // outline -> white
  "outline-light hover:outline-light-600 active:outline-light-700 text-light":
    props.style == "outline" && variantStyleMode.value == "white",

  // is disabled
  "opacity-50 pointer-events-none": props.isDisabled || props.isLoading,
}));

/* icon classes */
const iconClasses = computed(() => ({
  // size
  "h-6 w-6 lg:h-4 lg:w-4": props.size == "small",
  "h-7 w-7 lg:h-5 lg:w-5": props.size == "medium",
  "h-8 w-8 lg:h-6 lg:w-6": props.size == "large",

  // is loading
  "animate-spin": props.isLoading,
}));

/* label classes */
const labelClasses = computed(() => ({
  // padding between icon and text
  "pl-1.5": iconName.value != "" && !props.isIconAfterLabel,
  "pr-1.5": iconName.value != "" && props.isIconAfterLabel,
}));
</script>

<template>
  <button :class="buttonClasses" :disabled="props.isDisabled">
    <component
      :is="iconName"
      :class="iconClasses"
      v-if="iconName && !props.isIconAfterLabel"
    />
    <span v-if="props.label" :class="labelClasses">{{ label }}</span>
    <component
      :is="iconName"
      :class="iconClasses"
      v-if="iconName && props.isIconAfterLabel"
    />
  </button>
</template>
