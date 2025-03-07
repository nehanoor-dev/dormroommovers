<script setup></script>
<template>
    <div class="footer-container">
       <div class="icons-links">
        <font-awesome-icon :icon="['fab', 'youtube']" size="2xl" style="color: #ffffff;" />
        <font-awesome-icon :icon="['fab', 'facebook-f']" size="2xl" style="color: #ffffff;" />
        <font-awesome-icon :icon="['fab', 'instagram']" size="2xl" style="color: #ffffff;" />
        <font-awesome-icon :icon="['fab', 'tiktok']" size="2xl" style="color: #ffffff;" />
       </div>
       <div class="text-links">
        <div class="text-links-left">
            <a href="#">Blog</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Consent Preferences</a>
            <a href="#">Terms of Service</a>
            <a href="#">FAQs / Help Center</a>
            <a href="#">Jobs</a>
        </div>
        <div class="text-links-right">
            <a href="#">Ambassadors</a>
            <a href="#">Testimonials</a>
            <a href="#">Marketing Opportunities</a>
            <a href="#">Campus Partnership</a>
            <a href="#">About Us</a>
        </div>
       </div>
       <div class="bottom-links">
        <a href="#">Contact Us</a>
        <a href="#">888.769.3676</a>
        <a href="#">support@dormroommovers.com</a>
       </div>
       <div></div>
    </div>
</template>
<style scoped>
.footer-container {
    background-color: #20A18A;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 70vh;
}
.icons-links {
    display: flex;
    gap: 20px;
    cursor: pointer;
}
.text-links {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 30px;
    gap: 80px;
}
a {
    text-decoration: none;
    color: white;
    font-size: 14px;
    padding: 3px;
}
.text-links-left {
    display: flex;
    flex-direction: column;
}
.text-links-right {
    display: flex;
    flex-direction: column;
}
.bottom-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>