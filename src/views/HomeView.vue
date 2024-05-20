<script setup>
import CharacterService from '@/services/character.service';

const characters = await CharacterService.getCharacters();
console.log(characters);
</script>

<template>
  <p>TODO: view characers</p>
</template>
