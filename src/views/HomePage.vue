<script setup>
import CustomizableSoln from '@/components/home/CustomizableSoln.vue';
import Footer from '@/components/home/Footer.vue';
import Header from '@/components/home/Header.vue';
import HelpSection from '@/components/home/HelpSection.vue';
import HowItWorks from '@/components/home/HowItWorks.vue';
import Navbar from '@/components/home/Navbar.vue';
import Partners from '@/components/home/Partners.vue';
import PreFooter from '@/components/home/PreFooter.vue';
import Testimonial from '@/components/home/Testimonial.vue';
import { useSchoolStore } from "./../stores/SchoolStore";
import Cupon from '@/components/schools/Cupon.vue';
import Pricing from '@/components/schools/Pricing.vue';
import Instructions from '@/components/schools/Instructions.vue';
import FAQs from '@/components/schools/FAQs.vue';

const schoolStore = useSchoolStore();

</script>
<template>
    <Navbar />
    <Header />
    <Partners v-if="schoolStore.selectedSchool == ''" />
    <Cupon v-else />
    <CustomizableSoln v-if="schoolStore.selectedSchool == ''" />
    <HowItWorks />
    <div v-if="schoolStore.selectedSchool == ''">
        <Testimonial  />
        <HelpSection />
        <PreFooter />
    </div>
    <div v-else>
        <Pricing  />
        <Instructions />
        <FAQs />
    </div>
    <Footer />
</template>
<style scoped>
</style>