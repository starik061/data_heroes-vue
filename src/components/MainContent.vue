<template>
   <audio class="visually-hidden" type="audio/mpeg" ref="audioRef" />
   <main>
      <div class="cards-container" @click="playAudio">
         <CharacterCard v-for="(character, characterIdx ) in 3" :key="characterIdx" />
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

function playAudio(event) {
   if (event.target.closest(".character-card-wrapper")) {

      audioRef.value.src = characterClickSound;
      audioRef.value.play().catch(error => console.error('Error playing sound:', error));

   }
}
// ___________________________________

</script>

<style lang="scss" scoped>
.cards-container {
   // display: flex;
   // flex-wrap: wrap;
   // justify-content: flex-start;
   // gap: 27px;
   // margin: 20px auto;
   width: 600px;
   padding: 10px 0;
   display: flex;
   justify-content: flex-start;
   align-items: flex-start;
   align-content: flex-start;
   flex-wrap: wrap;
   gap: 27px;
   margin: 20px auto;

   @media screen and (min-width: 1227px) {
      width: 1227px;
   }
}
</style>