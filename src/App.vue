<template>
  <Loader :isLoading="isLoading" />

  <div class="main-container">
    <HeaderBar @filtration="handleFiltration" />

    <template v-if="true">
      <MainContent v-if="!isLoading" :charactersData="charactersData" :currentPage="currentPage"
        :totalPages="totalPages" @changePage="handlePageChanging" />
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
const totalPages = ref(0);
const currentPage = ref(1);
const filterQuery = ref("");
const filterStatus = ref("alive");

async function handleFiltration({ name, status }) {
  filterQuery.value = name;
  filterStatus.value = status

  const response = await getCharacters(filterQuery.value, filterStatus.value, currentPage.value);
  charactersData.value = response.results;
  totalPages.value = response.info.pages;
}

async function handlePageChanging(payload) {
  currentPage.value = payload;

  const response = await getCharacters(filterQuery.value, filterStatus.value, currentPage.value);
  charactersData.value = response.results;
}

onMounted(async () => {
  const response = await getCharacters();
  console.log(response)
  charactersData.value = response.results;
  totalPages.value = response.info.pages;
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
