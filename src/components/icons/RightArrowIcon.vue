<script setup>
import { defineProps } from 'vue';
defineProps({
  size: { type: String, required: false, default: '1.5em' },
  color: { type: String, required: false, default: 'black' },
  fill: { type: String, required: false, default: 'none' }
});
</script>
<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 10 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.903137 17.0866C4.41312 14.2108 6.167 12.4573 8.90314 9.08658C6.167 5.71585 4.41312 3.96233 0.903138 1.08655"
      :stroke="color"
      stroke-width="1.71415"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
