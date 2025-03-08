<template>
  <div class="search-container pb-5">
    <h5 class="address-heading">
      1. Tell us where to collect your stuff from.
    </h5>
    <input
      v-model="query"
      @input="fetchSuggestions"
      type="text"
      class="search-bar"
      placeholder="Enter address in Canada"
    />
    <ul v-if="suggestions.length" class="suggestions-list">
      <li
        v-for="(suggestion, index) in suggestions"
        :key="index"
        @click="selectAddress(suggestion)"
      >
        {{ suggestion.display_name }}
      </li>
    </ul>

    <p v-if="!activeManual" class="p-2">
      Or <span @click="activeManual = true" class="manual-text">Enter Manually</span>
    </p>
    <div v-if="activeManual">
      <div class="form-group">
        <input
          v-model="store.form.firstName"
          class="search-bar-small"
          type="text"
          id="firstName"
          placeholder="First Name *"
          required
        />
        <input
          v-model="store.form.lastName"
          class="search-bar-small"
          type="text"
          id="lastName"
          placeholder="Last Name *"
          required
        />
      </div>

      <div class="form-group">
        <input
          v-model="store.form.buildingName"
          type="text"
          id="buildingName"
          required
          placeholder="Building Name *"
          class="search-bar-small"
        />
        <input
          v-model="store.form.address1"
          type="text"
          class="search-bar-small"
          id="address1"
          placeholder="Address Line 1 *"
          required
        />
      </div>

      <div class="form-group">
        <input
          v-model="store.form.address2"
          class="search-bar-small"
          type="text"
          id="address2"
          placeholder="Address Line 2"
        />
        <input
          v-model="store.form.town"
          class="search-bar-small"
          type="text"
          id="town"
          placeholder="Town *"
          required
        />
      </div>

      <div class="form-group">
        <input
          v-model="store.form.postCode"
          class="search-bar"
          type="text"
          id="postCode"
          placeholder="Postcode *"
          required
        />
      </div>

      <div class="form-group">
        <textarea
          v-model="store.form.specialInstructions"
          id="instructions"
          placeholder="Special Instructions"
          class="search-bar"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useCheckoutStore } from "./../../stores/checkoutStore";

const store = useCheckoutStore();
const query = ref("");
const suggestions = ref([]);
const activeManual = ref(false);
const API_KEY = "pk.7f29efb7b3cc81f36278f3ad7b785dd1";

const form = ref({
  firstName: "",
  lastName: "",
  buildingName: "",
  address1: "",
  address2: "",
  town: "",
  postCode: "",
  specialInstructions: "",
});

const fetchSuggestions = async () => {
  if (query.value.length < 3) {
    suggestions.value = [];
    return;
  }

  try {
    const response = await axios.get(
      `https://api.locationiq.com/v1/autocomplete.php?key=${API_KEY}&q=${query.value}&countrycodes=ca&format=json`
    );
    suggestions.value = response.data;
  } catch (error) {
    console.error("Error fetching suggestions:", error);
  }
};

const selectAddress = (suggestion) => {
  query.value = suggestion.display_name;
  suggestions.value = [];
  activeManual.value = true; // Activate manual input

  // Populate form fields with API data
  store.form.address1 = suggestion.address?.road || "";
  store.form.address2 = suggestion.address?.neighbourhood || "";
  store.form.buildingName = suggestion.address?.building || "";
  store.form.town = suggestion.address?.city || suggestion.address?.town || "";
  store.form.postCode = suggestion.address?.postcode || "";

  // Store address in checkout store
  store.address = suggestion.display_name;

  console.log("Selected Address:", suggestion);
};
</script>

<style scoped>
.search-container {
  width: 100%;
  margin: auto;
  position: relative;
}
.search-bar {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 2px solid #c1c0c0;
  outline: none;
  margin: 2px;
}
.search-bar-small {
  width: 50%;
  padding: 8px;
  font-size: 16px;
  border: 2px solid #c1c0c0;
  outline: none;
  margin: 2px;
}
.suggestions-list {
  list-style: none;
  padding: 0;
  margin: 5px 0;
  background: #fff;
  border: 1px solid #ccc;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  width: 100%;
}
.suggestions-list li {
  padding: 10px;
  cursor: pointer;
}
.suggestions-list li:hover {
  background: #f0f0f0;
}
.address-heading {
  font-size: 1rem;
  color: black;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 40px;
}
.form-group {
  display: flex;
  flex-direction: row;
}

.manual-text {
    text-decoration: underline;
    cursor: pointer;
}
</style>
