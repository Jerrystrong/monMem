<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';
// import navigation from './components/navigation.vue';
const isNotconnected=ref(true)
</script>

<template>
  
    <!-- <navigation v-if="isNotconnected"/> -->
  <RouterView />
</template>

<style scoped>

</style>
