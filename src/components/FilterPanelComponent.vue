<script setup>
import FilterCharacterDataModel from '@/models/data/FilterCharacterDataModel';
import { defineProps, defineModel, onMounted, reactive, ref } from 'vue';
import SelectFieldComponent from './SelectFieldComponent.vue';
// import SpinnerComponent from './SpinnerComponent.vue';
const { model, onApply, isLoad } = defineProps({
  model: { type: FilterCharacterDataModel, required: true },
  onApply: {
    type: Function
  },
  isLoad: { type: Boolean, required: false, default: false }
});

// const data = ref({ value: model.data });

const nameCharacter = defineModel('');
const status = ref('');
const onSelectOption = (option) => {
  console.warn('ON SELECT OPTION');
  // data.value.status = model.options[option];
  status.value = model.options[option];
};

const onApplyFilter = async () => {
  console.log('onApply');
  await onApply({ name: nameCharacter.value, status: status.value });
};

onMounted(() => {
  nameCharacter.value = '';
});
</script>

<template>
  <div v-if="!isLoad.value" class="filter-panel-container">
    <input
      @keydown.enter="onApplyFilter"
      :class="{ 'input-form form-field': true, 'field-shimmer-animation': isLoad }"
      type="text"
      :placeholder="model.labels.name"
      v-model="nameCharacter"
      :disabled="isLoad"
    />
    <SelectFieldComponent
      :options="Object.keys(model.options)"
      :hint="model.labels.status"
      :onSelectOption="onSelectOption"
      :isLoad="isLoad"
    />
    <div @click.capture="onApplyFilter">
      <button class="btn" type="submit">применить</button>
    </div>
  </div>
</template>
