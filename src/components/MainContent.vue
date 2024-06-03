<template>
   <audio class="visually-hidden" type="audio/mpeg" ref="audioRef" />
   <main>
      <div class="cards-container">
         <CharacterCard v-for="character in 3" :key="character" @click="playAudio()" />
      </div>
      <!-- <v-pagination :length="totalPages" :total-visible="3" :start="calcStartPaginationNumber()" rounded="circle"
         active-color="grey-darken-4" :model-value="page" @update:modelValue="changePage"></v-pagination> -->
   </main>
</template>

<script setup>
import CharacterCard from "@/components/CharacterCard.vue";

import { ref } from 'vue';

// Эта часть куда служит для воспроизведения звука при клике на карточку персонажа
import characterClickSound from "@/assets/product_click.mp3"

const audioRef = ref(null);

function playAudio() {
   if (audioRef.value) {
      audioRef.value.src = characterClickSound;
      audioRef.value.play().catch(error => console.error('Error playing sound:', error));
   }
}
// ___________________________________

</script>

<style lang="scss" scoped>
.cards-container {
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;
   gap: 27px;
   width: 1300px;
   margin: 20px auto;
}
</style>