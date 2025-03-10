<template>
  <div class="pb-5">
    <h3 class="storage-heading">Build Your Storage Plan</h3>
    <p class="storage-text">
      Book now, pay later. You will not be charged until your Pickup
      appointment.
    </p>
    <div class="promo m-3">
      💵 LIMITED-TIME PROMO: Get 2 Months of FREE Storage for a Storagehotel
      Large Box!
    </div>
    <h4 class="storage-sub-heading">Boxes</h4>
    <p class="storage-text">
      We provide <strong>FREE</strong> storage boxes with tape, delivered to you
      at your Supply Appointment.
    </p>
    <p class="storage-text">
      <strong
        >You won't be charged for boxes you don't use. Simply return any unused
        boxes during Pickup.</strong
      >
      We recommend you order more boxes than you think you need. The typical
      student uses at least 7 Storagehotel Large Boxes.
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
          e.g. If you order 7 Storagehotel Large Boxes but only store 5, you
          will only be charged for 5 boxes after returning the 2 unused boxes
          during Pickup.
        </div>
      </n-tooltip>
    </p>
    <div class="boxes">
      <img :src="boxIcon" alt="boxIcon" height="100x" />
      <div>
        <h6 class="item-heading">
          Storagehotel Large Box
          <n-tooltip trigger="hover">
            <template #trigger>
              <font-awesome-icon
                :icon="['far', 'circle-question']"
                style="color: gray"
              />
            </template>
            <div
              class="text-center "
              style="font-size: 11px; width: 200px; white-space: normal"
            >
              18” x 18” x 16” each. 50 lb weight limit each. Boxes are free,
              provided they are stored in your storage plan.
            </div>
          </n-tooltip>
        </h6>
        <p class="item-text">18” x 18” x 16”</p>
        <p class="item-text">${{ box.price }} /month</p>
      </div>
      <div class="btn-wrapper">
        <font-awesome-icon @click="decrement()" :icon='["fa", "square-minus" ]' size="xl" style="color: #ef4f24" />
        <input type="text" width="20px" height="20px" :value="counter" class="m-1"/>
        <font-awesome-icon @click="increment()" :icon='["fa", "square-plus" ]' size="xl" style="color: #ef4f24" />
    </div>
    </div>
    <p class="item-text"><strong>Already have your own boxes? </strong>
        Add them as Custom Items below!
    </p>
    <h5 class="item-heading">Common Items</h5>
    <p class="item-text">For those things that don't fit in a box.</p>
    <div class="common-items">
      <div v-for="item in common_items" :key="item.id">
        <div class="boxes">
      <img :src="item.img" alt="boxIcon" height="100px" />
      <div>
        <h6 class="item-heading">{{ item.name }}</h6>
        <p class="item-text">${{ item.price }} /month</p>
      </div>
      <div class="btn-wrapper">
        <font-awesome-icon @click="commonItemsDecrement(item)" :icon='["fa", "square-minus" ]' size="xl" style="color: #ef4f24" />
        <input type="text" width="20px" height="20px" :value="item.quantity" class="m-1"/>
        <font-awesome-icon @click="commonItemsIncrement(item)" :icon='["fa", "square-plus" ]' size="xl" style="color: #ef4f24" />
    </div>
    </div>
      </div>
    </div>

    <h5 class="item-heading">Mattresses</h5>
    <p class="item-text">Mattresses are required to be in a sealed mattress bag for hygienic reasons.If needed, we can provide a mattress bag to you at your Supply or Pickup Appointment.</p>
    <div class="common-items">
      <div v-for="item in mattress" :key="item.id">
        <div class="boxes">
      <img :src="item.img" alt="boxIcon" height="100px" />
      <div>
        <h6 class="item-heading">{{ item.name }}</h6>
        <p class="item-text">${{ item.price }} /month</p>
      </div>
      <div class="btn-wrapper">
        <font-awesome-icon @click="commonItemsDecrement(item)" :icon='["fa", "square-minus" ]' size="xl" style="color: #ef4f24" />
        <input type="text" width="20px" height="20px" :value="item.quantity" class="m-1"/>
        <font-awesome-icon @click="commonItemsIncrement(item)" :icon='["fa", "square-plus" ]' size="xl" style="color: #ef4f24" />
    </div>
    </div>
      </div>
   </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import boxIcon from "./../../assets/images/box-icon.png";
import { useCheckoutStore } from './../../stores/checkoutStore';
import bikeIcon from './../../assets/images/bike-icon.png';
import carryOnIcon from './../../assets/images/carry-on-icon.png';
import miniFridge from './../../assets/images/mini-fridge-icon.png';
import skisIcon from './../../assets/images/skis-icon.png';
import checkIn from './../../assets/images/check-in-icon.png';
import twinMattress from './../../assets/images/twin-mattress-icon.png';
import queenMattress from './../../assets/images/queen-mattress-icon.png';
import kingMattress from './../../assets/images/king-mattress-icon.png';
import fullMattress from './../../assets/images/full-mattress-icon.png';



const store = useCheckoutStore();
const box = ref({
    id:"box1",
    category: "box",
    name: "Storagehotel Large Box",
    price: 20,
    img: boxIcon,
    
})
const common_items = ref([
  {
    id:"common_items-1",
    category: "common_items",
    name: "Carry-On Suitcase",
    price: 20,
    img: carryOnIcon,
    quantity:0
  },
  {
    id:"common_items-2",
    category: "common_items",
    name: "Mini Fridge",
    price: 25,
    img: miniFridge,
    quantity:0
  },
  {
    id:"common_items-3",
    category: "common_items",
    name: "Check-In Suitcase",
    price: 30,
    img: checkIn,
    quantity:0
  },
  {
    id:"common_items-4",
    category: "common_items",
    name: "Skis/Snowboard",
    price: 25,
    img: skisIcon,
    quantity:0
  },
  {
    id:"common_items-3",
    category: "common_items",
    name: "Bicycle",
    price: 40,
    img: bikeIcon,
    quantity:0
  },
]);

const mattress = ref([
{
    id: "Mattresses-1",
    category: "Mattresses",
    name: "Twin Mattress",
    img: twinMattress,
    price: 50,
    quantity:0
  },
  {
    id: "Mattresses-2",
    category: "Mattresses",
    name: "Queen Mattress",
    img: queenMattress,
    price: 60,
    quantity:0
  },
  {
    id: "Mattresses-3",
    category: "Mattresses",
    name: "Full Mattress",
    img: fullMattress,
    price: 55,
    quantity:0
  },
  {
    id: "Mattresses-4",
    category: "Mattresses",
    name: "King Mattress",
    img: kingMattress,
    price: 80,
    quantity:0
  },

])

const counter = ref(0);

const increment = () => {
  counter.value++;
    store.setStorage(
        {
        id: box.value.id,
        name: box.value.name, 
        price: box.value.price,
        quantity: counter.value,
        }
        );
    console.log("storage", store.storage)
}

const decrement = () => {
    if(counter.value == 0) return
    counter.value--;
    store.removeStorage(
        {
        id: box.value.id,
        name: box.value.name, 
        price: box.value.price,
        quantity: counter.value,
        }
    );
    console.log("storage", store.items)
}
const commonItemsDecrement = (item) => {
    if(item.quantity == 0) return
    console.log("item", item)
    item.quantity--;
    store.removeStorage(
        {
        id: item.id,
        name: item.name, 
        price: item.price,
        quantity: item.quantity,
        }
    );
    
    console.log("storage", store.storage);
};
const commonItemsIncrement = (item) => {
    console.log("item", item)
    item.quantity++;
    store.setStorage(
        {
        id: item.id,
        name: item.name, 
        price: item.price,
        quantity: item.quantity,
        img: item.img
        }
    );
    console.log("storage", store.storage);
};

</script>
<style scoped>
.storage-heading {
  font-weight: 700;
  font-size: 1.5rem;
  color: black;
}
.storage-sub-heading {
  font-weight: 600;
  font-size: 1.1rem;
  color: black;
}
.storage-text {
  color: black;
  font-weight: 400;
  font-size: 0.8rem;
}
.promo {
  background-color: #143a33;
  padding: 10px;
  color: white;
  border-radius: 5px;
}
.boxes {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.plus-minus-btn {
  color: white;
  font-weight: 500;
  background-color: var(--secondary-color);
  border-radius: 5px;
  height: 20px;
  width: 20px;
  margin: 5px;
  border: 1px solid var(--secondary-color);
}
.btn-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
}
.item-heading {
    font-size: 1rem;
    font-weight: 700;
    color: black;
}
.item-text {
    font-size: 0.75rem;
    font-weight: 400;
    color: black;
}
input {
  height: 20px;
  width: 20px;
}
.common-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>
