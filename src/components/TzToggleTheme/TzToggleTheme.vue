<script lang="ts" setup>
import TzIcon from "../TzIcon/TzIcon.vue";

export interface TzToggleThemeProps {}

const props = withDefaults(defineProps<TzToggleThemeProps>(), {});

let buttonBackground = "bg-secondary dark:bg-dark-secondary";
let buttonSize = "w-[104px] h-[38px] lg:w-[132px] lg:h-[48px]";
let buttonOther = "rounded-full cursor-pointer relative flex justify-around";

let spanAnimation = "transform duration-300";
let spanBackground = "bg-secondary-2 dark:bg-dark-secondary-2";
let spanOther = "block rounded-full absolute";
let spanSize = "w-[60px] h-[32px] lg:w-[77px] lg:h-[42px]";
let spanPosition = "self-center left-[40px] dark:left-[3px] lg:left-[52px]";
</script>

<template>
  <button :class="`${buttonBackground} ${buttonSize} ${buttonOther}`">
    <span
      :class="`${spanAnimation} ${spanBackground} ${spanOther} ${spanSize} ${spanPosition}`"
    />
    <TzIcon iconName="MoonIcon" variant="primary" class="place-self-center" />
    <TzIcon iconName="SunIcon" variant="primary" class="place-self-center" />
  </button>
</template>
