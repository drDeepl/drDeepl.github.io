<script setup>
import { ref } from 'vue';
import CharacterCardComponent from '@/components/CharacterCardComponent.vue';
import CharacterCardDataModel from '@/models/data/CharacterCardDataModel';
import CharacterService from '@/services/character.service';
import SettingIcon from '@/components/icons/SettingIcon.vue';
import IconButtonComponent from '@/components/IconButtonComponent.vue';
const { info, data } = await CharacterService.getCharacters();

const isLoad = ref(false);
const onClickFilter = () => {
  isLoad.value = !isLoad.value;
};
</script>

<template>
  <div class="characters-cards-container">
    <div class="header-characters-cards-container">
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
        :characterInfo="new CharacterCardDataModel(character)"
        :labels="CharacterCardDataModel.labels"
        :isLoad="isLoad"
      />
    </div>
  </div>
</template>
