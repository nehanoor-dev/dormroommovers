<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import trustpilot from './../../assets/images/trustpilot.svg';

const testimonials = ref([
  {
    id: 1,
    heading: "Jack was extremely helpful",
    text: "Jack was extremely helpful, and everything panned out smoothly.",
    name: "Shreeyas Bhatia",
    date: "21 January"
  },
  {
    id: 2,
    heading: "Great Service",
    text: "The process was seamless, and I got everything I needed.",
    name: "Emma Watson",
    date: "5 February"
  },
  {
    id: 3,
    heading: "Highly Recommend",
    text: "Would definitely use this service again. Thank you!",
    name: "John Doe",
    date: "10 March"
  },
  {
    id: 4,
    heading: "Amazing Experience",
    text: "Very professional and reliable. Highly satisfied.",
    name: "Sophia Lee",
    date: "8 April"
  },
  {
    id: 5,
    heading: "Super Convenient",
    text: "Saved me so much time and effort. Fantastic service!",
    name: "Michael Brown",
    date: "15 May"
  }
]);

const currentIndex = ref(0);
const visibleCount = ref(3); // Default to 3 for large screens

// Function to update visibleCount based on screen size
const updateVisibleCount = () => {
  const width = window.innerWidth;
  if (width >= 1024) {
    visibleCount.value = 3;
  } else if (width >= 768) {
    visibleCount.value = 2;
  } else {
    visibleCount.value = 1;
  }
};

// Compute the visible testimonials dynamically
const visibleTestimonials = computed(() => {
  return testimonials.value.slice(currentIndex.value, currentIndex.value + visibleCount.value);
});

// Next button function
const next = () => {
  if (currentIndex.value < testimonials.value.length - visibleCount.value) {
    currentIndex.value++;
  }
};

// Previous button function
const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

// Update visible testimonials when screen resizes
onMounted(() => {
  updateVisibleCount();
  window.addEventListener("resize", updateVisibleCount);
});

// Cleanup event listener when component unmounts
onUnmounted(() => {
  window.removeEventListener("resize", updateVisibleCount);
});
</script>

<template>
  <div class="testimonial-container">
    <h3 class="text-center testimonial-heading mt-5">Used by over 120,000 customers</h3>
    <h5 class="text-center testimonial-text px-5 mx-5 mt-3">
      From London to Edinburgh, we offer the alternative to self-storage across the UK.
      Check out what our customers have to say about our storage pick-up and delivery services.
    </h5>

    <div class="testimonial-wrapper">
      <div class="testimonial-inner">
        <h3 class="excellent-heading">Excellent</h3>
        <div class="stars">
            <font-awesome-icon v-for="n in 5" :key="n" :icon="['fas', 'star']" class="star" />
          </div>
          <p class="ex-para">Based on 5175 reviews</p>
          <img :src="trustpilot" alt="trustpilot"  height="50px" width="140px"/>
      </div>
      <button @click="prev" class="nav-btn left" :disabled="currentIndex === 0">
        ❮
      </button>

      <div class="testimonial-list">
        <div v-for="item in visibleTestimonials" :key="item.id" class="testimonial-card">
          <div class="stars">
            <font-awesome-icon v-for="n in 5" :key="n" :icon="['fas', 'star']" class="star" />
          </div>
          <h5 class="item-heading">{{ item.heading }}</h5>
          <p class="item-text">{{ item.text }}</p>
          <p class="item-text-inner"><strong>{{ item.name }}</strong>, {{ item.date }}</p>
        </div>
      </div>

      <button @click="next" class="nav-btn right" :disabled="currentIndex >= testimonials.length - visibleCount">
        ❯
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Container Styles */
.testimonial-container {
  padding: 2rem;
  text-align: center;
}

.testimonial-heading {
  font-size: 1.5rem;
  font-weight: bold;
}

.testimonial-text {
  font-size: 1rem;
  margin-bottom: 20px;
  font-weight: 400;
}

/* Wrapper for carousel */
.testimonial-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  border: 1px solid #ddd;
}

/* Testimonials Grid */
.testimonial-list {
  display: flex;
  gap: 20px;
  overflow: hidden;
  max-width: 80%;
}

/* Individual Testimonial Card */
.testimonial-card {
  flex: 0 0 auto;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  background: white;
  text-align: left;
}

/* Star Rating */
.stars {
  display: flex;
  gap: 2px;
  color: #ffffff; 
}

.star {
  font-size: 0.7rem;
  background-color: var(--primary-color);
  padding: 4px;
}

/* Navigation Buttons */
.nav-btn {
  font-size: 0.8rem;
  background: none;
  border: none;
  cursor: pointer;
  border: 1px solid var(--dark-text-color);
  border-radius: 50%;
}

.nav-btn:hover {
  color: #fff;
  background-color: var(--primary-color);
  border: 1px solid #fff;
}

.nav-btn:disabled {
  color: rgb(156, 155, 155);
  border: 1px solid rgb(156, 155, 155);
  cursor: not-allowed;
  background: white;
}

.testimonial-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.item-heading {
  font-size: 14px;
  font-weight: 700;
  margin-top: 6px;
}

.item-text {
  font-size: 13px;
  line-height: 16px;
}

.item-text-inner {
  color: var(--grey-font-color);
  font-size: 13px;
}

.excellent-heading {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 8px;
}

.ex-para {
  font-size: 13px;
  margin-top: 8px;
}
</style>
