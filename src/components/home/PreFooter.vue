<script setup>
import iconLamp from "./../../assets/images/icon-lamp.webp";
import iconFrodge from "./../../assets/images/icon-mini-fridge.webp";
import iconCouch from "./../../assets/images/icon-couch.webp";
import iconBox from "./../../assets/images/icon-box.webp";
import iconBike from "./../../assets/images/icon-bike.webp";
import {ref} from 'vue';

const inputValue = ref('');
</script>
<template>
  <h2 class="pre-footer-heading text-center mt-5">
    HOW DOES MOVING + STORAGE PRICING WORK?
  </h2>
  <h5 class="pre-footer-sub-heading text-center mt-1">
    Moving + Storage is priced per item, per month, based on what we pick up
  </h5>
  <div class="image-wrapper mt-5">
    <img :src="iconLamp" alt="iconLamp" />
    <img :src="iconFrodge" alt="iconFrodge" />
    <img :src="iconCouch" alt="iconCouch" />
    <img :src="iconBox" alt="iconBox" />
    <img :src="iconBike" alt="iconBike" />
  </div>
  <div class="text-wrapper mt-5">
    <ul>
        <h5 class="inner-heading text-center">What's Included:</h5>
      <li>Moved by professionals.</li>
      <li>Securely stored & climate protected.</li>
      <li>Covered $150 per item.</li>
      <li>Delivered Back to you.</li>
    </ul>
  </div>
  <div class="search-container mt-1">
    <div class="search-wrapper">
      <n-input v-model:value="inputValue" placeholder="Search your school for pricing" class="search-input">
        <template #suffix>
          <n-icon>
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" style="color: #01060e;" />
          </n-icon>
        </template>
      </n-input>
      <button class="primary-btn">GET STARTED</button>
    </div>
  </div>
</template>
<style scoped>
.pre-footer-heading {
-webkit-font-smoothing: antialiased;
  font-weight: 700;
  line-height: 1.2;
  color: #222;
}
.pre-footer-sub-heading {
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.3;
  color: #222;
}
.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
.text-wrapper {
    display: flex;
    justify-content: center;
    font-weight: 600;
    color: black;
}
.inner-heading {
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: 0.1px;
}
.n-input {
    height: 60px;
}
.search-wrapper {
    width: 400px;
    display: flex;
    justify-content: center;
}
.n-input .n-input__input-el, .n-input .n-input__textarea-el {
    margin-top: 15px;
    font-size: 1rem;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Flexbox to align input and button */
.search-wrapper {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center;
  gap: 10px; /* Space between input and button */
  width: 100%;
  max-width: 400px; /* Limit max width */
}

/* Input field styling */
.search-input {
  width: 100%;
  height: 60px;
}

.primary-btn {
    padding: 1.5rem;
    padding-left: 3rem;
    padding-right: 3rem;
}


</style>
