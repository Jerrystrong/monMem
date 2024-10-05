<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router =useRouter()
const state=ref('low')
const focusCont=(e)=>{
    // state.value='foc'
    e.currentTarget
    console.log(e.currentTarget.parentElement)
}
const retourCommande=(e)=>{
    router.go(-1)
}
</script>
<template>
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-3 lg:gap-0 overflow-hidden">
         <button class="mx-5 self-start bg-transparent text-greenLight-500 hover:border-none" @click="retourCommande">
             <!-- <span><img src="/left.svg" alt=""></span> -->
             Retour à l'acceuil</button>
      <div class="flex flex-row-reverse justify-center">
        <img src="/bot.png" alt="" class="hidden lg:block">
        <form action="" class="w-[80%] md:w-[80%] lg:w-[300px] fontS grid bg-white p-3 rounded-xl border border-solid border-greenLight-400 gap-3 shadow-md self-center font-a h-fit">
            <h3 class="font-bold">Laissez nous votre message</h3>
            <div class="form-group" key="n">
                <label for="name">Noms</label>
                <label for="name" class="flex gap-3 relative  inputSet p-2 rounded-md"
                :id="state" >
                    <img src="/user.svg" alt="user-icon">
                    <input type="text" placeholder="Entrez votre nom" class="bg-transparent placeholder-grayP focus:border-greenLight-400 focus:outline-greenLight-400 w-full absolute top-0 left-0 h-full rounded-md placeholder-shown:text-grayP pl-7 border border-solid border-grayP" name="name" id="name" @focus="focusCont" >
                </label>
            </div>

            <div class="form-group" key="p">
                <label for="email">Email</label>
                <label for="email" class="flex gap-3 border relative border-solid border-grayP inputSet p-2 rounded-md"
                :id="state" >
                    <img src="/message.svg" alt="user-icon">
                    <input type="text" placeholder="Entrez votre email" class="bg-transparent placeholder-grayP focus:border-greenLight-400 focus:outline-greenLight-400 w-full absolute top-0 left-0 h-full rounded-md placeholder-shown:text-grayP pl-7 border border-solid border-grayP" name="email" id="email" @focus="focusCont" >
                </label>
            </div>

            <div class="form-group" key="p">
                <label for="email">Message</label>
                <label for="email" class="flex gap-3 border relative border-solid border-grayP inputSet p-0 rounded-md h-fit"
                :id="state" >
                    <textarea rows="30" cols="10" placeholder="Entrez votre message" class="bg-transparent placeholder-grayP focus:border-greenLight-400 focus:outline-greenLight-400 w-full h-[100px] rounded-md placeholder-shown:text-grayP pl-7 border border-solid border-grayP" name="message" id="message" @focus="focusCont" ></textarea>
                </label>
            </div>
            <button class="bac-btn">Envoyez</button>
        </form>
      </div>
    </div>
</template>
<style scoped>
    .bac-btn{
        background: linear-gradient(45deg,#77BAAA 0,#77baaa1a);;
    }
    #foc{
        border: 1px solid #77BAAA;
    }
    .fontS{
        font-family: "Source Code Pro", monospace;;
    }
    .font-a{
        background: linear-gradient(180deg,rgba(119, 186, 170, 0.1) 5%,rgb(102, 160, 146,0.1) 36%,rgb(86, 135, 123,.1) 64%,rgb(119, 186, 170,.1) 100%);
    }
</style>