<template >
    <MainPage v-if="mainPage" />

    <slot v-else/>


</template>
<script setup>

let headers=useRequestHeaders(["host"])
let host=useState("hostname",()=>(headers.host)||window.location.host)

let mainPage = ref(host.value.split(".").length < 3) 

</script>