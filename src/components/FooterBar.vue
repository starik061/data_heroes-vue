<template>
   <Vfooter class="bg-blue-lighten-1 text-center d-flex flex-column py-1">
      <div>
         <v-btn v-for="(icon, iconIdx) in icons" :key="iconIdx" class="mx-4" :icon="icon.value" variant="text"
            @click="goTo(icon.link)">
         </v-btn>
      </div>

      <div class="pt-0 text-h5">
         Contacts
      </div>

      <v-divider></v-divider>

      <div class="text-body-2 pt-1">
         {{ new Date().getFullYear() }} - developed for Data Heroes
      </div>
   </Vfooter>
</template>

<script setup>
import { shallowRef, reactive } from "vue";

import telegramIcon from "@/components/icons/IconTelegram.vue"
import githubIcon from "@/components/icons/IconGithub.vue"
import linkedinIcon from "@/components/icons/IconLinkedin.vue"

const icons = reactive([
   { value: shallowRef(telegramIcon), link: "https://t.me/kiberYashka" },
   { value: shallowRef(githubIcon), link: "https://github.com/starik061" },
   { value: shallowRef(linkedinIcon), link: "https://www.linkedin.com/in/starik061" }
]);

function goTo(link) {
   window.open(link, '_blank');
}

</script>