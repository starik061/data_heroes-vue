<template>
   <!-- <v-lazy :options="{ 'threshold': 0.5 }" transition="fade-transition">
      <v-card class="mx-auto product-card" color="blue-lighten-1" variant="elevated">
         <v-img cover height="150" src="/src/assets/placeholder_image.jpg" alt="" crossorigin loading="lazy"></v-img>
         <v-card-item>
            <div>
               <div class="text-caption mb-1 no-overflow">
                  ID: {{ product.id }}
               </div>
               <div class="text-h6 mb-1 no-overflow">
                  {{ product.product || "-" }}
               </div>
               <div class="text-caption no-overflow">Brand: {{ product.brand || "-" }}</div>
            </div>
            <div class="text-overline mb-1 no-overflow">
               {{ `Price: ${product.price} $` || "-" }}
            </div>
         </v-card-item>
      </v-card>
   </v-lazy> -->
   <div class="character-card-wrapper">
      <img src="../assets/placeholder_image.jpg" alt="" class="character-image">
      <div class="chacarter-info-container">
         <h2 class="character-name">Name</h2>
         <p class="character-status-and-race">Alive - Alien</p>
         <h3 class="last-location-header">Last known location:</h3>
         <p class="last-location-info">unknown</p>

         <h3 class=" first-location-header">First seen in:</h3>
         <p class="first-location-info">The Rickshank Rickdemption</p>
      </div>
   </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.character-card-wrapper {
   display: flex;
   flex-basis: 600px;
   color: rgb(255, 255, 255);
   background-color: rgb(60, 62, 68);
   border-radius: 9px;
   overflow: hidden;
   cursor: pointer;
   transition: transform 100ms ease-in;

   &:hover {
      box-shadow: 0px 0px 7px 3px rgba(76, 146, 232, 1);
      transform: scale(1.02);
   }

   & h3 {
      margin-top: 16px;
      font-size: 16px;
      line-height: 26px;
      font-weight: 500;
      color: rgb(158, 158, 158);
   }

   & p {
      font-size: 18px;
      line-height: 29px;
      font-weight: 400;
   }
}

.chacarter-info-container {
   padding: 13.5px;
}

.character-image {
   flex-grow: 0;
   flex-shrink: 0;
   width: 220px;
   object-fit: cover;
}

.character-name {
   font-family: "Segoe UI Black", Arial, sans-serif;
   font-size: 27px;
   font-weight: 800;
   line-height: 30px;
}

.character-status-and-race {
   position: relative;
   padding-left: 19px;
   font-size: 16px;
   line-height: 18px;
   font-weight: 500;

   &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      display: block;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background-color: green;
   }
}
</style>
