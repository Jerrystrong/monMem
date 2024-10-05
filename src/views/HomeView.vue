<script setup>
import { onMounted, ref, useTemplateRef } from 'vue';
import navigation from '../components/navigation.vue';
const isNotconnected=ref(true)
const profil =useTemplateRef('profil')
const targe=ref(10)
const scroL=()=>{
    console.log('click')
    profil.value.scrollX(targe.value)   
}
// console.log(input.value)
// onMounted(()=>{
//     input.value.focus()
//     input.value.value="jerry"
// })
</script>
<template>
   <header>
        <navigation v-if="isNotconnected"/>
        <div class="heroSection" className="flex mx-[10px] md:mx-[30px] lg:mx-[70px] my-7 gap-3 items-center lg:items-start justify-center lg:justify-start">
            <div className="hidden lg:block w-[40%]">
                <img src="/manHero.png" alt="heor-image" className="w-full">
            </div>
            <div  className="w-[90%] lg:w-[60%] px-[20px] flex flex-col gap-3 text-center lg:text-justify">
                <img src="/Vector 2.png" alt="vector-sensor" className="absolute w-5 md:left-7 -lef-5 lg:hidden">
                <h2 class="hero-text">Garder votre domicile en Sécurité avec la puissance de l’intelligence Artificiel</h2>
                <p className="w-[90%] hidden md:block">
                    Rester au contrôle de chaque entrée dans votre domicile directement avec votre téléphone à l’aide de notre puissant model  d’intelligence artificiel qui contrôlr 
                    vos entrées  et sorties.
                </p>
                <div class="btn-group" className="flex flex-col md:flex-row justify-start items-center md:items-start mx-0 md:mx-5 gap-2 md:gap-10 relative">
                    <a className="bg-yellowB font-bold rounded-2xl py-[10px] px-[20px] cursor-pointer hover:bg-yellow-50 transition-all hover:border border-yellowB text-bg-yellow-950 truncate" id="exploreBtn" href="#">Explorer le puissant AI </a>
                    <a className="bg-greenLight-400 font-bold rounded-2xl py-[10px] px-[20px] text-yellow-50 cursor-pointer hover:bg-green-50 transition-all hover:border border-greenLight-400 hover:text-green-950 truncate w-fit" id="seeDemoBtn" href="#">Voir une demo</a>
                    <img src="/Vector 3.svg" alt="vector-sensor" className="absolute w-7 md:right-7 -right-5 ">
                </div>
            </div>
        </div>
        <div class="lieur"></div>
   </header>
   <main>
        <div id="about" className="mx-3 md:mx-10 my-5 md:flex">
            <div className="flex flex-col gap-5 px-5 text-center lg:text-justify">
                <h2 className="my-5">Qu’est-ce que SecureAIOp</h2>
                <p>
                    <span className="font-bold">SecureApiOP</span> est un Application qui vous permet de surveiller votre maison de partout  sans avoir besoin d’un agent de sécurité grâce à notre modele d’intelligence artificiel avancer qui fait la réconnaissance faciale pour sur les données de votre cameras de surveillance et garantit ainsi une suivie de chaque éntrée inconnue chez vous.
                </p>
                <a className="bg-greenLight-400 font-bold rounded-2xl py-[10px] px-[20px] text-yellow-50 cursor-pointer hover:bg-green-50 transition-all hover:border border-greenLight-400 hover:text-green- flex w-fit h-[40px] items-center gap-3 self-center lg:self-start" id="seeDemoBtn" href="#">
                    Voir plus
                        <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="50" height="50" fill="url(#pattern0_6_49)"/>
                            <defs>
                            <pattern id="pattern0_6_49" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_6_49" transform="scale(0.02)"/>
                            </pattern>
                            <image id="image0_6_49" width="50" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjUlEQVR4nO3YsQ0CQQwFUUMDIEjpX1RAgiiA4ICAjGIGnbgOCG79Na+DkeWVtVWSJEnSiIAzcAF21Rkw8XNvHQOcgM8SM0cdqiuCYx7GDDyZY3WVHPM0JnYywAZ4sb4J2P8Tsl0Wr3fIWkhYehKeYYwYRMTxSMI5jxGDiJjEDHinfD7cgGvrCEmSJFU7X86PjIBBITEmAAAAAElFTkSuQmCC"/>
                            </defs>
                        </svg>
                </a>
            </div>
            <img src="/bot.png" alt="" width="50%" className="hidden lg:block">
            <div>

            </div>
        </div>
        <div id="product" className="mx-3 md:mx-10 my-5 overflow-x-hidden flex flex-col">
            <h2 className="w-full lg:w-1/2 text-center md:text-justify">Decouvrir la simplicite de la gestion de votre systeme de surveillance</h2>
            <div id="profil" className="flex gap-2 md:gap-5 m-7  w-full" ref="profil">
                <div className="h-full
                md:w-[1/2] lg:h-[500px] bg-greenLight-400 translate-y-0 md:translate-y-5">
                    <img src="/profilApp.jpg" alt="image-of-app" class="w-full h-full object-full">
                </div>
                <div className="h-full md:h-[1/2] lg:h-[500px] bg-greenLight-400 translate-y-0 md:-translate-y-3">
                    <img src="/profilApp2.jpg" alt="image-of-app" class="w-full h-full object-full">
                </div>
                <div className="h-full md:h-[1/2] lg:h-[500px] bg-greenLight-400 translate-y-0 md:translate-y-5">
                    <img src="/profilApp3.jpg" alt="image-of-app" class="w-full h-full object-full">
                </div>
            </div>
            <button className="bg-black w-fit h-fit p-1 lg:hidden self-end" @click="scroL"><img src="/icons8-droite-50.png" alt="" className="w-5"></button>
        </div>
        <div id="temoignage" className="mx-3 md:mx-10 my-5 flex flex-col">
            <h3 className="w-full lg:w-1/2 text-center md:text-justify">Ce que les experts dit de nous? </h3>
            <div id="testi" className="p-5 flex justify-between gap-7 flex-col lg:flex-row">
                <div class="userTesti">
                    <img src="/IMG-20240717-WA0038 1.png" alt="" class="hidden md:block">
                    <div class="bg-white p-4 relative md:absolute top-2 rounded-lg w-[300px] flex flex-col gap-4 oo">
                        <h3>Plamedi Musenga</h3>
                        <div class="flex gap-2">
                            <span>Software engeneer and algorithmist</span>
                            <span class="bg-white border-l border-solid border-gray-700 pl-2">CEO Dat’Intellik</span>
                        </div>
                        <div class="flex items-start text-justify gap-2">
                           <img src="/citation.svg" alt="">
                            <p>
                                SecureAIOp est un outil vraiment puiqqant qui traite un grand flux d’information à un temps munime et interagit rapidement et efficacement avec 
                                le materiel
                            </p>
                        </div>

                    </div>
                </div>

                <div class="w-[90%] md:w-[60%] lg:w-1/3 fontS grid bg-white p-3 rounded-xl border border-solid border-greenLight-400 gap-3 shadow-md self-center">
                    <h3 class="text-[18px] border-b border-sold border-greenLight-400">Explorer un parcours gratuit qui reponds à tout vos besoin</h3>
                    <div class="grid gap-2">
                        <h4 class="text-[18px]  font-bold">Espace Disque</h4>
                        <div class="flex gap-2 items-start">
                            <img src="/coche.svg" alt="">
                            <p>
                                500 Megas d’espace d’enregistrements
                            </p>
                        </div>
                    </div>

                    <div class="grid gap-2">
                        <h4 class="text-[18px]  font-bold">Membres des users</h4>
                        <div class="flex gap-2 items-center">
                            <img src="/comunauty.svg" alt="">
                            <p>
                                3 personnes au plus
                            </p>
                        </div>
                    </div>
                    <a className="bg-greenLight-400 font-bold rounded-2xl h-fit py-[10px] px-[20px] text-yellow-50 cursor-pointer hover:bg-green-50 transition-all hover:border border-greenLight-400 hover:text-green-950 truncate w-fit mx-auto text-[14px] md:text-[16px]" id="seeDemoBtn" href="#">Explorer le puissant AI </a>
                </div>
            </div>
        </div>
        <!-- <input type="text" ref="inp" placeholder="sdjhdsjh">jkjdjs -->
   </main>
</template>
<style scoped>
    .oo{
        right: -250px !important;
    }
    .fontS{
        font-family: "Source Code Pro", monospace;;
    }
    .userTesti{
        position: relative;
        width: fit-content;
    }
    .userTesti::before{
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        border: 3px solid #FFDA79;
        position:absolute;
        top:30px;
        right: -30px;
        border-radius: 20px;
    }
    @media screen and (max-width: 640px) {
        h2{
            font-size: 24px;
        }
        .oo{
        right: 0px !important;
    }
    }
</style>