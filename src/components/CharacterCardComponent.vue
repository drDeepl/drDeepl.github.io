<script setup>
import { defineProps } from 'vue';
defineProps({
  characterInfo: {
    imgUrl: String,
    nameCharacter: String,
    statusCharacter: String,
    species: String,
    lastKnownLocation: String,
    firstSeenIn: String
  }
});
</script>

<template>
  <div class="character-card-container">
    <img class="img-character-card" :src="characterInfo.imgUrl" :alt="characterInfo.name" />
    <div class="info-character-container">
      <h2 class="name-character">{{ characterInfo.nameCharacter }}</h2>
      <div class="subheader-card">
        <span class="status-character">{{ characterInfo.statusCharacter }}</span>
        <span>-</span>
        <span class="species-character">{{ characterInfo.species }}</span>
      </div>
      <main>
        <span class="last-known-location">{{ characterInfo.lastKnownLocation }}</span>
      </main>
      <footer>
        <span class="first-seen-in">{{ characterInfo.firstSeenIn }}</span>
      </footer>
    </div>
  </div>
</template>
