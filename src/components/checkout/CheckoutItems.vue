<template>
  <div class="checkout-container">
    <h2 class="title">Your Booking Summary</h2>
    <p class="subtitle">
      Enter your email and payment information to secure your appointment.
    </p>

    <div class="items-container">
      <div class="d-flex justify-content-between flex-direction-row b-bottom">
          <p class="subtitle"></p>
          <p class="subtitle">ITEM</p>
          <p class="subtitle">PRICE</p>
          <p class="subtitle">QUANTIITY</p>  
      </div>
      <div v-for="item in store.items" :key="item.name" class="item-card">
        <img :src="item.img" alt="item.name" class="item-image" />
        <!-- <div class="item-details"> -->
          <h3 class="subtitle">{{ item.name }}</h3>
          <p><strong>${{ item.price }}</strong></p>
          <p><strong>{{ item.quantity }}</strong></p>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCheckoutStore } from '@/stores/checkoutStore';
import { onMounted } from 'vue';

const store = useCheckoutStore();

onMounted(() => {
  console.log("Items:", store.items);
});
</script>

<style scoped>
/* Container styling */
.checkout-container {
  padding: 50px;
  border-radius: 10px;
}

/* Title and Subtitle */
.title {
  font-size: 1.3rem;
  font-weight: 700;
  color: black;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
}

/* Items Container */
.items-container {
  display: flex;
  flex-direction: column;
}

/* Individual Item Card */
.item-card {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid rgb(152, 152, 152);
  justify-content: space-between;
}

/* Item Image */
.item-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
}

/* Item Details */
.item-details {
  text-align: left;
}

.item-details h3 {
  font-size: 18px;
  color: #444;
  margin: 0;
}

.item-details p {
  font-size: 14px;
  color: #666;
  margin: 5px 0;
}
.b-bottom {
  border-bottom: 1px solid gray;
}
</style>
