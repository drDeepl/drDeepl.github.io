<script setup>
import { ref, reactive, onMounted } from 'vue';
import CardCharacterDataModel from '@/models/data/CardCharacterDataModel';
import FilterCharacterDataModel from '@/models/data/FilterCharacterDataModel';
import CharacterService from '@/services/CharacterService';
import CharacterCardComponent from '@/components/CharacterCardComponent.vue';
import SettingIcon from '@/components/icons/SettingIcon.vue';
import IconButtonComponent from '@/components/IconButtonComponent.vue';
import FilterPanelComponent from '@/components/FilterPanelComponent.vue';

const { info, data } = await CharacterService.getCharacters();
const isOpenFilterPanel = ref(true);
const isLoad = ref(true);

const onClickFilter = () => {
  isLoad.value = !isLoad.value;
};

const onApplyFilter = () => {
  console.warn('ON APPLY FILTER');
  isLoad.value = true;
};

onMounted(async () => {
  console.warn('ON MOUNTED');

  isLoad.value = false;
});
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
    <div class="wrapper-characters-cards-container">
      <CharacterCardComponent
        v-for="character in data"
        :key="character.id"
        :characterInfo="new CardCharacterDataModel(character)"
        :labels="CardCharacterDataModel.labels"
        :isLoad="isLoad"
      />
    </div>
  </div>
</template>
