<script setup>
import { ref } from "vue";

const collapsed = ref({});

const data_2 = ref([
  {
    id: 1,
    question: "What items can I store?",
    answer:
      "We'll pick up nearly anything you have such as furniture, TVs, mini fridges and bicycles, with a couple exceptions, no live animals or illegal items please!",
  },
  {
    id: 2,
    question: "Can I use your services even if I live off campus?",
    answer:
      "Absolutely! We help students in Greek life, apartments, and off-campus housing all the time!",
  },
  {
    id: 4,
    question: "How does pricing work?",
    answer:
      "Pricing is per item we pick up and includes storage up to 4 months. Only pay for the items we pick up. Pricing for items is split into 5 tiers based on size and includes pickup & delivery on one of our featured dates. To view the full pricing list click here.",
  },
  {
    id: 5,
    question: "Are my items protected?",
    answer:
      "Yep! Items placed in storage are covered for up to $150 based on our terms and conditions. Electronics need to be in original packaging to be covered. Each box you ship will have a declared value of $150 with UPS. Items must be packed in accordance with UPS packing requirements to be covered.",
  },
]);

const data_1 = ref([
  {
    id: 6,
    question: "Can I use my own boxes also?",
    answer:
      "Of course you can! We like to make it easy on you and send you our kit, which is included with the registration, but you're welcome to use your own boxes as well.",
  },
  {
    id: 7,
    question: "Where are my items stored?",
    answer:
      "Your items are stored in climate-protected commercial warehouses that are secured and fire-protected. We want your items to be safe!",
  },
  {
    id: 8,
    question: "Who does the moving?",
    answer:
      "We send licensed and insured third-party professional movers to collect your items and bring them into storage. They are seasoned professionals and vetted to ensure your belongings' safety and security.",
  },
  {
    id: 9,
    question: "How much stuff can I fit in one of your boxes?",
    answer:
      "Our boxes are large 18' x 18' x 22' (4.125 cubic feet). One of them can hold an entire bedding set, including pillows.",
  },
]);

const toggleCollapse = (id) => {
  collapsed.value[id] = !collapsed.value[id];
};
</script>

<template>
  <div class="faq-section">
    <h1 class="text-center faq-heading">Frequently Asked Questions</h1>
    <div class="faq-container">
      <div class="faq-column">
        <div v-for="item in data_2" :key="item.id" class="faq-item">
          <n-card class="faq-card">
            <h4>
              <span @click="toggleCollapse(item.id)" class="icon m-1">
                <font-awesome-icon
                  :icon="collapsed[item.id] ? 'square-minus' : 'square-plus'"
                  size="lg"
                  style="color: #ef4f24"
                />
              </span>
              {{ item.question }}
            </h4>
            <div v-if="collapsed[item.id]">
              <n-divider></n-divider>
              <h5>{{ item.answer }}</h5>
            </div>
          </n-card>
        </div>
      </div>
      <div class="faq-column">
        <div v-for="item in data_1" :key="item.id" class="faq-item">
          <n-card class="faq-card">
            <h4>
              <span @click="toggleCollapse(item.id)" class="icon m-1">
                <font-awesome-icon
                  :icon="collapsed[item.id] ? 'square-minus' : 'square-plus'"
                  size="lg"
                  style="color: #ef4f24"
                />
              </span>
              {{ item.question }}
            </h4>
            <div v-if="collapsed[item.id]">
              <n-divider></n-divider>
              <h5>{{ item.answer }}</h5>
            </div>
          </n-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* FAQ Section Styling */
.faq-section {
  margin: 0 auto;
  padding: 20px;
  background-color: var(--bg-color);
}

.faq-heading {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

/* Container for FAQ items */
.faq-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

/* Each column for FAQ */
.faq-column {
  flex: 1;
  min-width: 300px;
  max-width: 450px;
}

/* Card Styling */
.faq-card {
  margin: 10px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid rgb(225, 224, 224);
}

/* FAQ Question */
h4 {
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 700;
  color: black;
}
h5 {
  font-size: 1rem;
  font-weight: 400;
  color: black; 
}

/* Responsive Design */
@media (max-width: 768px) {
  .faq-container {
    flex-direction: column;
    align-items: center;
  }

  .faq-column {
    max-width: 100%;
  }
}
</style>
