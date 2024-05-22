<script setup>
import { ref } from 'vue';
import CardCharacterDataModel from '@/models/data/CardCharacterDataModel';
import FilterCharacterDataModel from '@/models/data/FilterCharacterDataModel';
import CharacterService from '@/services/character.service';
import CharacterCardComponent from '@/components/CharacterCardComponent.vue';
import SettingIcon from '@/components/icons/SettingIcon.vue';
import IconButtonComponent from '@/components/IconButtonComponent.vue';
import FilterPanelComponent from '@/components/FilterPanelComponent.vue';

const { info, data } = await CharacterService.getCharacters();
const isOpenFilterPanel = ref(true);
const isLoad = ref(false);
const onClickFilter = () => {
  isLoad.value = !isLoad.value;
};
</script>

<template>
  <div class="characters-cards-container">
    <div class="header-characters-cards-container">
      <FilterPanelComponent v-if="isOpenFilterPanel" :model="new FilterCharacterDataModel()" />
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
