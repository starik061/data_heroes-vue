<template>
   <v-toolbar class="px-10 py-3">
      <v-toolbar-title>
         <img src="/public/data-heroes-logo.svg" class="data-heroes-logo" alt="logo" @click="goTo()" width="240px">
      </v-toolbar-title>
      <v-text-field class="d-block text-field" label="Search character" variant="outlined" hide-details></v-text-field>
      <v-btn class="ml-1 mr-3 bg-blue-lighten-1" variant="text" icon="mdi-magnify"></v-btn>
      <label for="filter-select">
         <v-icon class="pr-3" variant="text" icon="mdi-filter"></v-icon>
      </label>

      <div class="d-block text-field-small">
         <v-select id="filter-select" label="Тип фильтра" variant="outlined" hide-details>
         </v-select>
      </div>
      <v-spacer></v-spacer>
   </v-toolbar>
</template>

<script setup>
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

.visually-hidden {
   position: absolute;
   width: 1px;
   height: 1px;
   margin: -1px;
   border: 0;
   padding: 0;

   white-space: nowrap;
   clip-path: inset(100%);
   clip: rect(0 0 0 0);
   overflow: hidden;
}
</style>