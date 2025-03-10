<template>
    <div>
        <div>
            <h5 class="material-heading">Would you like packing materials?</h5>
            <p class="material-text">We'll send enough to pack everything you want to store.</p>
            <div class="box-wrapper">
                <div class="box" @click="activeBox('yes')" :class="{'active-box-yes': isActiveYes}">
                    <h5 class="material-heading" :class="{'light-text': isActiveYes}">Yes Please!</h5>
                    <img :src="materialBox" alt="material-box" height="100" />
                </div>
                <div class="box" @click="activeBox('no')" :class="{'active-box-no': isActiveNo}">
                    <h5 class="material-heading" :class="{'light-text': isActiveNo}">No Thanks</h5>
                    <img :src="emptyBox" alt="empty-box" height="100" />
                </div>
            </div>
        </div>

        <Pickup v-if="isActiveYes" />
    </div>
</template>
<script setup>
import materialBox from './../../assets/images/material-box.svg';
import emptyBox from './../../assets/images/empty-box.svg';
import { ref } from 'vue';
import { useCheckoutStore } from '@/stores/checkoutStore';
import Pickup from './Pickup.vue';

const store = useCheckoutStore();
const isActiveYes = ref(false);
const isActiveNo = ref(false);
const materialData = ref({});

const activeBox = (type) => {
    console.log("box xlixked")
    console.log(isActiveYes)
   if (type == 'yes'){
    isActiveYes.value = true;
    isActiveNo.value = false
    materialData.value = {
    materialRequired: 'yes'
   }
    return
   }
   else {
   isActiveNo.value = true;
   isActiveYes.value = false;
   materialData.value = {
   materialRequired: 'no'
   }
   }
}
</script>
<style scoped>
.material-heading {
    color: black;
    font-size: 1rem;
    font-weight: 700;
}
.material-text {
    color: black;
    font-weight: 400;
    font-size: 0.8rem;
}
.box-wrapper {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-evenly;
}
.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 200px;
    width: 250px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
.active-box-yes,
.active-box-no {
    background-color: var(--primary-color);
    color: white !important;
}
.light-text {
    color: white;
}
</style>