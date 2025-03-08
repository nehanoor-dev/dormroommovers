<script setup>
import { ref } from 'vue';
import bucknell from './../../assets/images/BucknellLogo.png'
import mass from './../../assets/images/mass-university.png'
import oregon from './../../assets/images/Souther_Oregon_University_seal.png'
import union from './../../assets/images/union-college.png'
import usf from './../../assets/images/USFlogo.png'
import yale from './../../assets/images/Yalelogo.png'
import carnegie from './../../assets/images/carnegie-university.png'

const logos = ref([
  bucknell,
  mass,
  oregon,
  union,
  usf,
  yale,
  carnegie
]);
</script>

<template class="bg-color">
  <div class="slider-container">
    <div class="slider">
      <div class="slide" v-for="(logo, index) in logos" :key="index">
        <img :src="logo" alt="University Logo" />
      </div>
      <!-- Duplicate for infinite loop effect -->
      <div class="slide" v-for="(logo, index) in logos" :key="'dup-' + index">
        <img :src="logo" alt="University Logo" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-color {
  color: rgb(225, 224, 224);
}
.slider-container {
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100%;
  background: rgb(225, 224, 224);
  padding: 10px 0;
  height: 180px;
}

.slider {
  display: flex;
  gap: 20px;
  animation: scroll 15s linear infinite;
  background: rgb(225, 224, 224);
  align-items: center;
}

.slide {
  flex: 0 0 auto;
  
}

.slide img {
  height: 120px;
  width: auto;
  padding: 20px;
  border-radius: 15px;
}

/* Animation for smooth continuous scrolling */
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

img {
  filter: grayscale(100%);
  background-color: white;
}
img:hover {
  filter: grayscale(0%);
}
</style>
