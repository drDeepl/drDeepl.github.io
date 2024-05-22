<script setup>
import { ref, defineProps } from 'vue';

const { options, hint, onSelectOption } = defineProps({
  options: { type: Array, default: [] },
  hint: { type: String, default: '' },
  onSelectOption: { type: Function }
});

const selectedOption = ref(hint);
const showDropdown = ref(false);

const onToggleDropdown = () => {
  console.log(hint);
  showDropdown.value = !showDropdown.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  showDropdown.value = false;
  onSelectOption(option);
};
</script>

<template>
  <div class="select-form form-field">
    <div class="selected-option" @click.prevent="onToggleDropdown">{{ selectedOption }}</div>
    <div class="dropdown" v-if="showDropdown">
      <div
        class="option"
        v-for="option in options"
        :key="option"
        @click.prevent="selectOption(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>
