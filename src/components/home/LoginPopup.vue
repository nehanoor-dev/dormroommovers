<template>
    <n-modal :show="modelValue" @update:show="$emit('update:modelValue', $event)" preset="card" style="width: 498px">
      <n-card :bordered="false">
        <div class="popup-content px-3">
          <!-- Continue with Google -->
          <n-button class="google-button" block @click="continueWithGoogle">
            <template #icon>
              <n-icon><font-awesome-icon :icon="['fab', 'google']" style="color: #fafafa;" /></n-icon>
            </template>
            Continue with Google
          </n-button>
  
          <n-divider>OR</n-divider>
  
          <!-- Email & Password -->
           <p class="text-gen text-center">Login with your email and password</p>
          <n-input v-model="email" placeholder="Email" type="email" clearable />
          <n-input v-model="password" placeholder="Password" type="password" show-password-on="click" />
  
          <!-- Login & Signup -->
          <n-button class="login-btn" @click="login">Login</n-button>
        <!-- Forgot Password -->
           <div class="forget-btn">
            <n-button text type="primary" @click="forgotPassword">Forgot Password?</n-button>
          </div>

          <n-divider>OR</n-divider>
          <p class="text-gen text-center">Don't have an account yet?</p>
  
          <n-button class="signup-btn" @click="signup">Sign Up</n-button>
        </div>
      </n-card>
    </n-modal>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  defineProps({
    modelValue: Boolean, // Controls visibility
  });
  
  defineEmits(['update:modelValue']); // Two-way binding for modal
  
  const email = ref('');
  const password = ref('');
  
  const continueWithGoogle = () => {
    console.log("Redirecting to Google Auth...");
  };
  
  const forgotPassword = () => {
    console.log("Forgot password clicked.");
  };
  
  const login = () => {
    console.log("Logging in with:", email.value, password.value);
  };
  
  const signup = () => {
    console.log("Redirecting to signup page...");
  };
  </script>
  
  <style scoped>
  .popup-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .google-button {
    background-color: #3B5998;
    color: #fff;
    padding: 20px 16px;
    opacity: .8;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 5px;
  }
  .text-gen {
    font-size: 1rem;
    font-weight: 500;
    color: var(--grey-font-color);
    display: flex;
    justify-content: center;
  }
  .login-btn {
    background-color: var(--secondary-color);
    color: #fff;
    padding: 20px 16px;
    opacity: .8;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 5px;
  }
  .forget-btn {
    font-weight: 400;
    text-decoration-line: underline;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .signup-btn {
    background-color: #fff;
    color: var(--secondary-color);
    border: 2px solid var(--secondary-color);
    padding: 20px 16px;
    opacity: .8;
    font-weight: 500;
    line-height: 1.5;
    border-radius: 5px;
  }
  </style>
  