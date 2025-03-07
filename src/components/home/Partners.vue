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

<template>
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
.slider-container {
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100%;
  background: #f8f8f8;
  padding: 10px 0;
  height: 180px;
}

.slider {
  display: flex;
  gap: 20px;
  animation: scroll 15s linear infinite;
  background: #f8f8f8;
}

.slide {
  flex: 0 0 auto;
}

.slide img {
  height: 100px;
  width: auto;
  margin-top: 20px;
  padding: 5px;
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
</style>
