import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCheckoutStore = defineStore('checkout', () => {
  const step = ref(1);
  const storage = ref([]);
  const material = ref([]);
  const date = ref({});
  const totalPrice = ref(0);
  const address = ref("");
  const items = ref([]);
  const form = ref({
    firstName: '',
    lastName: '',
    buildingName: '',
    address1: '',
    address2: '',
    town:'',
    postCode:'',
    specialInstructions: '',
    })

    const nextStep = () => {
      if (step.value < 6) {
        if (step.value == 2 && 
          form.value.firstName == '' &&
          form.value.lastName == '' &&
          form.value.buildingName == '' &&
          form.value.town == '' &&
          form.value.address1 == '' &&
          form.value.address2 == '' &&
          form.value.postCode == '' 
         )
        {
          console.log("step.value", step.value, !isFormValid);
          return;
        }
        step.value++;
      }
    };

  const prevStep = () => {
    if (step.value > 1) step.value--;
  };

  const setStorage = (payload) => {
    storage.value.push(payload);
    items.value.push(payload);
    totalPrice.value += payload.price;
  };

  const removeStorage = (payload) => {
    const storageIndex = storage.value.findIndex(item => item.id === payload.id);
    const itemsIndex = items.value.findIndex(item => item.id === payload.id);

    if (storageIndex !== -1) {
        totalPrice.value -= storage.value[storageIndex].price; // Adjust total price
        storage.value.splice(storageIndex, 1); // Remove from storage
    }

    if (itemsIndex !== -1) {
        items.value.splice(itemsIndex, 1);
    }
};

  const setMaterial = (payload) => {
    material.value.push(payload);
    items.value.push(payload);
    totalPrice.value += payload.price;
  };


  const currentState = computed(() => {
    const states = [
      'storage',
      'address',
      'pickup',
      'material',
      'protection_plan',
      'checkout'
    ];
    return states[step.value - 1] || 'unknown'; 
  });

  const isFormValid = computed(() => {
    return (
      form.value.firstName &&
      form.value.lastName &&
      form.value.buildingName &&
      form.value.address1 &&
      form.value.town &&
      form.value.postCode
    );
  });

 
  return { 
    step,
    storage,
    material,
    date,
    totalPrice,
    address,
    items,
    nextStep,
    prevStep,
    setStorage,
    setMaterial,
    currentState,
    removeStorage,
    form,
    isFormValid,
  };
});
