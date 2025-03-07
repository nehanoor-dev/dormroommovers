<script setup></script>

<template>
    <div class="help-container">
        <h3 class="help-heading text-center mt-5 pt-5">Always here to help</h3>
        <h5 class="help-text px-5 text-center mt-3">
            We make storage easy - so give us a call, email, or contact us on live chat if you've got any questions about 
            storage units, self-storage, or anything else we might help you with!
        </h5>
        <div class="help-section-inner">
            <div class="help-card">
                <font-awesome-icon :icon="['fas', 'headphones']" style="color: #00040a;" size="2xl" />
                <h5 class="inner-heading mt-3">0800 802 1018</h5>
                <p class="inner-text mt-2">Chat with a storage expert about your needs</p>
            </div>
            <div class="help-card">
                <font-awesome-icon :icon="['fas', 'envelope']" size="2xl" style="color: #00040a;" />
                <h5 class="inner-heading mt-3">info@lovespace.co.uk</h5>
                <p class="inner-text mt-2">Get support or request a quote via email</p>
            </div>
            <div class="help-card">
                <font-awesome-icon :icon="['fas', 'message']" size="2xl" style="color: #000205;" />
                <h5 class="inner-heading mt-3">Live Chat</h5>
                <p class="inner-text mt-2">Talk to the team for help booking your storage</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Main container */
.help-container {
    background-color: var(--bg-color);
    padding: 40px 20px;
}

/* Heading styles */
.help-heading {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--dark-text-color);
}

/* Description text */
.help-text {
    font-weight: 400;
    font-size: 1rem;
    max-width: 800px;
    margin: 0 auto;
}

/* Card container - Flexbox */
.help-section-inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    max-width: 100%;
    margin: 30px auto;
}

/* Individual card */
.help-card {
    flex: 1 1 150px; /* Flexible width, min 300px */
    max-width: 230px;
    height: 200px;
    padding: 20px;
    border-radius: 5px;
    background: white;
    text-align: center;
    transition: transform 0.3s ease;
    border: 1px solid #d8d5d5;
}

.inner-heading {
    font-size: 14px;
    font-weight: 700;
}

.inner-text{
    font-size: 13px;
    font-weight: 400;
}
/* Responsive adjustments */
@media (max-width: 768px) {
    .help-section-inner {
        flex-direction: column;
        align-items: center;
    }
}
</style>
