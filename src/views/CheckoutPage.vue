<script setup>
import Storage from "@/components/checkout/Storage.vue";
import Address from "@/components/checkout/Address.vue";
import Pickup from "@/components/checkout/Pickup.vue";
import Checkout from "@/components/checkout/Checkout.vue";
import CheckoutStepper from "./../components/checkout/Stepper.vue";
import { useCheckoutStore } from "./../stores/checkoutStore";
import { onMounted } from "vue";
import Material from "@/components/checkout/Material.vue";
import ProtectionPlan from "@/components/checkout/ProtectionPlan.vue";
import { useSchoolStore } from "@/stores/SchoolStore";
import CheckoutItems from "@/components/checkout/CheckoutItems.vue";
import logo from './../assets/images/header-logo.avif';

const store = useCheckoutStore();
const schoolStore = useSchoolStore();
onMounted(() => {
  console.log("store", store.step);
  console.log("current state", store.currentState);
});

</script>

<template>
  <div class="checkout-container" :class="{'checkout-container-6': store.step == 6}">
    <div class="stepper d-flex">
      <div class="logo m-5">
        <img :src="logo" alt="logo" height="100px" />
      </div>
      <CheckoutStepper />
    </div>
    <div class="steps-wraper">
      <div class="steps-width">
        <Storage v-if="store.step == 1" />
        <Address v-if="store.step == 2" />
        <Pickup v-if="store.step == 3" />
        <Material v-if="store.step == 4" />
        <ProtectionPlan v-if="store.step == 5" />
        <CheckoutItems v-if="store.step == 6" />
      </div>
      <div v-if="store.step != 6">
        <n-card class="checkout-card">
          <h4 class="card-heading">Due now - upfront payment</h4>
          <h4 class="card-heading">Storage per month</h4>
          <div v-for="item in store.items" class="items-wrapper">
            <div>
              <font-awesome-icon
                @click="store.removeStorage(item)"
                :icon="['fas', 'xmark']"
                style="color: #a5a6a7; cursor: pointer"
              />
              {{ item.name }}
            </div>
            <div>${{ item.price }}</div>
          </div>
          <div v-if="!store.date == []">
          <!-- <div v-if="store.date.type == 'flexible'">
            <span class="date">Date: </span>
            {{ store.date.date }} - {{ store.date.type }}</div> -->
          <div class="d-flex justify-content-between" v-for="date in store.date">
            <div>
              <span class="card-heading">Date</span><br>
            {{ date.date }} {{date.time}} - {{ date.type }}
            </div>
            <div>$29</div>
          </div>
        </div>
        <div v-else> efsdscxfds</div>

          <div>{{ store.address }}</div>
          <div v-if="store.protectionPlan">
            <div class="card-heading">Protection Plan</div>
            <div v-for="plan in store.protectionPlan" :key="plan.id" class="d-flex flex-row justify-content-between">
              <div>
                <font-awesome-icon
                @click="store.removeProtectionPlan(plan)"
                :icon="['fas', 'xmark']"
                style="color: #a5a6a7; cursor: pointer"
              />

                {{ plan.type }}</div>
              <div>{{ plan.price }}</div>
            </div>
          </div>
          <div v-if="store.totalPrice != 0" class="sub-total mb-3">
            <div>Subtotal</div>
            <div>${{ store.totalPrice }}</div>
          </div>
          <div class="total-due">
            <div>Total Due Today</div>
            <div>${{ store.totalPrice }}</div>
          </div>
          <div class="note mt-3 p-3">
            FREE to cancel or amend your order if you let us know before 11am
            one working day prior to your collection or delivery.
          </div>
        </n-card>
      </div>
      <div v-else>
        <div class="d-flex flex-direction-row">
          <div>
            <!-- <RouterLink>Edit</RouterLink> -->
            <p>School:</p>
            <h6>{{schoolStore.selectedSchool }}</h6>
            <p>Address:</p>
            <h6>{{ store.address }}</h6>
          </div>
          <div>
            <!-- <RouterLink>Edit</RouterLink> -->
            <p>Supply Date</p>
            <h6>{{ store.date.date }}</h6>
            <p>Pickup Date:</p>
            <h6>{{ store.pickUpDate }}</h6>
          </div>
        </div>

        <Checkout v-if="store.step == 6" />

      </div>
    </div>
    <div class="btn-position">
        <button @click="store.prevStep()" class="prev-btn" :disabled="store.step == 1">
          Previous
        </button>
        <button @click="store.nextStep()" class="next-btn" :disabled="store.step == 6 ">
          Next
        </button>
      </div>

  </div>
</template>
<style scoped>
.stepper {
  background-color: rgb(241, 240, 240);
}
.logo {
  font-weight: 800;
  font-size: 1.5rem;
  color: black;
}
.steps-wraper {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  padding-left: 100px;
  padding-right: 100px;
}
.checkout-card {
  min-width: 420px;
  background-color: #d4eeed;
  padding: 10px;
}
.card-heading {
  font-size: 1rem;
  font-weight: 700;
  color: black;
}
.total-due {
  display: flex;
  flex-direction: row;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  justify-content: space-between;
  font-weight: 700;
  color: black;
  padding-top: 5px;
  padding-bottom: 5px;
}
.sub-total {
  display: flex;
  flex-direction: row;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  justify-content: space-between;
  font-weight: 700;
  color: black;
  padding-top: 5px;
  padding-bottom: 5px;
}
.note {
  background-color: #bee6e4;
  border-radius: 5px;
  font-size: 0.75rem;
  color: black;
}
.items-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.steps-width {
  width: 75%;
  height: fit-content;
}
.btn-position {
  position: absolute;
  bottom: 0px;
  /* position: fixed; */
  background-color: rgb(219, 215, 215);
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 0.7;
}
.checkout-container {
  position: relative;
  min-height: 100vh;
}
.prev-btn {
  color: white;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
  height: 40px;
  width: 100px;
  border-radius: 40px;
  font-weight: 700;
  cursor: pointer;
}
.prev-btn:disabled,
.next-btn:disabled
{
  background-color: rgb(156, 155, 155);
  border: 2px solid gray;
  color: rgb(69, 68, 68);
}
.next-btn {
  background-color: var(--secondary-color);
  border: 2px solid var(--secondary-color);
  color: white;
  height: 40px;
  width: 100px;
  border-radius: 40px;
  font-weight: 700;
  cursor: pointer;
}
.date {
  font-weight: 700;
  font-size: 0.8rem;
}
.checkout-container-6 {
  background-color: rgb(246, 246, 246);
}
</style>
