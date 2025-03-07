<script setup>
import CheckoutStepper from './../components/checkout/Stepper.vue';
import { useCheckoutStore } from './../stores/checkoutStore';

const store = useCheckoutStore();
</script>

<template>
  <div>
    <div class="stepper">
        <CheckoutStepper />
    </div>
    <button @click="store.prevStep" :disabled="store.currentStep === 1">Previous</button>
    <button @click="store.nextStep" :disabled="store.currentStep === 6">Next</button>
  </div>
</template>
<style scoped>
.stepper {
    background-color: rgb(241, 240, 240);
}
</style>
