<template>
   <v-toolbar class="px-10 py-3">
      <v-toolbar-title>
         <img src="/public/data-heroes-logo.svg" class="data-heroes-logo" alt="logo" @click="goTo()" width="240px">
      </v-toolbar-title>
      <v-text-field class="d-block text-field" label="Search character" variant="outlined" hide-details
         :model-value="filterQuery" @update:modelValue="changeFilterQuery" @keyup.enter="emitFiltration"></v-text-field>
      <v-btn class="ml-1 mr-3 bg-blue-lighten-1" variant="text" icon="mdi-magnify"
         @click.prevent="emitFiltration"></v-btn>
      <label for="filter-select">
         <v-icon class="pr-3" variant="text" icon="mdi-filter"></v-icon>
      </label>

      <div class="d-block text-field-small">
         <v-select id="filter-select" label="Тип фильтра" variant="outlined" hide-details :items="statusTypes"
            :model-value="choosenStatusType" @update:modelValue="changeFilterType">
         </v-select>
      </div>
      <v-spacer></v-spacer>
   </v-toolbar>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["filtration"])

const statusTypes = ['alive', 'dead', 'unknown'];
const choosenStatusType = ref('alive');
const filterQuery = ref("");

function changeFilterType(type) {
   choosenStatusType.value = type;
}

function changeFilterQuery(e) {
   filterQuery.value = e.trim();
}

function emitFiltration() {
   emit("filtration", { name: filterQuery, status: choosenStatusType })
}

function goTo() {
   window.open("https://dataheroes.pro/", '_blank');
}

</script>

<style scoped lang="scss">
.data-heroes-logo {
   cursor: pointer;

   &:hover,
   :active,
   :focus {
      opacity: 0.7;
   }
}

.text-field {
   flex-basis: 500px;
   flex-grow: 0;

   &-small {
      flex-basis: 150px;
   }
}
</style>