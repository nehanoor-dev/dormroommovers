<script setup>
import {ref} from 'vue'
import { useDeviceStore } from "./../../stores/counter";
import { useSchoolStore } from './../../stores/SchoolStore'

const deviceStore = useDeviceStore();
const schoolStore = useSchoolStore();

</script>
<template>
    <div class="bg-header" :class="{'bg-header-school': schoolStore.selectedSchool !== ''}">
        <div class="overlay">
        <div v-if="schoolStore.selectedSchool !== ''" class="header-inner" :class="{'header-inner-mob': deviceStore.isMobile}">
            <p>MOVING + <br>STORAGE +<br>SHIPPING</p>
        </div>
        <div v-else>
            <p>MOVING + <br>STORAGE +<br>SHIPPING FOR<br><span>{{ schoolStore.selectedSchool }}</span></p>
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <button class="primary-btn header-btn fs-2"
            :class="{'primary-btn-mob': deviceStore.isMobile}"
            >GET STARTED
            <font-awesome-icon :icon="['fas', 'caret-right']" style="color: #ffffff;" />
        </button>
        </div>
        <div class=" d-flex justify-content-center align-items-center">
            <h4 class="text-center bottom-txt">Trusted by These Campuses</h4>
        </div>
        </div>
    </div>
    <div class="container-fluid py-4 py-lg-5 px-4 stats-sec">
        <div class="text-center">
            <h2 class="ml-3 fw-bold">100K+</h2>
            <h5 class="fw-light">Students<br>Served</h5>
        </div>
        <div class="text-center">
            <h2 class="ml-5 fw-bold">500K+</h2>
            <h5 class="fw-light">Items<br>Stored</h5>
        </div>
        <div class="text-center">
            <h2 class="fw-bold">2007</h2>
            <h5 class="fw-light">Moving<br>Since</h5>
        </div>
    </div>
</template>
<style scoped>
.bg-header {
    background-image: url('./../../assets/images/bg-top-banner.avif');
    height: 100vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
}
.bg-header-school {
    background-image: url('./../../assets/images/rachel-plus-boxes.webp');
    height: 83vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
}
.header-inner {
    color: var(--light-text-color);
    margin: 0;
    padding: 0;
    position: absolute;
    font-size: 5rem;
    font-weight: 700;
    top: 70px;
    left: 100px;
    line-height: 5rem;
}
.header-btn {
    position: absolute;
    bottom: 160px;
    font-size: (1.325rem + .9vw)!important;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 3rem;
    padding-right: 3rem;
}
.bottom-txt {
    position: absolute;
    text-shadow: 1px 1px #676a6c;
    color: var(--light-text-color);
    bottom: 10px;
}
.stats-sec {
    background-color: var(--secondary-color);
    color: var(--light-text-color);
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 90px;
}
.fw-bold {
    font-weight: 700;
}
.fw-light {
    font-weight: 500;
}
.header-inner-mob {
    font-size: 3.5rem;
    line-height: 3rem;
    top: 170px;
    left: 45px;
}
.primary-btn-mob {
    bottom: 110px;
    left: 45px;
}
/* .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); 
} */

</style>