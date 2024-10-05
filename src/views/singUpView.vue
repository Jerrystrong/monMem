<script setup>
import { ref } from 'vue';
import SimpleInput from '../components/simpleInput.vue';
const step=ref(1);
const userProfil=ref('')
const tempFileName=ref()
const changeVue=()=>{
    step.value++
}
const putFileName=function(e){
        const profil=e.currentTarget.files
        console.log(e.currentTarget.files)
        userProfil.value=profil[0].name
        let fileR=new FileReader()
        fileR.onload=()=>{
            tempFileName.value=fileR.result
        }
        fileR.readAsDataURL(profil[0])
}
</script>
<template>
    <div class="w-screen h-screen flex justify-center items-center">
       <div class="flex flex-col items-center gap-3 w-[250px] content-center">
        <h2>SecureAIOp</h2>
        <div class="stepCont h-1 flex w-full gap-1">
            <div class="step rounded-md h-full w-1/4 cursor-pointer transition-all" :class="{'bg-greenLight-400' : step==1,'font-a hover:bg-green-100':step!==1}" @click="step=1"></div>
            <div class="step rounded-md h-full w-1/2 cursor-pointer transition-all" :class="{'bg-greenLight-400' : step==2,'font-a hover:bg-green-100':step!==2}" @click="step=2"></div>
            <div class="step rounded-md h-full w-1/3 cursor-pointer transition-all" :class="{'bg-greenLight-400' : step==3,'font-a hover:bg-green-100':step!==3}" @click="step=3"></div>
            <div class="step rounded-md h-full w-1/5 cursor-pointer transition-all" :class="{'bg-greenLight-400' : step==4,'font-a hover:bg-green-100':step!==4}" @click="step=4"></div>
        </div>
        <form action="" class="w-full grid gap-3">
            <div class="font-a p-3 rounded-lg grid gap-3" id="step1" v-if="step===1">
                <h3>Creer un compte</h3>
                <SimpleInput :label="{label:'E-mail',type:'email',text:'Votre email',name:'userEmail'}">
                <template #iconForm>
                    <img src="/message.svg" alt="user-icon">
                </template>
                </SimpleInput>
                <SimpleInput :label="{label:'Noms',type:'password',text:'Votre nom',name:'userName'}">
                    <template #iconForm>
                        <img src="/user.svg" alt="user-icon">
                    </template>
                </SimpleInput>
            </div>
            <div class="p-2 text-[14px] rounded-lg text-center bac-transparent" v-if="step===1">
                <p>J’ai déjà un compte </p>
                <a href="/signup" class="text-greenLight-500">Se connecter à votre compte</a>
            </div>

            <div class="font-a p-3 rounded-lg grid gap-3" id="step1" v-if="step===2">
                <h3 class="text-[16px]">User Informations</h3>
                <div class="grid">
                    <label for="genre">Genre</label>
                    <select name="userGenre" id="genre" 
                    class="h-5 rounded-md border border-l-grayP bg-transparent font-bold text-greenLight-500">
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                    <div>
                        <p>Age</p>
                        <label for="age" class="flex gap-1 justify-between">
                            <label class="radio-group flex gap-1 border border-grayP border-solid w-fit p-1 rounded-md">
                                <p class="text-greenLight-500">18 - 35</p>
                                <input type="radio" name="userAge" value="18 - 35">
                            </label>
                            <label class="radio-group flex gap-1 border border-grayP border-solid w-fit p-1 rounded-md">
                                <p class="text-greenLight-500">36 - 65</p>
                                <input type="radio" name="userAge" value="18 - 35">
                            </label>
                        </label>
                    </div>

                    <label for="typeC">Type compte</label>
                    <select name="userAccountType" id="typeC" 
                    class="h-5 rounded-md border border-l-grayP bg-transparent font-bold text-greenLight-500">
                        <option value="homme">Famille</option>
                        <option value="femme">Personnel</option>
                    </select>
                </div>
                
            </div>

            <div class="font-a p-3 rounded-lg grid gap-3" id="step1" v-if="step===3">
                <h3 class="text-[16px]">Paramètre compte</h3>
                <SimpleInput :label="{label:'User name',type:'text',text:'Votre user name',name:'userName'}">
                <template #iconForm>
                    <img src="/user.svg" alt="user-icon">
                </template>
                </SimpleInput>
                <SimpleInput :label="{label:'Password',type:'password',text:'Votre mot de passe',name:'userPw'}">
                <template #iconForm>
                    <img src="/passIcon.svg" alt="user-icon">
                </template>
                </SimpleInput>
                <SimpleInput :label="{label:'Confirm password',type:'password',text:'confirmez le mot de passe',name:'userPw'}">
                <template #iconForm>
                    <img src="/passIcon.svg" alt="user-icon">
                </template>
                </SimpleInput>
            </div>

            <div class="font-a p-3 rounded-lg grid gap-3" id="step1" v-if="step===4">
                <h3 class="text-[16px]">Paramètre avancé</h3>
                <label for="">Profil</label>
                <label for="Profil" class="flex items-center flex-col justify-center relative" v-if="!userProfil">
                    <img src="/saveIco.png" alt="" width="150px">
                    <p class="text-[14px]">Click to select image or drop and drap</p>
                    <input type="file" name="userProfil" id="Profil" class="opacity-0 absolute w-full h-full" @change="putFileName">
                </label>
                <p class="flex gap-2" v-else>
                    <img :src="tempFileName" alt="" width="80px" class="rounded-lg">
                    <span>{{ userProfil }}</span>
                </p>
                <label for="" class="p-2 font-a rounded-lg flex items-center justify-center">
                    <a href="https://google.com" class="text-black" target="__blank"> Select in the cloud</a>
                </label>
                <input v-if="step===4" type="submit" value="Se connecter" class="p-1 rounded-lg font-bold cursor-pointer transition-all bac-btn">

            </div>

            <button class="p-1 rounded-lg font-bold cursor-pointer transition-all bac-btn" v-if="step<4" @click.prevent="changeVue"> Prochaine Etape</button>
        </form>
       </div>
    </div>
</template>