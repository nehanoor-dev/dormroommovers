<script setup>
import { ref, reactive } from "vue";
import supplyKit from "./../../assets/images/supply-kit.webp";
import lamp from "./../../assets/images/icon-lamp.webp";
import box from "./../../assets/images/icon-box.webp";
import fridge from "./../../assets/images/icon-mini-fridge.webp";
import bike from "./../../assets/images/icon-bike.webp";
import couch from "./../../assets/images/icon-couch.webp";
import { RouterLink } from "vue-router";

const isPrepay = ref(false); // Default selection
const plans = ref([
  {
    name: "SMALL",
    monthlyPrice: 20,
    prepayPrice: 180,
    img: lamp,
    text: [
      "Folding Chair",
      "Vacuum",
      "Lamp",
      "Ironing Board",
      "Mini Safe",
      "Picture Frame",
      "Umbrella",
      "Desk Lamp",
      "Poster Tube",
      "Art Portfolio",
      "Fan",
      "Trash Can",
      "Laundary Basket(empty)",
      "Show Rack",
      "Basket",
      "Pillow",
      "Cooler",
      "Skateboard",
      "Broom",
      "Drying Rack",
      "White Board",
      "Step Stool",
      "Folding Stool",
      "Mini Vacuum",
    ],
  },
  {
    name: "MEDIUM",
    monthlyPrice: 40,
    prepayPrice: 360,
    img: box,
    text: [
      "Customer Box < 4 Cuft",
      "Plastic Storage Tote",
      "Night Stand",
      "Plastic Drawer Unit",
      "Duffel Bag",
      "Suitcase",
      "Microwave",
      "Ottoman",
      "Individual Plastic Drawer",
      "Crutches",
      "Floor Lamp",
      "Printer",
      "Guitar Amp",
      "Carry on Suitcase",
      "Snowboard",
      "Stereo",
      "Guitar",
      "Violin",
      "Laundary Basket",
      "Kitchen Chair",
      "Small Bean Bag",
      "Small Table",
      "Trash Bag",
      "Bed Frame",
      "End Table",
      "Rack",
      "Folding Table",
      "Clothes Rack",
      "File Cabinet",
      "Mattress Pad",
      "Bed Rails",
      "Bed Slats",
    ],
  },
  {
    name: "LARGE",
    monthlyPrice: 60,
    prepayPrice: 540,
    img: fridge,
    text: [
      "Customer Box 4-6 Cuft",
      "Desk Chair",
      "Mini Fridge",
      "Rug",
      "Television Stand",
      "Bulletin Board",
      "Step Ladder",
      "Computer Monitor",
      "Scooter or Moped",
      "Twin Headboard",
      "Twin Footboard",
      "Large Suitcase",
      "Footboard",
      "Cabinet",
      "Çart",
      "Keyboard",
      "Golf Bag",
      "Chest",
    ],
  },
  {
    name: "EXTRA LARGE",
    monthlyPrice: 80,
    prepayPrice: 720,
    img: bike,
    text: [
      "Customer Box 6+ Cubin ft",
      "Television",
      "Bicycle",
      "Trunck",
      "Twin Size Mattress",
      "Twin Box Spring Only",
      "Mirror",
      "Coffee Table",
      "Water Cooler",
      "Queen or Full Headborad",
      "Kitchen Table",
      "Shelf < 6ft Tall",
      "Desk Hutch",
      "Futon Mattress",
      "Bookcase",
    ],
  },
  {
    name: "HUGE",
    monthlyPrice: 100,
    prepayPrice: 900,
    img: couch,
    text: [
      "Futon",
      "Reclining Chair",
      "Large Bean Bag Chair",
      "Couch",
      "Full Size Mattress Only",
      "Full Size Box Spring Only",
      "Queen Size Mattress Only",
      "Queen Box Spring Only",
      "Desk",
      "Arm Chair",
      "Dresser(empty)",
    ],
  },
]);

const expanded = reactive({});

const togglePricing = () => {
  pricingType.value = pricingType.value === "monthly" ? "prepay" : "monthly";
};

const toggleExpand = (index, plan) => {
  expanded[index] = !expanded[index];
};

const getVisibleItems = (plan, index) => {
  return expanded[index] ? plan.text : plan.text.slice(0, 5);
};

const switchStyles = {
  railColor: "#ccc",
  railActiveColor: "#28CCAE",
  buttonColor: "#28CCAE",
};
</script>
<template>
  <div class="mt-5">
    <div class="pricing-wrapper-top p-2">
      <h3 class="text-center pricing-heading">PRICING</h3>
      <h5 class="text-center pricing-text mt-3">
        Register for only $49.99<br />Receive a
        <strong class="fw-700">Supply Kit</strong> &
        <strong class="fw-700">Only pay for what you store and ship</strong>
      </h5>
      <img :src="supplyKit" alt="supply-kit" height="300px" />
      <p class="pricing-text">
        **Our Supply Kit comes with 5 Boxes + Packing Tape
      </p>
    </div>
    <div class="pricing-second p-5 mt-2">
      <h3 class="text-center pricing-text-second">
        <strong class="fw-700">Per Item</strong> pricing with a
        <strong class="fw-700">4 month minimum</strong> term.<br />
        <strong class="fw-700">Includes pickup & delivery</strong> on featured
        dates.
        <n-tooltip trigger="hover">
          <template #trigger>
            <font-awesome-icon
              :icon="['far', 'circle-question']"
              style="color: gray"
            />
          </template>
          <div
            class="text-center"
            style="font-size: 11px; width: 200px; white-space: normal"
          >
            You can always reterive your items earlier that 4 months but the
            balance of the team will be billed prior to the retrieval.
          </div>
        </n-tooltip>
      </h3>
    </div>

    <div class="pricing-container-last">
      <!-- Toggle & Action Button -->
      <div class="toggle-section">
        <span class="toggle-text text-center"
          ><strong class="fw-700">Monthly</strong><br />4 months min<br
        /></span>
        <n-switch
          v-model:value="isPrepay"
          :rail-style="
            ({ checked }) => ({
              backgroundColor: checked
                ? switchStyles.railActiveColor
                : switchStyles.railColor,
              borderRadius: '20px',
              height: '25px',
              width: '70px',
            })
          "
          :loading-style="
            ({ checked }) => ({
              backgroundColor: switchStyles.buttonColor,
            })
          "
        />
        <span class="toggle-text text-center mt-3"
          ><strong class="fw-700">Prepay</strong><br />4 months<br /><span
            class="off-text"
            >10% off</span
          ></span
        >
        <a href="/checkout">
          <button class="primary-btn">Get Started</button>
        </a>
      </div>

      <!-- Pricing Cards -->
      <div class="pricing-list">
        <div v-for="(plan, index) in plans" :key="index">
          <h3 class="text-center pricing-card-heading">{{ plan.name }}</h3>
          <n-card
            class="pricing-card"
            :class="{ 'pricing-card-height': expanded[index] }"
          >
            <p v-if="!isPrepay" class="price">
              <span>${{ plan.monthlyPrice }}</span> <br />
              <span>Per Item Monthly</span>
            </p>
            <p v-if="isPrepay">
              <span class="price-strike">${{ plan.monthlyPrice * 12 }}</span>
              <span class="prepay-price">${{ plan.prepayPrice }}</span> <br />
              <span class="price">Per Item Monthly</span>
            </p>

            <img :src="plan.img" alt="plan.heading" height="50px" />
            <!-- Loop for displaying limited or full text items -->
            <div
              v-for="(item, i) in getVisibleItems(plan, index)"
              :key="i"
              class="mt-3"
            >
              <p>{{ item }}</p>
            </div>

            <!-- Show More / Show Less Button -->
            <a
              v-if="plan.text.length > 5"
              @click="toggleExpand(index, plan)"
              class="toggle-btn"
            >
              {{ expanded[index] ? "Show Less" : "Show More" }}
            </a>
          </n-card>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.toggle-text {
  font-size: 14px;
  font-weight: 300px;
}
.pricing-card-heading {
  font-weight: 700;
  font-size: 12px;
  color: black;
}
.price {
  font-weight: 700;
  font-size: 12px;
  color: black;
}
.pricing-heading {
  font-weight: 700;
  font-size: 1.8rem;
  color: var(--dark-text-color);
  letter-spacing: 0.1cap;
}
.pricing-text {
  font-weight: 300;
  font-size: 1.7rem;
}
.pricing-wrapper-top {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.pricing-second {
  background-color: var(--bg-color);
}
.pricing-text-second {
  font-weight: 300;
  font-size: 1.7rem;
}
.fw-700 {
  font-weight: 700 !important;
}
.off-text {
  color: var(--primary-color);
}
.toggle-btn {
  color: var(--secondary-color);
  cursor: pointer;
  text-decoration: none;
}
/* Container */
.pricing-container-last {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}

/* Toggle Section */
.toggle-section {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
}
.pricing-card-height {
  height: fit-content !important;
}

/* Pricing List */
.pricing-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 6px;
}

/* Pricing Card */
.pricing-card {
  text-align: center;
  border: 0.6px solid gainsboro;
  border-radius: 10px;
  min-width: 180px;
  height: 450px;
}

/* Strikethrough Price */
.price-strike {
  text-decoration: line-through;
  color: gray;
  margin-right: 10px;
  font-size: 12px;
}

/* Prepay Price */
.prepay-price {
  font-weight: 700;
  font-size: 12px;
  color: var(--primary-color);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .pricing-list {
    flex-direction: column;
    gap: 10px;
  }

  .pricing-card {
    min-width: 170px;
  }
}
@media (max-width: 1024px) {
  img {
    max-height: 250px;
  }
}
@media (max-width: 500px) {
  img {
    max-height: 200px;
  }
}
</style>
