<script setup>
import { computed } from 'vue';
import { useCheckoutStore } from './../../stores/checkoutStore';

const store = useCheckoutStore();

const steps = [
  { id: 1, label: 'Storage' },
  { id: 2, label: 'Address' },
  { id: 3, label: 'Pick Up' },
  { id: 4, label: 'Material' },
  { id: 5, label: 'Protection Plan' },
  { id: 6, label: 'Checkout' }
];

const getStepClass = (stepId) => {
  if (stepId < store.currentStep) return 'completed';
  if (stepId === store.currentStep) return 'active';
  return 'pending';
};
</script>

<template>
  <div class="stepper">
    <div v-for="(step, index) in steps" :key="step.id" class="step-container">
      <div :class="['step-box', getStepClass(step.id)]">
        
      </div>
      <p class="step-label">{{ step.label }}</p>

      <!-- Connecting line -->
      <div class="line" :class="['line', getStepClass(step.id + 1)]"></div>
    </div>
  </div>
</template>

<style scoped>
.stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding-top: 10px;
  position: relative;
  background-color: var(--bg-color);
}

.step-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.step-box {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border: 2px solid #b4b3b3;
  background: white;
  transition: all 0.3s ease-in-out;
}

.step-label {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
}

.line {
  position: absolute;
  top: 18px;
  left: 50%;
  width: 100px;
  height: 3px;
  transform: translateX(20px);
}

/* States */
.pending {
  border-color: #9f9898;
  background: white;
}

.active {
  background: white;
  border: 4px solid var(--primary-color);
}

.completed {
  border-color: var(--primary-color);
  background: var(--primary-color);
  color: white;
}

.completed + .line {
  background-color: var(--primary-color);
  border: 4px solid var(--primary-color);
}
</style>
