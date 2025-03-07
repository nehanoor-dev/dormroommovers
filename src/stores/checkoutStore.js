import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCheckoutStore = defineStore('checkout', () => {
  const currentStep = ref(1); // Start from step 1

  const nextStep = () => {
    if (currentStep.value < 6) currentStep.value++;
  };

  const prevStep = () => {
    if (currentStep.value > 1) currentStep.value--;
  };

  return { currentStep, nextStep, prevStep };
});
