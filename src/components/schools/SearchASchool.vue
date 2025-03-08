<script setup>
import { ref, computed, onMounted } from "vue";
import { NModal, NInput, NButton, NCard, NAutoComplete, NIcon } from "naive-ui";
import { useSchoolStore } from './../../stores/SchoolStore'

// Props & Emits for modal control
defineProps({ modelValue: Boolean });
defineEmits(["update:modelValue"]);

const schoolStore = useSchoolStore();

// Search input
const searchQuery = ref("");

// Sample data array
const items = ref([
  "Bucknell University",
  "Carnegie Mellon University",
  "Southern Oregon University",
  "Union College",
  "University of Massachusetts Amherst",
  "University of San Francisco",
  "Yale University"
]);

onMounted(() => {
    console.log("schoolStore", schoolStore.selectedSchool)
})

// Filtered results for AutoComplete
const filteredItems = computed(() =>
  items.value.filter((item) =>
    item.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

const handleSelect = (school) => {
  schoolStore.setSchool(school); 
  searchQuery.value = school;
  window.location.reload();
};

</script>

<template>
  <div>
    <!-- Modal -->
    <n-modal
      :show="modelValue"
      @update:show="$emit('update:modelValue', $event)"
      :mask-closable="false"
    >
      <n-card style="width: 100vh; position: relative;" >
        <!-- Close Icon (Top Right) -->
        <n-icon class="close-icon" @click="$emit('update:modelValue', false)">
          <font-awesome-icon
                :icon="['fas', 'xmark']"
                style="color: #a5a6a7; cursor: pointer"
              />
        </n-icon>

        <template #header>
            <h4 class="text-center popup-heading">Step 1:</h4>
            <n-divider></n-divider>
          <h3 class="text-center popup-heading">SEARCH FOR YOUR SCHOOL</h3>
        </template>

        <!-- Search Input with AutoComplete -->
        <n-auto-complete
          v-model:value="searchQuery"
          :options="filteredItems"
          placeholder="Find your school to see how DRM works!"
          clearable
          @select="handleSelect"
          class="autocomplete"
        />
      </n-card>
    </n-modal>
  </div>
</template>

<style scoped>
/* Close Icon Styling */
.close-icon {
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  font-size: 20px;
  color: #666;
  transition: color 0.2s;
}

.close-icon:hover {
  color: #ff5a5a;
}
.popup-heading {
  font-weight: 700;
  font-size: 1.9rem;
  color: black;
}
.autocomplete {
  height: 50px !important;
  font-size: 1rem !important;
}
</style>
