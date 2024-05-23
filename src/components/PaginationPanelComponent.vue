<script setup>
import { defineProps, ref, watch, toRefs, defineModel } from 'vue';
import IconButtonComponent from './IconButtonComponent.vue';
import LeftArrowIcon from './icons/LeftArrowIcon.vue';
import RightArrowIcon from './icons/RightArrowIcon.vue';

const props = defineProps({
  pages: { type: Number, required: true },
  currentPage: { type: Number, required: true },
  onPageChange: { type: Function, required: true }
});
const { pages, currentPage } = toRefs(props);

const isValidNumberPage = ref(false);
const selectedPage = ref(parseInt(currentPage.value));

const onFocusPageNumberField = (event) => {
  event.target.select();
  isValidNumberPage.value = false;
};
const onNextPage = () => {
  selectedPage.value += 1;
  props.onPageChange(selectedPage.value);
};

const onPrevPage = () => {
  selectedPage.value -= 1;
  props.onPageChange(selectedPage.value);
};

watch(selectedPage, async (newPage, oldPage) => {
  isValidNumberPage.value = false;
  const pageNumber = parseInt(newPage);
  console.log(pageNumber);
  if (isNaN(pageNumber) || pageNumber < 0) {
    selectedPage.value = 1;
  } else if (pageNumber > Number(pages.value)) {
    selectedPage.value = pages.value;
  } else {
    isValidNumberPage.value = true;
  }
});
</script>

<template>
  <div class="pagination-panel-container">
    <button
      :class="{ btn: true, 'btn-hide': true, 'btn-active': isValidNumberPage }"
      @click.prevent="props.onPageChange(selectedPage)"
    >
      перейти
    </button>
    <div class="pages-container">
      <IconButtonComponent v-if="selectedPage > 1" @click="onPrevPage">
        <LeftArrowIcon color="white" />
      </IconButtonComponent>
      <input
        class="input-form input-page-form"
        type="text"
        inputmode="numeric"
        min="1"
        maxlength="2"
        v-model="selectedPage"
        @focus="onFocusPageNumberField"
      />
      <span class="paginaiton-delimiter">/</span>
      <input
        class="input-form input-page-form"
        disabled
        type="text"
        inputmode="numeric"
        min="1"
        :value="pages"
      />
      <IconButtonComponent v-if="selectedPage < pages" @click="onNextPage">
        <RightArrowIcon color="white" />
      </IconButtonComponent>
    </div>
  </div>
</template>
