<script setup>
import { defineProps, ref } from 'vue';

defineProps({
  label: String,
  value: String,
  isLoad: { type: Boolean, required: false, default: false }
});
</script>

<template>
  <div :class="{ 'text-row-container': true, 'card-shimmer-animation': isLoad }">
    <p class="label-row-card">{{ label }}</p>
    <p class="value-row-card">{{ value }}</p>
  </div>
</template>
