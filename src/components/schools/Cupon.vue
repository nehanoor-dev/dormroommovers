<script setup>
import { useSchoolStore } from "./../../stores/SchoolStore";
import LoginPopup from "../home/LoginPopup.vue";
import { ref } from 'vue';

const showPopup = ref(false);
const schoolStore = useSchoolStore();

const showLoginPopup = () => {
  showPopup.value = true;
  console.log("popup clickd", showPopup.value);
};
</script>

<template>
  <div class="cupon-container m-5">
    <button class="discount-btn" @click.prevent="showLoginPopup()">10% OFF<br />MOVING + STORAGE</button>
    <h2 class="offer-text">
      Sign up today for 10% off storage for {{ schoolStore.selectedSchool }}
      students for a limited time!
    </h2>
    <button class="primary-btn" @click.prevent="showLoginPopup()">GET MOVING</button>
    <login-popup v-model="showPopup" />
  </div>
</template>

<style scoped>
/* 🌟 Flexbox for alignment */
.cupon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(246, 246, 246); 
  padding: 30px;
  text-align: center;
  flex-wrap: wrap; 
  border: 2px dotted var(--primary-color);
}

/*  Buttons Styling */
button {
  border: none;
  padding: 12px 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.discount-btn {
  color: var(--primary-color);
  background-color: #fff;
  border: 4px solid var(--primary-color);
  font-weight: 700;
  border-radius: 0;
  padding: 20px;
  font-size: 1.6rem;
}

button:hover {
  opacity: 0.8;
}

/* 📝 Offer Text */
.offer-text {
  font-size: 1.7rem;
  max-width: 700px;
  line-height: 1.2;
  display: flex;
  justify-content: left;
}


/* 📱 Responsive Design */
@media (max-width: 1300px) {
  .cupon-container {
    flex-direction: column;
    text-align: center;
  }

  button {
    margin: 20px;
  }
}
</style>
