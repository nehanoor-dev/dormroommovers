<template>
        <div class="container-fluid py-4 py-lg-5 px-4 stats-sec">
        <div class="text-center">
            <h2 class="ml-3 fw-bold">100K+</h2>
            <h5 class="fw-light">Students<br>Served</h5>
        </div>
        <div class="text-center">
            <h2 class="ml-5 fw-bold">500K+</h2>
            <h5 class="fw-light">Items<br>Stored</h5>
        </div>
        <div class="text-center">
            <h2 class="fw-bold">2007</h2>
            <h5 class="fw-light">Moving<br>Since</h5>
        </div>
    </div>
</template>
<style scoped>
.stats-sec {
    background-color: var(--secondary-color);
    color: var(--light-text-color);
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 90px;
}
.fw-bold {
    font-weight: 700;
}
.fw-light {
    font-weight: 500;
}
</style>