<script setup>
import { ref, defineProps } from 'vue';

const { options, hint, onSelectOption, isLoad } = defineProps({
  options: { type: Array, default: [] },
  hint: { type: String, default: '' },
  onSelectOption: { type: Function },
  isLoad: { type: Boolean, required: false, default: false }
});

const selectedOption = ref(hint);
const showDropdown = ref(false);

const onToggleDropdown = () => {
  if (!isLoad.value) {
    showDropdown.value = !showDropdown.value;
  }
};

const selectOption = (option) => {
  selectedOption.value = option;
  showDropdown.value = false;
  onSelectOption(option);
};
</script>

<template>
  <div
    :class="{ 'select-form form-field': true, 'field-shimmer-animation': isLoad, cursor: !isLoad }"
  >
    <div class="selected-option" @click.prevent="onToggleDropdown">{{ selectedOption }}</div>
    <div class="dropdown" v-if="showDropdown">
      <div
        class="option"
        v-for="option in options"
        :key="option"
        @click.prevent="selectOption(option)"
      >
        <span>{{ option }}</span>
      </div>
    </div>
  </div>
</template>
