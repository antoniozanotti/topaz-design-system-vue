<script lang="ts" setup>
import { TzToggleThemeInterface } from "./TzToggleThemeInterface";
import TzIcon from "../TzIcon/TzIcon.vue";

withDefaults(defineProps<TzToggleThemeInterface>(), {});

const buttonBase = "rounded-full cursor-pointer relative flex justify-around";
const buttonBackground = "bg-secondary dark:bg-dark-secondary";
const buttonSize = "w-[104px] h-[38px] lg:w-[132px] lg:h-[48px]";

const spanBase = "block rounded-full absolute";
const spanAnimation = "transform duration-300";
const spanBackground = "bg-secondary-2 dark:bg-dark-secondary-2";
const spanSize = "w-[60px] h-[32px] lg:w-[77px] lg:h-[42px]";
const spanPosition = "self-center left-[40px] dark:left-[3px] lg:left-[52px]";
</script>

<template>
  <button
    :class="`${buttonBase} ${buttonBackground} ${buttonSize}`"
    aria-label="Toggle Theme"
  >
    <span
      :class="`${spanBase} ${spanAnimation} ${spanBackground} ${spanSize} ${spanPosition}`"
    />
    <TzIcon iconName="MoonIcon" variant="primary" class="place-self-center" />
    <TzIcon iconName="SunIcon" variant="primary" class="place-self-center" />
  </button>
</template>
