<script setup>
import { ref } from 'vue';
import addValue1 from './../../assets/images/add-value-1.webp';
import addValue2 from './../../assets/images/add-value-2.webp';
import addValue3 from './../../assets/images/add-value-3.webp';

const data = ref([
  {
    id: 1,
    img: addValue1,
    heading: "Storage only",
    text: "The smartest and easiest storage ever. We’ll pick up items from your home, and deliver them when you’re ready."
  },
  {
    id: 2,
    img: addValue2,
    heading: "Storage & moving",
    text: "Clutter is your one-stop shop for moving and storage, with great service and an even better value."
  },
  {
    id: 3,
    img: addValue3,
    heading: "Local moving",
    text: "We make moving hassle-free. Clutter handles your in-town moves—packing and transportation included!"
  }
]);
</script>

<template>
  <div class="main-container">
    <h2 class="text-center py-5">Customizable solutions for everyone</h2>

    <!-- Responsive Grid -->
    <div class="custom-container">
      <div v-for="val in data" :key="val.id" class="inner-container">
        <img :src="val.img" :alt="val.heading" class="custom-img" />
        <div>
          <h4 class="container-heading mt-3">{{ val.heading }}</h4>
          <p class="container-text">{{ val.text }}</p>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <button class="primary-btn">Get a Quote</button>
    </div>
  </div>
</template>

<style scoped>
/* General container styles */
.main-container {
  background-color: var(--bg-color);
  padding: 20px;
  text-align: center;
}

/* Grid layout for better responsiveness */
.custom-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Flexible grid */
  gap: 20px;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* Image styles */
.custom-img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

/* Inner container for each item */
.inner-container {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

/* Heading and text */
.container-heading {
  color: var(--dark-text-color);
  font-weight: 500;
}

.container-text {
  color: var(--grey-text-color);
  font-weight: 400;
}
@media (max-width: 1024px) {
  .custom-container {
    display: flex;
    flex-direction: column; /* Stack items */
    align-items: center; /* Center items horizontally */
    justify-content: center; /* Center items vertically */
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .custom-container {
    grid-template-columns: 1fr; 
  }
}

@media (max-width: 480px) {
  .custom-img {
    max-width: 100%;
  }
}
</style>
