<template>
  <Loader :isLoading="isLoading" />

  <div class="main-container">
    <HeaderBar />

    <template v-if="true">
      <MainContent v-if="!isLoading" :charactersData="charactersData" />
    </template>

    <template v-else>
      <div v-if="!isLoading" class="bg-red-darken-4 text-center d-flex flex-column py-1">Персонажи отсутствуют</div>
    </template>

    <FooterBar class="footer" />

  </div>
</template>

<script setup>
import Loader from "@/components/Loader.vue";
import HeaderBar from "@/components/HeaderBar.vue";
import MainContent from "@/components/MainContent.vue";
import FooterBar from "@/components/FooterBar.vue";

import { getCharacters } from "@/api/rick-and-mortyAPI";



import { ref, onMounted } from 'vue';


const isLoading = ref(false);
const charactersData = ref([]);


onMounted(async () => {
  const response = await getCharacters();
  charactersData.value = response.results;
})

</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

.footer {
  margin-top: auto;
}
</style>
