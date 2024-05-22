<script setup>
import { defineProps } from 'vue';

defineProps({
  label: String,
  value: String
});
</script>

<template>
  <div class="text-row-container">
    <p class="label-row-card">{{ label }}</p>
    <p class="value-row-card">{{ value }}</p>
  </div>
</template>
