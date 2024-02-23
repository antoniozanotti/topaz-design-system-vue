<script lang="ts" setup>
import TzIcon from "./TzIcon.vue";

export interface TzToggleThemeProps {}

const theme = ref(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : '');
function handleClick() {
  if (theme.value == 'dark') {
    document.documentElement.classList.remove('dark');
    theme.value = '';
  } else {
    document.documentElement.classList.add('dark');
    theme.value = 'dark';
  }
};

let buttonBackground = "bg-secondary dark:bg-dark-secondary";
let buttonSize =
  "w-[74px] h-[28px] sm:w-[104px] sm:h-[38px] lg:w-[132px] lg:h-[48px]";
let buttonOther = "rounded-full cursor-pointer relative flex justify-around";

let spanAnimation = "transform duration-300";
let spanBackground = "bg-secondary-2 dark:bg-dark-secondary-2";
let spanOther = "block rounded-full absolute";
let spanSize =
  "w-[38px] h-[22px] sm:w-[60px] sm:h-[32px] lg:w-[77px] lg:h-[42px]";
let spanPosition =
  "self-center left-[32px] dark:left-[3px] sm:left-[40px] lg:left-[52px]";
</script>

<template>
  <button @click="handleClick" :class="`${buttonBackground} ${buttonSize} ${buttonOther}`">
    <span
      :class="`${spanAnimation} ${spanBackground} ${spanOther} ${spanSize} ${spanPosition}`"
    />
    <TzIcon
      iconName="MoonIcon"
      variant="primary"
      class="place-self-center"
    />
    <TzIcon
      iconName="SunIcon"
      variant="primary"
      class="place-self-center"
    />
  </button>
</template>
