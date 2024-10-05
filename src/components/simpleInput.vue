<script setup>
import { ref } from 'vue';

defineProps({
    label:Object,
})
</script>
<template>
    <div class="form-group flex flex-col gap-1 fontS text-[14px]">
        <label :for="label.name">{{label.label}}</label>
        <label :for="label.name" class="flex gap-1 p-1 rounded-md relative"
          key="n">
            <slot name="iconForm"></slot>
            <input :type="label.type" :placeholder="label.text" 
            class="bg-transparent placeholder-grayP focus:border-greenLight-400 focus:outline-greenLight-400 w-full absolute top-0 left-0 h-full rounded-md placeholder-shown:text-grayP pl-6 border border-solid border-gray" 
            :name="label.name" :id="label.name" >
        </label>
    </div>
</template>
<style>
.fontS{
        font-family: "Source Code Pro", monospace;;
    }
</style>