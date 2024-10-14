<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue';
// import navigation from './components/navigation.vue';
const isNotconnected=ref(true)
const router= useRouter()
console.log(router)
// router.push({ name: 'about', params: { username: 'erina' } })
</script>

<template>
  
    <!-- <navigation v-if="isNotconnected"/> -->
  <RouterView />
</template>

<style scoped>

</style>
