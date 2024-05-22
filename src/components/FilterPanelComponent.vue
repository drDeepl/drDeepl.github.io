<script setup>
import FilterCharacterDataModel from '@/models/data/FilterCharacterDataModel';
import { defineProps, onMounted, reactive, ref } from 'vue';

const data = reactive({});

const test = () => {
  console.log(data.value);
};
const { model, onApply } = defineProps({
  model: { type: FilterCharacterDataModel, required: true },
  onApply: {
    type: Function
  }
});

const isLoad = ref(true);

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
    <div v-for="label in model.labels" :key="label">
      <input type="text" :placeholder="label" v-model="data[label]" />
    </div>
    <p>{{ data.name }}{{ data.status }}</p>
    <button @click="test">отправить</button>
  </div>
</template>
