<script setup>
import { storeToRefs } from "pinia";
import { ref, computed, onMounted } from "vue";
import { useCheckoutStore } from "@/stores/checkoutStore";

const store = useCheckoutStore();
// Get today's date
const today = new Date();
today.setHours(0, 0, 0, 0);

const currentYear = ref(today.getFullYear());
const currentMonth = ref(today.getMonth());
const selectedDates = ref(store.selectedDate || []);
const showArrivalWindow = ref(false);
const activeArrival = ref(false);
const selectedArrivalType = ref(null); // Stores 'flexible' or 'scheduled'
const selectedStoreDate = ref(null); // Stores selected date

// Weekday names
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const timeRange = ref([
  "07:00 to 18:00",
  "07:00 to 18:00",
  "07:00 to 18:00",
  "07:00 to 18:00",
  "07:00 to 18:00",
  "07:00 to 18:00",
  "07:00 to 18:00",
  "07:00 to 18:00",
  "07:00 to 18:00",
]);
// Get month name
const getMonthName = (monthIndex) => {
  return new Date(0, monthIndex).toLocaleString("default", { month: "long" });
};

onMounted(() => {
  console.log("selected date in store", store.selectedDate);
});
// Compute days for the selected month
const daysInMonth = computed(() => {
  const days = [];
  const firstDay = new Date(currentYear.value, currentMonth.value, 1);
  const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0);
  const firstWeekday = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.

  // Empty slots for the first week
  for (let i = 0; i < firstWeekday; i++) {
    days.push(null);
  }

  // Fill days of the month
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = new Date(currentYear.value, currentMonth.value, i);
    date.setHours(0, 0, 0, 0); // Normalize time

    // if(store.selectedDate != null) {
    days.push({
      date,
      // isPast: date < today,
      // isSelected: selectedDates.value.includes(date.toDateString()),
      isSelected: store.selectedDate?.some(
        (d) => d.toDateString() === date.toDateString()
      ),
      isPast:
        date < today ||
        (store.selectedDate && date > new Date(store.selectedDate)),
    });
    // }
    // else {
    //   days.push({
    //   date,
    //   isPast: date < today,
    //   isSelected: selectedDates.value.includes(date.toDateString()),
    //   // isSelected: store.selectedDate?.some(d => d.toDateString() === date.toDateString()),
    //   // isPast: date < today || (store.selectedDate && date > new Date(store.selectedDate)),
    // });
    // }
    //   days.push({
    //   date,
    //   isPast: date < today,
    //   isSelected: selectedDates.value.includes(date.toDateString()),
    // });
  }

  return days;
});

// Move to next month
const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value++;
  } else {
    currentMonth.value++;
  }
};

// Move to previous month
const prevMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
};

// Function to select a date in sequence
const selectDate = (day) => {
  if (!day || day.isPast) return;
  showArrivalWindow.value = true;
  store.selectedDate = [day.date];
  selectedDates.value = day.date.toDateString();
  selectedArrivalType.value = null; // Reset selection
  selectedStoreDate.value = null; // Reset stored date
  console.log(typeof day.date, [day.date]);
};

const activeBox = (type) => {
  selectedArrivalType.value = type;
  if (type === "flexible") {
    selectedStoreDate.value = {
      date: selectedDates,
      type: "flexible",
    };
    store.date.push(selectedStoreDate.value);
    console.log("selected store", selectedStoreDate.value);
  }
};

const scheduledTime = (time) => {
  selectedStoreDate.value = {
    date: selectedDates,
    time: time,
    type: "scheduled",
  };
  store.date.push(selectedStoreDate.value);
  store.totalPrice = store.totalPrice + 29;
  console.log("selected store", selectedStoreDate.value);
};

// Show a month & year picker dropdown
const showMonthYearPicker = ref(false);
</script>

<template>
  <div class="calendar">
    <h2 class="calendar-heading">Pickup Appointment</h2>
    <p class="calendar-text text-center">This is when you pickup your items.</p>
    <div class="d-flex flex-direction-row justify-content-between">
      <div class="calendar-inner">
        <!-- Month & Year Selector with Previous and Next Buttons -->
        <div class="calendar-header">
          <button @click="prevMonth" class="btn">❮</button>
          <button
            class="month-year-btn"
            @click="showMonthYearPicker = !showMonthYearPicker"
          >
            {{ getMonthName(currentMonth) }} {{ currentYear }}
          </button>
          <button @click="nextMonth" class="btn">❯</button>
        </div>

        <!-- Month & Year Dropdown -->
        <div v-if="showMonthYearPicker" class="dropdown">
          <div class="dropdown-content">
            <label>Month</label>
            <select v-model="currentMonth">
              <option v-for="(month, index) in 12" :key="index" :value="index">
                {{ getMonthName(index) }}
              </option>
            </select>

            <label>Year</label>
            <select v-model="currentYear">
              <option
                v-for="year in [
                  today.getFullYear(),
                  today.getFullYear() + 1,
                  today.getFullYear() + 2,
                ]"
                :key="year"
              >
                {{ year }}
              </option>
            </select>
          </div>
        </div>

        <!-- Weekday Headers -->
        <div class="weekdays">
          <div v-for="day in weekdays" :key="day" class="weekday">
            {{ day }}
          </div>
        </div>

        <!-- Calendar Grid -->
        <div class="calendar-grid">
          <div
            v-for="(day, index) in daysInMonth"
            :key="index"
            class="day"
            :class="{
              disabled: day?.isPast,
              selected: day?.isSelected,
              'pickup-selected': store.step == 4 && day?.isSelected,
            }"
            @click="selectDate(day)"
          >
            <span v-if="day">{{ day.date.getDate() }}</span>
            <span v-if="day?.isSelected" class="free-label">Free</span>
          </div>
        </div>
      </div>

      <div v-if="showArrivalWindow">
        <h5 class="calendar-sub-heading">Select an arrival window</h5>
        <div>
          <div
            class="time-box"
            @click="activeBox('flexible')"
            :class="{ 'time-box-active': selectedArrivalType === 'flexible' }"
          >
            <div class="d-flex flex-direction-row justify-content-between">
              <p class="calendar-sub-heading m-0">Flexible Arrival</p>
              <p class="price-text m-0">Free</p>
            </div>
            <p class="calendar-text">
              Receive a 3-hour arrival window the day before your appointment.
              The earliest possible arrival is at 7 AM and the latest possible
              arrival is at 3 PM.
            </p>
          </div>

          <div
            class="time-box"
            @click="activeBox('scheduled')"
            :class="{ 'time-box-active2': selectedArrivalType === 'scheduled' }"
          >
            <div class="d-flex flex-direction-row justify-content-between">
              <p class="calendar-sub-heading m-0">Scheduled Arrival</p>
              <p class="price-text m-0">$29</p>
            </div>
            <p class="calendar-text">
              Select a set arrival window. Limited availability.
            </p>
          </div>

          <!-- Show Scheduled Message -->
          <div class="scheduled-container">
            <div
              v-if="selectedArrivalType === 'scheduled'"
              class="scheduled-message"
              v-for="(time, index) in timeRange"
              :key="index"
            >
              <button class="scheduled-btn" @click="scheduledTime(time)">
                {{ time }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendar {
  text-align: center;
  /* max-width: 450px; */
  margin: auto;
  background: #fff;
  padding: 15px;
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.month-year-btn {
  font-size: 16px;
  font-weight: bold;
  padding: 5px 15px;
  cursor: pointer;
  border: none;
  color: var(--primary-color);
}
.btn {
  color: var(--primary-color);
  font-weight: 700;
}

button {
  cursor: pointer;
  background: none;
  border: none;
  font-size: 20px;
  padding: 5px 10px;
}

button:hover {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

/* Month & Year Dropdown */
.dropdown {
  text-align: center;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.dropdown-content {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.dropdown label {
  font-size: 14px;
  font-weight: bold;
}

.dropdown select {
  padding: 5px;
  font-size: 14px;
}

/* Weekday Headers */
.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: 500;
  padding: 5px 0;
  color: black;
  font-size: 0.75rem;
}

/* Calendar Grid */
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  margin-top: 5px;
  background-color: rgb(244, 244, 244);
  padding: 10px;
  border-radius: 5px;
}

.day {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e4e4e4;
  cursor: pointer;
  position: relative;
  font-size: 14px;
  border-radius: 5px;
  background-color: rgb(247, 245, 245);
}

.day.disabled {
  color: rgb(134, 133, 133);
  pointer-events: none;
  background: #d9d6d6;
}

.day.selected {
  background: var(--primary-color);
  color: white;
  pointer-events: none;
}

.free-label {
  position: absolute;
  top: 28px;
  font-size: 12px;
  color: white;
  font-weight: 600;
}

.selected-dates {
  margin-top: 15px;
  font-size: 14px;
}
.calendar-heading {
  font-size: 1.2rem;
  font-weight: 700;
  color: black;
}
.calendar-text {
  font-weight: 400;
  color: black;
  font-size: 0.9rem;
}
.calendar-sub-heading {
  font-size: 0.8rem;
  color: black;
  font-weight: 700;
}
.calendar-text {
  font-size: 0.7rem;
  color: black;
  font-weight: 400;
  display: flex;
  text-align: left;
}
.price-text {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--primary-color);
}
.time-box-active {
  border: 3px solid var(--primary-color) !important;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  background-color: #e7f7f5;
}
.time-box-active2 {
  border: 3px solid var(--primary-color) !important;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  background-color: #e7f7f5;
}
.time-box {
  border: 1px solid rgb(213, 211, 211);
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}
/* .scheduled-message {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2px;
} */
.scheduled-btn {
  background-color: var(--primary-color);
  font-size: 0.55rem;
  color: black;
  font-weight: 500;
  border-radius: 5px;
}
.scheduled-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.pickup-selected {
  background-image: var(--secondary-color);
  pointer-events: none;
}
</style>
