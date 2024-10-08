<template>
     <div class="detection p-1 flex gap-2">
        <div class="imageCont self-center">
            <slot name="imageDetected"></slot>
        </div>
        <div>
            <h4 class="text-[14px] font-bold  font-pri">Face detected</h4>
            <p class="text-[14px]  font-pri">{{ options.faceDetected }}</p>
        </div>
        <div>
            <h4 class="text-[14px] font-bold  font-pri">Status</h4>
            <p class="text-[14px]  font-pri" :class="{'text-reds':options.status=='inconnu','text-greenLight-500':options.status=='connu'}">{{ options.status }}</p>
        </div>
        <div>
            <h4 class="text-[14px] font-bold  font-pri">Heure</h4>
            <p class="text-[14px]  font-pri">{{ options.time}}</p>
        </div>
    </div>
</template>
<script setup>
    defineProps({
        options:Object
    })
</script>