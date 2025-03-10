<template>
    <div class="checkout-box">
      <h2>Email & Payment</h2>
  
      <label for="email">Email *</label>
      <input id="email" v-model="email" type="email" placeholder="Enter your email" required />
  
      <div class="card-container">
        <div id="card-element"></div>
        <button class="autofill-btn">Autofill link</button>
      </div>
  
      <div class="secure-payment">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Privacy_security_lock.png/600px-Privacy_security_lock.png" class="lock-icon" />
        <span>Secure & encrypted</span>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" class="card-logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/MasterCard_Logo.svg" class="card-logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/American_Express_logo.svg" class="card-logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Stripe_Logo.svg" class="card-logo" />
      </div>
  
      <button class="submit-btn" :disabled="loading" @click="handlePayment">
        {{ loading ? "Processing..." : "Submit Booking" }}
      </button>
  
      <p class="info-text">You won't be charged until your pickup appointment.</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { loadStripe } from "@stripe/stripe-js";
  
  export default {
    setup() {
      const email = ref("");
      const stripePromise = loadStripe("pk_test_51QvOUTBBhJmwal8LHj66ivKx3JrYTWUvXcTIrM5LDb2Qqos3YWCAlVR83X2Pa1D1PTAlVG5vuYfLLCYbQoy1PlPi00Py4S6Iuo"); // Replace with actual Stripe key
      let stripe, elements, cardElement;
      const loading = ref(false);
      const errorMessage = ref("");
  
      onMounted(async () => {
        stripe = await stripePromise;
        elements = stripe.elements();
        cardElement = elements.create("card");
        cardElement.mount("#card-element");
      });
  
      const handlePayment = async () => {
        if (!stripe || !elements) return;
  
        loading.value = true;
        errorMessage.value = "";
  
        const { paymentMethod, error } = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: { email: email.value },
        });
  
        if (error) {
          errorMessage.value = error.message;
          loading.value = false;
          return;
        }
  
        alert(`Payment Method Created: ${paymentMethod.id}`);
        loading.value = false;
      };
  
      return { email, handlePayment, loading, errorMessage };
    },
  };
  </script>
  
  <style scoped>
  .checkout-box {
    max-width: 420px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: #fff;
    text-align: center;
  }
  
  label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
    text-align: left;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .card-container {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 15px;
  }
  
  .autofill-btn {
    background: #58a6ff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
  }
  
  .secure-payment {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 15px;
  }
  
  .lock-icon {
    width: 16px;
    height: 16px;
  }
  
  .card-logo {
    width: 30px;
  }
  
  .submit-btn {
    width: 100%;
    padding: 12px;
    background: #6b7ae5;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .submit-btn:disabled {
    background: #ccc;
  }
  
  .info-text {
    font-size: 12px;
    color: gray;
    margin-top: 10px;
  }
  </style>
  