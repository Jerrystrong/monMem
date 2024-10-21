<script setup>
import { ref } from 'vue';
import {fetchD} from '../composable/fetchData.js'
import { useRouter } from 'vue-router';

const router=useRouter()
defineProps({
    validMessage:String,
})
const val1=ref('')
const val2=ref('')
const val3=ref('')
const val4=ref('')
const val5=ref('')
const code=ref('')
const success=ref('')

const showResult = async () => {
    Notification.requestPermission(perm=>{
        if(perm==='granted'){
            new Notification("Compte creer avec success ",{
                body:"Vous avez réusssi un email contenant le code de valisation",
                icon:"/logoSansF.png",
                badge:"/logoSansF.png",
            })
        }
    })
    code.value=val1.value+val2.value+val3.value+val4.value+val5.value

    try {
        const data = await fetchD({ code: code.value }, 'verificationAccount',"POST");
        if(data.status==='success'){
            // router.push(`/app/${data.Data._id}`)
            console.log(data.message)
            if(data.message){
                success.value='Compte verifié avec success' 
                setTimeout(()=>{
                    location.reload()
                },3000)
            }
        }else{
            console.log(data.message)
            success.value=data.message+' nous envoyons un nouveau code'
            stateError.value=data.message
            try {
                const data = await fetchD({ id: router.currentRoute.value.params['id']}, 'resendCode',"POST");
                if(data.status==='success'){
                    // router.push(`/app/${data.Data._id}`)
                    console.log(data.message)
                    if(data.message){
                        success.value='nouveau code envoyé'
                        setTimeout(()=>{
                            location.reload()
                        },1000)
                    }
                }else{
                    console.log(data.message)
                    success.value=data.message
                    stateError.value=data.message
                }

            } catch (error) {
                console.error('Erreur lors de la soumission du formulaire:', error);
            }
        }

    } catch (error) {
        console.error('Erreur lors de la soumission du formulaire:', error);
    }
};
</script>
<template>
    <div class="w-full h-screen flex items-center justify-center fixed backTrans">
        <div class="w-3/4 bg-slate-50 rounded-lg p-4 flex justify-center items-center flex-col  gap-4">
            <h2 class="text-greenLight-500 underline decoration-greenLight-400 decoration-wavy underline-offset-4">Validation Compte</h2>
            <div class="groupeInput flex gap-2">
                <input type="text" class="w-4 border-2 border-solid border-greenLight-500 h-5 text-center rounded-md" v-model="val1">
                <input type="text" class="w-4 border-2 border-solid border-greenLight-500 h-5 text-center rounded-md" v-model="val2">
                <input type="text" class="w-4 border-2 border-solid border-greenLight-500 h-5 text-center rounded-md" v-model="val3">
                <input type="text" class="w-4 border-2 border-solid border-greenLight-500 h-5 text-center rounded-md" v-model="val4">
                <input type="text" class="w-4 border-2 border-solid border-greenLight-500 h-5 text-center rounded-md" v-model="val5">
            </div>
            <button @click="showResult" class="bg-greenLight-500 hover:bg-greenLight-400 text-white">click here</button>
            <p>{{ success }}</p>
        </div>
    </div>
</template>
<style scoped>
    .backTrans{
        background: rgba(0, 0, 0, 0.543);
    }
</style>