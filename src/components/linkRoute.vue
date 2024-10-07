<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
    const router=useRouter()
    console.log(router.currentRoute.value.params)
    const currentUserId= ref('')
    currentUserId.value=router.currentRoute.value.params['id']
</script>
<template>
    <div>
        
    </div>
</template>