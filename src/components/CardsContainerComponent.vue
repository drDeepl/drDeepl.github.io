<script setup>
import { defineProps } from 'vue';
import CardCharacterComponent from '@/components/CardCharacterComponent.vue';
import CharacterCardDataModel from '@/models/data/CharacterCardDataModel';
import CharacterService from '@/services/character.service';

const { info, data } = await CharacterService.getCharacters();
</script>

<template>
  <div class="characters-cards-container">
    <CardCharacterComponent
      v-for="character in data"
      :key="character.id"
      :characterInfo="new CharacterCardDataModel(character)"
    />
  </div>
</template>
