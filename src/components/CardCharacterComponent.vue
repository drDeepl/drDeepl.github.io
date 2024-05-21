<script setup>
import { defineProps } from 'vue';
defineProps({
  characterInfo: {
    imgUrl: String,
    nameCharacter: String,
    statusCharacter: String,
    lastKnownLocation: String,
    firstSeenIn: String
  }
});
</script>

<template>
  <div class="character-card-container">
    <img class="image-character-card" :src="characterInfo.imgUrl" :alt="characterInfo.name" />
    <div class="info-character-wrapper">
      <div class="name-character">{{ characterInfo.nameCharacter }}</div>
      <div class="status-character">{{ characterInfo.statusCharacter }}</div>
      <div class="last-known-location">{{ characterInfo.lastKnownLocation }}</div>
      <div class="first-seen-in">{{ characterInfo.firstSeenIn }}</div>
    </div>
  </div>
</template>
