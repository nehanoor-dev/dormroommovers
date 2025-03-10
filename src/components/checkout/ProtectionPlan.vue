<template>
    <div>
        <h5 class="plan-heading">Do you have any items to dispose of?</h5>
        <p class="plan-text">Use our disposal service and check one more thing off for your to-do list.</p>
        
        <div class="d-flex flex-row gap-2">
            <div class="d-flex flex-row plan-wrapper" 
                @click="activeBox('not_now')"
                :class="{'active-not-now': activeBoxType === 'not_now'}">
                <img :src="clock" alt="clock" height="70px" />
                <div>
                    <h5 class="plan-heading">Not Now</h5>
                    <p class="plan-text">You can change your mind the day of, if anything comes up.</p>
                </div>
            </div>
            
            <div class="d-flex flex-row plan-wrapper" 
                @click="activeBox('yes_please')"
                :class="{'active-yes': activeBoxType === 'yes_please'}">
                <img :src="trash" alt="trash" height="70px" />
                <div>
                    <h5 class="plan-heading d-flex justify-content-between">
                        <span>Yes Please!</span>
                        <span class="primary-text">$50+</span>
                    </h5>
                    <p class="plan-text">You can change your mind the day of, if anything comes up.</p>
                </div>
            </div>        
        </div>

        <h5 class="plan-heading mt-5">Add a Protection Plan?</h5>
        <p class="plan-text">Choose how much coverage you need.</p>
        
        <div class="d-flex flex-row gap-2">
            <div class="d-flex flex-row plan-wrapper" 
                @click="activeBox('standard')"
                :class="{'active-standard': activeBoxType === 'standard'}">
                <img :src="standard" alt="standard" height="70px" />
                <div>
                    <h5 class="plan-heading d-flex justify-content-between">
                        <span>Standard</span>
                        <span class="primary-text">$15/month</span>
                    </h5>
                    <p class="plan-text">Protect items up to $1,000</p>
                </div>
            </div>
            
            <div class="d-flex flex-row plan-wrapper" 
                @click="activeBox('premium')"
                :class="{'active-premium': activeBoxType === 'premium'}">
                <img :src="premium" alt="premium" height="70px" />
                <div>
                    <h5 class="plan-heading d-flex justify-content-between">
                        <span>Premium</span>
                        <span class="primary-text">$25/month</span>
                    </h5>
                    <p class="plan-text">Protect items up to $25,000</p>
                </div>
            </div>        
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import clock from './../../assets/images/clock.svg';
import trash from './../../assets/images/trash.svg';
import standard from './../../assets/images/standard.svg';
import premium from './../../assets/images/premium.svg';
import { useCheckoutStore } from '@/stores/checkoutStore';

const store = useCheckoutStore();
// Use one ref instead of multiple boolean refs
const activeBoxType = ref('');

const activeBox = (type) => {
    console.log("Clicked on:", type);
    activeBoxType.value = type;
    if(type == 'not_now'){
        store.protectionPlan.push({
            id: "protection_plan_1",
            price: 0,
            type: "Not Now Disposal"
        })
    }
    else if(type == 'yes_please'){
        store.protectionPlan.push({
            id: "protection_plan_2",
            price: 50,
            type: "Disposal Needed"
        })
        store.totalPrice = store.totalPrice + 50;
    }
    else if(type == 'standard'){
        store.protectionPlan.push({
            id: "protection_plan_3",
            price: 15,
            type: "Standard Protection Plan"
        })
        store.totalPrice = store.totalPrice + 15;
    }
    else if(type == 'premium'){
        store.protectionPlan.push({
            id: "protection_plan_4",
            price: 25,
            type: "Premium Protection Plan"
        })
        store.totalPrice = store.totalPrice + 25;
    }

    console.log("store protection plan", store.protectionPlan)

};
</script>

<style scoped>
.plan-heading {
    color: black;
    font-size: 1.2rem;
    font-weight: 700;
}
.plan-text {
    color: black;
    font-size: 1rem;
    font-weight: 400;
}
.plan-wrapper {
    width: 400px;
    height: 120px;
    gap: 15px;
    border: 1px solid rgb(214, 213, 213);
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

/* Active State Styling */
.active-not-now, .active-yes, 
.active-standard, .active-premium {
    background-color: #e7f7f5;
    border: 2px solid var(--primary-color);
    transform: scale(1.01);
}
.primary-text {
    color: var(--primary-text) !important;
}
</style>
