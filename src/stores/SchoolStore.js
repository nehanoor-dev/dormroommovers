// src/stores/schoolStore.js
import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useSchoolStore = defineStore("schoolStore", () => {
  // Load the saved school from localStorage (if it exists)
  const savedSchool = localStorage.getItem("selectedSchool") || "";

  const selectedSchool = ref(savedSchool); // Holds the selected school name

  function setSchool(schoolName) {
    selectedSchool.value = schoolName;
    localStorage.setItem("selectedSchool", schoolName); // Save to localStorage
  }

  return { selectedSchool, setSchool };
});
