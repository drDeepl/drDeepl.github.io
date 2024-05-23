<script setup>
import FilterCharacterDataModel from '@/models/data/FilterCharacterDataModel';
import { defineProps, defineModel, onMounted, reactive, ref } from 'vue';
import SelectFieldComponent from '@/components/SelectFieldComponent.vue';

const data = defineModel({});

const { model, onApply } = defineProps({
  model: { type: FilterCharacterDataModel, required: true },
  onApply: {
    type: Function
  }
});

const isLoad = ref(true);

const onSelectOption = (option) => {
  console.warn('ON SELECT OPTION');
  data.value.status = option;
};

onMounted(() => {
  console.warn('ON MOUNTED');
  console.log(model);
  data.value = model.data;
  console.log(data);
  isLoad.value = false;
});
</script>

<template>
  <div v-if="!isLoad" class="filter-panel-container">
    <input
      class="input-form form-field"
      type="text"
      :placeholder="model.labels.name"
      v-model="data.name"
    />
    <SelectFieldComponent
      :options="model.options"
      :hint="model.labels.status"
      :onSelectOption="onSelectOption"
    />
    <button :class="{ btn: true, 'btn-active': true }" @click="onApply">применить</button>
  </div>
</template>
