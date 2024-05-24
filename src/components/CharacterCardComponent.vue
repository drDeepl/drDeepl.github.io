<script setup>
import { defineProps, ref, onMounted } from 'vue';
import TextRowCardComponent from '@/components/TextRowCardComponent.vue';
import EpisodeService from '@/services/EpisodeService';
const { characterInfo } = defineProps({
  // characterInfo: { type: CharacterCardDataModel }
  characterInfo: {
    imgUrl: String,
    nameCharacter: String,
    statusCharacter: String,
    species: String,
    lastKnownLocation: String,
    firstSeenIn: String,
    episode: String
  },
  labels: { type: Object }
});

const isLoadFirstSeenIn = ref(true);

onMounted(async () => {
  console.warn('Character Card Component: Mounted');
  const episodeName = await EpisodeService.getEpisodeNameByUrl(characterInfo.firstSeenIn);
  console.log(episodeName);
  characterInfo.firstSeenIn = episodeName;

  isLoadFirstSeenIn.value = false;
});
</script>

<template>
  <div class="character-card-container">
    <img class="img-character-card" :src="characterInfo.imgUrl" :alt="characterInfo.name" />
    <div class="info-character-container">
      <h2 class="name-character">{{ characterInfo.nameCharacter }}</h2>
      <div class="subheader-card">
        <span :class="`indicator ${characterInfo.statusCharacter.toLowerCase()}-color`"></span>
        <span class="status-character">{{ characterInfo.statusCharacter }}</span>
        <span>-</span>
        <span class="species-character">{{ characterInfo.species }}</span>
      </div>
      <TextRowCardComponent
        :label="labels['lastKnownLocation']"
        :value="characterInfo['lastKnownLocation']"
      />
      <TextRowCardComponent
        :label="labels['firstSeenIn']"
        :value="characterInfo['firstSeenIn']"
        :isLoad="isLoadFirstSeenIn"
      />
      <!-- <TextRowCardComponent
        v-for="value in ['lastKnownLocation', 'firstSeenIn']"
        :key="value"
        :label="labels[value]"
        :value="characterInfo[value]"
      /> -->

      <!-- <main>
        <span class="last-known-location">{{ characterInfo.lastKnownLocation }}</span>
      </main>
      <footer>
        <span class="first-seen-in">{{ characterInfo.firstSeenIn }}</span>
      </footer> -->
    </div>
  </div>
</template>
