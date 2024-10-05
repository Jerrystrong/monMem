<script setup>
import { ref } from 'vue';
import SimpleInput from '../components/simpleInput.vue';
const navHash=(e)=>{
    console.log('click')
    let currentUrl=ref(window.location.hash)
    window.addEventListener('hashchange',function(){
        currentUrl.value = window.location.hash
        console.log('click!!')
        console.log(currentUrl.value)
        this.location.assign(currentUrl.value.slice(1))
    })
}
</script>
<template>
    <div class="w-screen h-screen flex justify-center items-center">
       <div class="flex flex-col items-center gap-3 w-[250px] content-center">
        <h2>SecureAIOp</h2>
        <button id="googleLog" 
        class="border border-solid border-greenLight-400 font-bold
         w-full flex gap-2 px-3 text-[14px] justify-center
         hover:bg-greenLight-400 hover:text-green-50 transition-all">
            <img src="/google.png" alt="google-icon">
            Sing in with google
        </button>
        <div id="separator" class="flex items-center gap-1 text-[14px] w-full">
            <div class="line w-[20%]"></div>ou avec votre email
            <div class="line w-[20%]"></div>
        </div>
        <form action="" class="font-a p-3 rounded-lg grid gap-3 w-full">
            <SimpleInput :label="{label:'E-mail',type:'email',text:'Votre email',name:'userEmail'}">
                <template #iconForm>
                    <img src="/user.svg" alt="user-icon">
                </template>
            </SimpleInput>
            <SimpleInput :label="{label:'Mot de passe',type:'password',text:'Votre mot de passe',name:'userPw'}">
                <template #iconForm>
                    <img src="/passIcon.svg" alt="user-icon">
                </template>
            </SimpleInput>
            <input type="submit" value="Se connecter" class="p-1 rounded-lg font-bold cursor-pointer transition-all bac-btn">
        </form>
        <div class="p-2 text-[14px] rounded-lg text-center bac-transparent">
            <p>Je suis nouveau à cet application </p>
            <a href="/signup" class="text-greenLight-500">Créer un compte</a>
        </div>
       </div>
    </div>
</template>
<style>
    .line{
        display: block;
        height: 1px;
        widows: 20%;
        background: #FFDA79;
    }
    .font-a{
        background: linear-gradient(180deg,rgba(119, 186, 170, 0.1) 5%,rgb(102, 160, 146,0.1) 36%,rgb(86, 135, 123,.1) 64%,rgb(119, 186, 170,.1) 100%);
    }
    .bac-btn{
        background: linear-gradient(45deg,#77BAAA 0,#77baaa1a);
    }
    .bac-btn:hover{
        transform: scale(1.02);
    }
    .bac-transparent{
        background:rgb(94, 146, 133,0.1);
    }
</style>