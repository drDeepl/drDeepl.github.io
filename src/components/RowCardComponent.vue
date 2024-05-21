<script setup>
import { defineProps } from 'vue';

defineProps({
  label: String,
  value: String
});
</script>

<template>
  <p class="label-row-card">{{ label }}</p>
  <p class="value-row-card">{{ value }}</p>
</template>
