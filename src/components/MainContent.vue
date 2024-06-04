<template>
   <audio class="visually-hidden" type="audio/mpeg" ref="audioRef" />
   <main>
      <div class="cards-container" @click="playAudio">
         <CharacterCard v-for="(character, characterIdx ) in props.charactersData" :key="character + characterIdx"
            :character="character" />
      </div>
      <v-pagination :length="props.totalPages" :total-visible="3" :start="calcStartPaginationNumber" rounded="circle"
         active-color="grey-darken-4" :model-value="props.currentPage" @update:modelValue="changePage"></v-pagination>
   </main>
</template>

<script setup>
import CharacterCard from "@/components/CharacterCard.vue";

import { ref, computed } from 'vue';

// Эта часть куда служит для воспроизведения звука при клике на карточку персонажа
import characterClickSound from "@/assets/product_click.mp3"

const audioRef = ref(null);

function playAudio(event) {
   if (event.target.closest(".character-card-wrapper")) {
      audioRef.value.src = characterClickSound;
      audioRef.value.play().catch(error => console.error('Error playing sound:', error));
   }
};
// ___________________________________
// Эта часть куда служит для работы с пагинацией и данными от АПИ
const props = defineProps({
   charactersData: Array,
   totalPages: Number,
   currentPage: Number,
})

const emit = defineEmits(["changePage"])

const calcStartPaginationNumber = computed(() => {
   if (props.currentPage === 1 || props.currentPage === props.totalPages || props.currentPage === props.totalPages - 1) {
      return 1
   }
   return props.currentPage - 1;
})

function changePage(page) {
   emit("changePage", page);
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