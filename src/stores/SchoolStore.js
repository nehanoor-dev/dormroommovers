// import { defineStore } from "pinia";
// import { ref, watch } from "vue";
// import { useRoute } from "vue-router";

// export const useSchoolStore = defineStore("schoolStore", () => {
//   const savedSchool = localStorage.getItem("selectedSchool") || "";
//   const selectedSchool = ref(savedSchool);

//   function setSchool(schoolName) {
//     selectedSchool.value = schoolName;
//     localStorage.setItem("selectedSchool", schoolName);
//   }

//   function clearSchool() {
//     selectedSchool.value = "";
//     localStorage.removeItem("selectedSchool");
//   }

//   const route = useRoute();

//   // Watch for route changes and clear school if not on school-specific page
//   watch(
//     () => route.path,
//     (newPath) => {
//       if (!newPath.includes("/landing/")) {
//         clearSchool();
//       }
//     }
//   );

//   return { selectedSchool, setSchool, clearSchool };
// });

import { defineStore } from "pinia";
import { ref } from "vue";

export const useSchoolStore = defineStore("schoolStore", () => {
  // Load the saved school from sessionStorage (if it exists)
  const savedSchool = sessionStorage.getItem("selectedSchool") || "";

  const selectedSchool = ref(savedSchool); // Holds the selected school name

  function setSchool(schoolName) {
    selectedSchool.value = schoolName;
    sessionStorage.setItem("selectedSchool", schoolName); // Save to sessionStorage
  }

  return { selectedSchool, setSchool };
});

