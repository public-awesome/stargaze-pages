<template >
    <MainPage v-if="mainPage" />

    <slot v-else/>


</template>
<script setup>
let mainPage = ref(false)
let headers=useRequestHeaders(["host"])
let host=useState("hostname",()=>(headers.host)||window.location.host)

mainPage.value = host.value.length < 3

</script>