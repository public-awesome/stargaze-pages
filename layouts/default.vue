<template >
    <MainPage v-if="mainPage" />

    <slot v-else />


</template>
<script setup>
let mainPage = ref(false)

mainPage.value = window.location.hostname.split(".").length < 3

</script>