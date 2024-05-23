<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import CardCharacterDataModel from '@/models/data/CardCharacterDataModel';
import FilterCharacterDataModel from '@/models/data/FilterCharacterDataModel';
import CharacterService from '@/services/CharacterService';
import CharacterCardComponent from '@/components/CharacterCardComponent.vue';
import SettingIcon from '@/components/icons/SettingIcon.vue';
import IconButtonComponent from '@/components/IconButtonComponent.vue';
import FilterPanelComponent from '@/components/FilterPanelComponent.vue';

// const { info, data } = await CharacterService.getCharacters();
const isOpenFilterPanel = ref(true);
const isLoad = ref(true);

const characters = ref([]);
const info = reactive({});

const onClickFilter = () => {
  isLoad.value = !isLoad.value;
};

const onApplyFilter = async () => {
  console.warn('ON APPLY FILTER');

  isLoad.value = true;
};

const toLoad = (value) => {
  isLoad.value = value;
};

const onPage = async (url) => {
  toLoad(true);
  const { info, data } = await CharacterService.getPageByUrl(url);
  characters.value = data;
  toLoad(false);
};

onMounted(async () => {
  console.warn('ON MOUNTED');
  const responseResult = await CharacterService.getCharacters();
  characters.value = responseResult.data;
  info.value = responseResult.info;
  toLoad(false);
});

// const characters = computed(() => data);
</script>

<template>
  <div class="characters-cards-container">
    <div class="header-characters-cards-container">
      <FilterPanelComponent
        v-if="isOpenFilterPanel"
        :model="new FilterCharacterDataModel()"
        :onApply="onApplyFilter"
      />
      <IconButtonComponent @click="onClickFilter">
        <SettingIcon
          class="highlight-hover-icon rotate-animation-hover"
          :size="`2em`"
          :color="`white`"
        />
      </IconButtonComponent>
    </div>
    <div v-if="isLoad" class="wrapper-characters-cards-container">
      <div
        v-for="card in Array(5).keys()"
        :key="card"
        class="card-shimmer-animation character-card-container"
      ></div>
    </div>
    <div v-else class="wrapper-characters-cards-container">
      <CharacterCardComponent
        v-for="character in characters"
        :key="character.id"
        :characterInfo="new CardCharacterDataModel(character)"
        :labels="CardCharacterDataModel.labels"
      />
    </div>
  </div>
</template>
