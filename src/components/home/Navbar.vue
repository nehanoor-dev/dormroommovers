<script setup>
import { ref } from "vue";
import logoPath from "./../../assets/images/header-logo.avif";
import { useDeviceStore } from "./../../stores/counter";
import LoginPopup from "./LoginPopup.vue";
import SearchASchool from "../schools/SearchASchool.vue";
import { useSchoolStore } from "./../../stores/SchoolStore";

const deviceStore = useDeviceStore();
const schoolStore = useSchoolStore();
const logo = ref(logoPath);
const showPopup = ref(false);
const showSchoolPopup = ref(false);

const showLoginPopup = () => {
  showPopup.value = true;
  console.log("popup clickd", showPopup.value);
};

const showSearchASchool = () => {
  showSchoolPopup.value = true;
  console.log("popup clickd", showSchoolPopup.value);
};
</script>

<template>
  <div class="nav-top p-1">
    <p
      class="nav-top-p p-2 text-center"
      :class="{ 'top-txt-mob': deviceStore.isMobile }"
    >
      SAVE 10% on storage until Mar 7th + FREE pickup & delivery dates for a
      limited time.
      <a href="#" class="nav-top-link">Reserve your spot today!</a>
    </p>
  </div>
  <div class="d-flex justify-content-between align-items-center p-3 navbar">
    <div class="navbar-inner">
    <img
      :src="logo"
      alt="logo"
      class="logo-style"
      :class="{ 'logo-mob': deviceStore.isMobile }"
    />
    <div
      v-if="!deviceStore.isMobile"
      class="d-flex justify-content-center align-items-center navbar-wrapper"
    >
      <a class="list-item" @click.prevent="showSearchASchool()">HOW IT WORKS</a>
      <a class="list-item" @click.prevent="showSearchASchool()">PRICING</a>
      <div v-if="schoolStore.selectedSchool == ''">
        <a class="list-item" @click.prevent="showSearchASchool()">SERVICE</a>
        <a class="list-item" @click.prevent="showSearchASchool()">CAMPUSES</a>
      </div>
      <div v-else>
        <a class="list-item" @click.prevent="showSearchASchool()">{{
          schoolStore.selectedSchool
        }}</a>
      </div>
      <a class="list-item" @click.prevent="showSearchASchool()"
        >CHANGE SCHOOL</a
      >

      <div class="d-flex btn-div">
        <button class="primary-btn" @click.prevent="showSearchASchool()">
          GET STARTED
        </button>
        <div>or <span class="phone-txt">CALL 888.769.3676</span></div>
      </div>
      <a class="list-item" @click.prevent="showLoginPopup()">LOGIN</a>
    </div>
    <div v-else>
      <span class="mob-phone p-2">888.769.3676</span>
      <font-awesome-icon :icon="['fas', 'bars']" size="2xl" />
    </div>
  </div>
    <div v-if="showPopup">
      <login-popup v-model="showPopup"></login-popup>
    </div>
    <div v-if="showSchoolPopup">
      <search-a-school v-model="showSchoolPopup" />
    </div>
  </div>
</template>
<style scoped>
.nav-top {
  background-color: var(--primary-color);
  color: var(--light-text-color);
  /* position: fixed; */
  width: 100%;
}
.navbar-wrapper {
  gap: 2rem;
}
.nav-top-p {
  margin: 0;
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-normal);
  letter-spacing: 0.01em;
}
.nav-top-link {
  text-decoration: underline;
  color: var(--light-text-color);
}
.logo-style {
  max-height: 75px;
  max-width: 200px;
  margin-right: 100px;
}
.phone-txt {
  color: var(--secondary-color);
  font-weight: 600;
  font-size: 0.9rem;
}
.btn-div {
  flex-direction: column;
}
.list-item {
  color: var(--grey-font-color);
  letter-spacing: 0.1px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
}
.list-item:hover {
  color: var(--secondary-color);
}
.top-txt-mob {
  font-size: 1rem;
}
.logo-mob {
  max-height: 35px;
  min-width: 25px;
}
.mob-phone {
  color: var(--secondary-color);
  font-weight: 700;
  font-size: 1rem;
}
.navbar-inner {
  display: flex;
  flex-direction: row;
}
@media (max-width: 1024px) {
  .navbar-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
.logo-style {
  justify-self: center;
  display: inline-block;
  margin: auto;
}
}
@media (max-width: 700px) {
  .navbar-wrapper {
    display: none;
  }
}
</style>
