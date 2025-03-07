<template>
  <div class="main-container">
    <div class="video-container">
      <h2 class="text-center top-heading py-2 pt-5">HOW IT WORKS</h2>
      <div v-if="!isPlaying" class="thumbnail" @click="playVideo">
        <img :src="thumbnail" alt="YouTube Thumbnail" class="thumbnail-img" />
        <font-awesome-icon
          :icon="['fab', 'youtube']"
          style="color: #dc1e09"
          class="play-icon"
        />
      </div>
      <iframe
        v-else
        :src="videoUrl"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        class="youtube-video"
      ></iframe>
    </div>
    <div class="pt-2 pt-md-5 px-4 inner-container">
      <div>
        <h3 class="mb-4 sub-container1-heading">
          Register & Receive<br />Your 5 Boxes + Tape
        </h3>
        <h5 v-if="!deviceStore.isMobile" class="sub-text1">
          When you register, Dorm Room<br />Movers will send you a
          <strong>Supply Kit</strong><br />
          containing five signature boxes,<br />useful packing tips, and a roll
          of<br />
          packing tape. Your peace of mind is<br />truly our hightest priority.
        </h5>
        <h5 v-else>No more Searching for boxes!</h5>
        <button
          class="primary-btn custom-btn mt-5"
          :class="{ 'primary-btn-mob': deviceStore.isMobile }"
        >
          GET STARTED
        </button>
      </div>
      <div>
        <img
          v-if="schoolStore.selectedSchool == ''"
          :src="bg1"
          alt="bg"
          width="344"
          height="429"
          :class="{ 'custom-img-1': deviceStore.isMobile }"
        />
        <img
         v-else
         :src="bg1_new"
          alt="bg"
          :class="{ 'custom-img-1': deviceStore.isMobile }"
        />
      </div>
    </div>

    <div
      class="pt-2 pt-md-5 px-4 inner-container2"
      :class="{ 'inner-container-mob': deviceStore.isMobile }"
    >
      <div>
        <img
          v-if="useSchoolStore.selectedSchool == ''"
          :src="bg2"
          alt="bg"
          width="426"
          height="486"
          :class="{ 'custom-img-2': deviceStore.isMobile }"
        />
        <img
          v-else
          :src="bg2_new"
          alt="bg"
          width="426"
          height="486"
          :class="{ 'custom-img-2': deviceStore.isMobile }"
        />
      </div>
      <div class="mt-5">
        <h3 class="mb-4 sub-container1-heading">
          Pack & Schedule<br />Your Pick-up Date
        </h3>
        <h5 class="sub-text1">
          We'll store boxes, bikes, TVs,<br />fridges, furniture & more.
        </h5>
        <button
          class="primary-btn custom-btn mt-5"
          :class="{ 'primary-btn-mob': deviceStore.isMobile }"
        >
          GET STARTED
        </button>
      </div>
    </div>

    <div
      class="pt-2 pt-md-5 px-4 inner-container3"
      :class="{ 'inner-container3-mob': deviceStore.isMobile }"
    >
      <div class="mt-5">
        <h3 class="mb-4 sub-container1-heading">
          Pro Movers Pick-up &<br />Deliver Back to You
        </h3>
        <h5 class="sub-text1">
          You only pay for the items<br />that we pick up.
        </h5>
        <button
          class="primary-btn custom-btn mt-5"
          :class="{ 'primary-btn-mob': deviceStore.isMobile }"
        >
          GET STARTED
        </button>
      </div>
      <div>
        <img
          v-if="useSchoolStore.selectedSchool == ''"
          :src="bg3"
          alt="bg"
          width="482"
          height="368"
          :class="{ 'custom-img-3': deviceStore.isMobile }"
        />
        <img
          v-else
          :src="bg3_new"
          alt="bg"
          :class="{ 'custom-img-3': deviceStore.isMobile }"
        />
      </div>
    </div>

    <div class="main-container4">
      <h3 class="mb-4 sub-container1-heading mt-5">
        We've Got<br />You Covered
      </h3>
      <div class="mt-3">
        <img :src="bg4" alt="bg" width="460" height="360"
        :class="{ 'custom-img-4': deviceStore.isMobile }"/>
      </div>
      <button
        class="primary-btn custom-btn mt-5"
        :class="{ 'primary-btn-mob': deviceStore.isMobile }"
      >
        GET STARTED
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { isMobileDevice } from "./../../assets/js/Utils";
import thumbnail from "./../../assets/images/thumbnail.png";
import bg1 from "./../../assets/images/bg-how-it-works.webp";
import bg2 from "./../../assets/images/bg-pack-and-schedule.webp";
import bg3 from "./../../assets/images/bg-pro-movers.webp";
import bg4 from "./../../assets/images/got-you-covered.webp";
import bg1_new from './../../assets/images/emma_slim.webp';
import bg2_new from './../../assets/images/emma-photo.webp';
import bg3_new from './../../assets/images/aaron_slim.webp';
import { useDeviceStore } from "./../../stores/counter";
import { useSchoolStore } from "./../../stores/SchoolStore";

const deviceStore = useDeviceStore();
const schoolStore = useSchoolStore();

const isMobile = ref(isMobileDevice);
const isPlaying = ref(false);
const videoId = "j8Hvw0-E0XI"; // Replace with your YouTube video ID
const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

onMounted(() => {
  console.log("It is mobile:", deviceStore.isMobile);
});
const playVideo = () => {
  isPlaying.value = true;
};
</script>

<style scoped>
.main-container {
  background-color: var(--bg-color);
  margin: 0;
  padding: 0;
}
.sub-container1-heading {
  font-weight: 700;
}
.sub-text1 {
  font-weight: 400;
}

.video-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: auto;
}

.thumbnail {
  position: relative;
  cursor: pointer;
}

.thumbnail-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  /* background: white; */
}

.youtube-video {
  width: 100%;
  height: 315px;
  border-radius: 10px;
}
.top-heading {
  font-weight: 700;
}
.inner-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.inner-container2 {
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: white;
  gap: 10vh;
}
.inner-container3 {
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: var(--bg-color);
  gap: 10vh;
}
.custom-btn {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 3rem;
  padding-right: 3rem;
}
.inner-container-mob {
  display: flex;
  flex-direction: column-reverse;
}
.inner-container3-mob {
  display: flex;
  flex-direction: column;
}
.main-container4 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
}
.custom-img-1 {
  width: 200px;
  height: 280px;
  margin-top: 1.5rem;
}
.custom-img-2 {
  width: 270px;
  height: 310px;
  margin-left: 15%;
}
.custom-img-3 {
  height: 270px;
  width: 400px;
}
.custom-img-4 {
  height: 230px;
  width: 300px;
}
.primary-btn-mob {
  padding: 0.6rem;
}
</style>
