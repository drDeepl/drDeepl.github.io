<script setup>
import FilterCharacterDataModel from '@/models/data/FilterCharacterDataModel';
import { defineProps, defineModel, onMounted, reactive, ref } from 'vue';
import SelectFieldComponent from './SelectFieldComponent.vue';
import SpinnerComponent from './SpinnerComponent.vue';
const { model, onApply, isLoad } = defineProps({
  model: { type: FilterCharacterDataModel, required: true },
  onApply: {
    type: Function
  },
  isLoad: { type: Boolean, required: false, default: false }
});

const data = reactive({ value: model.data });

const onSelectOption = (option) => {
  console.warn('ON SELECT OPTION');
  data.value.status = model.options[option];
};

const onApplyFilter = () => {
  onApply(data.value);
};

onMounted(() => {
  data.value = model.data;
});
</script>

<template>
  <div class="filter-panel-container">
    <input
      :class="{ 'input-form form-field': true, 'field-shimmer-animation': isLoad }"
      type="text"
      :placeholder="model.labels.name"
      v-model="data.value.name"
      :disabled="isLoad"
    />
    <SelectFieldComponent
      :options="Object.keys(model.options)"
      :hint="model.labels.status"
      :onSelectOption="onSelectOption"
      :isLoad="isLoad"
    />
    <button :class="{ btn: true, 'btn-active': true }" :disabled="isLoad" @click="onApplyFilter">
      применить
    </button>
  </div>
</template>
