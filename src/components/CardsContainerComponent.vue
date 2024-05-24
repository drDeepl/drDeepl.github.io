<script setup>
import { ref, reactive, onMounted } from 'vue';
import CardCharacterDataModel from '@/models/data/CardCharacterDataModel';
import FilterCharacterDataModel from '@/models/data/FilterCharacterDataModel';
import CharacterService from '@/services/CharacterService';
import CharacterCardComponent from './CharacterCardComponent.vue';

import FilterPanelComponent from './FilterPanelComponent.vue';
import PaginationPanelComponent from './PaginationPanelComponent.vue';
import { defaultInfoPages } from '@/utils/constants';

const isOpenFilterPanel = ref(true);
const isLoad = ref(true);

const characters = ref([]);
const infoPages = reactive({ value: defaultInfoPages });
const currentPage = ref(1);

const onApplyFilter = async (filterData) => {
  setLoad(true);

  const { info, data } = await CharacterService.getCharactersByFilter(filterData);
  characters.value = data;
  infoPages.value = info;
  currentPage.value = 1;
  setLoad(false);
};

const setLoad = (value) => {
  isLoad.value = value;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const onPage = async (pageNumber) => {
  setLoad(true);
  const href = infoPages.value.next ? infoPages.value.next : infoPages.value.prev;
  const { info, data } = await CharacterService.getPageByNumber(pageNumber, href);
  characters.value = data;
  infoPages.value = info;
  currentPage.value = pageNumber;
  scrollToTop();
  setLoad(false);
};

onMounted(async () => {
  const responseResult = await CharacterService.getCharacters();
  characters.value = responseResult.data;
  infoPages.value = responseResult.info;

  setLoad(false);
});
</script>

<template>
  <div class="characters-cards-container">
    <div class="header-characters-cards-container">
      <FilterPanelComponent
        v-if="isOpenFilterPanel"
        :model="new FilterCharacterDataModel()"
        :onApply="onApplyFilter"
        :isLoad="isLoad"
      />
    </div>
    <div v-if="isLoad" class="wrapper-characters-cards-container">
      <div
        v-for="card in Array(5).keys()"
        :key="card"
        class="card-shimmer-animation character-card-container"
      ></div>
    </div>
    <div v-else>
      <div class="wrapper-characters-cards-container">
        <CharacterCardComponent
          v-for="character in characters"
          :key="character.id"
          :characterInfo="new CardCharacterDataModel(character)"
          :labels="CardCharacterDataModel.labels"
        />
      </div>
    </div>
    <PaginationPanelComponent
      :pages="infoPages.value.pages"
      :currentPage="currentPage"
      :onPageChange="onPage"
    ></PaginationPanelComponent>
  </div>
</template>
