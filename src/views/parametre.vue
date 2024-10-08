<script setup>
import { ref, useTemplateRef } from 'vue';
import { useRouter } from 'vue-router';
import SimpleInput from '../components/simpleInput.vue';
    const router=useRouter()
    console.log(router.currentRoute.value.params)
    const currentUserId= ref('')
    currentUserId.value=router.currentRoute.value.params['id']
    const scrol=ref(false)
    const isVisible=ref(0)
    const detailUser=(user)=>{
        isVisible.value=isVisible.value===user?0:user
        
    }
    // add familly member logic
    const addMemberLevel=ref(false)
    const addMember=()=>{
        addMemberLevel.value=!addMemberLevel.value
    }
    const addDeviseLevel=ref(false)
    const addDevise=()=>{
        addDeviseLevel.value=!addDeviseLevel.value
    }
    
</script>
<template>
    <div class="w-dvww h-dvh flex items-center justify-center">
        <div class="toggleMenu lg:w-[20%] md:w-[30%] w-[10%]  h-full bg-white rounded-lg">
           <div class="flex flex-col items-center gap-5 fixed  lg:w-[20%] md:w-[30%] w-[10%]">
            <h1 class="text-black text-[36px] p-3 absolute left-[100%] md:relative md:left-0 md:w-fit w-screen bg-white z-20" >
                <!-- :class="{'bg-white z-50':scrol}" -->
                SecureAIOp
            </h1>
            <!-- button user info -->
            <div class="border border-grayP border-solid rounded-md flex items-center justify-between p-2 w-[90%]">
                <div class="profImage w-[100%] lg:w-[30%] p-0 md:p-1"><img src="/coupeProfJey.png" alt="" class="rounded-[50%] object-cover"></div>
                <div class="userInfo hidden md:block">
                    <p>Jeremie K.</p>
                    <p>@jey1666</p>
                </div>
                <span class="hidden md:block">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="30" height="30" fill="url(#pattern0_42_17)"/>
                    <defs>
                    <pattern id="pattern0_42_17" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_42_17" transform="scale(0.0208333)"/>
                    </pattern>
                    <image id="image0_42_17" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGUlEQVR4nO2Zz1ITQRDG54QXnwGsEu9Y6AtAoDh4oqp78woevGnFdIfag9AdvHGJ+hQe9chDYJVyQIVrLJBz+FOzgbABo0xmzcwW+1XtKZvp79czPTPVa0ylSpUqRa1EGw9Q+QMKHaBwD5XPUPgUlbchTe/bd1a2XtwD4c+gdJL97vMI92wsEHq/+oZn/MwLL6Pw8ahgyUZz0b4HujbvbVxvPqD0G5Vr42d+lPk/zAAqfSpkBvQmBLQb084A2bIZDER7oLwAaTpl/rMgTafszILw9xzIO+eBsjU/yAIvmAkr2Wgu5mb8p/MAg4K1ABPI/HXZmPnCNq7Kr0MTSOjj4c4CJG/5IQi/BHk96xw0BgBQ/tZft/Srrq3HzoFDA6DQ16vi84PAEADWsDVeBASGKmJYpzlU7uYOwkOUtael2oWgAAgMvY36QmBoAF8IjAHAp7AxFoARELulBrAHnintElLu2towZS3i+iY9Ke02Wr+l+SgPMhfz0V0lXM3Hc5m7ZcHGdJ3eLcJ8OAClvSLMBwNY3Ww9AqVXtjHmHDS2bdRXeLcBpOSNLVDaD9laROVa7hz54TyA7c8PAPqN1tqkmrvQbi4NNXeFOs4D2Y8LF/35s4KebiKtZ0Nm241pVP7y1/8JH43VXrfKsl4gBCh9HAbg5/8yf/kRZWxlWRLq2BZ3vrCLmgEQ2rlmutePRZ2xM1+pUqVKZlI6B/45RR/vF4zoAAAAAElFTkSuQmCC"/>
                    </defs>
                </svg>
            </span>
            </div>

            <!-- menu side -->
            <div class="flex flex-col gap-2 w-full">
                <a :href="'/app/'+currentUserId+'/'" class="flex items-center font-a w-[90%] p-2 rounded-lg gap-3 m-auto">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect width="18" height="18" fill="url(#pattern0_41_15)"/>
                        <defs>
                        <pattern id="pattern0_41_15" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_41_15" transform="scale(0.0416667)"/>
                        </pattern>
                        <image id="image0_41_15" width="24" height="24" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9klEQVR4nGNgGDGgfPcqufJdq86C8e5VctQ2XLds16pH5btW/Qfhsl0rn1XsXGVMFcPLdqxyLdu16iPMcLglO1d9Lt2x2ocyl+9YmVS+c9UvdMOR8J/y3asySTf5/3/G8p0rG/AYjI4n1tfXMxFldv2qVWzlu1YuIcHw/1C8un7/fA68hldsWSpYtnPlfjIM/w/BK48W7V8qgj28ty9XKN+56hr5hq+CprBVt0t3rVFFNXzHCv2ynaueUGp4OQzvXPW8dNdqE4QFO1fdoZrhuxA+wR5UFBrMQAgMmAUMZKobteD/SAyinasOY2pceYhcdaOAgRAAAK9OxgPSWyzQAAAAAElFTkSuQmCC"/>
                        </defs>
                    </svg>

                    <span class="hidden md:block">Acceuil</span>
                </a>
                <a :href="'/app/'+currentUserId+'/historique'" class="flex items-center font-a w-[90%] p-2 rounded-lg gap-3 m-auto">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect width="30" height="30" fill="url(#pattern0_43_59)"/>
                        <defs>
                        <pattern id="pattern0_43_59" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_43_59" transform="scale(0.03125)"/>
                        </pattern>
                        <image id="image0_43_59" width="32" height="32" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB5ElEQVR4nO2WzU7CQBDHe5GDHy8iHtSDH+9gvJDZcPDMCxgTmcX0ArM1BiSoB2++htGThJNH9Q3wBVATjUTMbEtTSlsKrUoMk2xSYHbntzP/mWIYMwuxnFXKAmFDKPkkFL4ByVcgfBSEdVEprhg/YUDYAoXXOjDJL6FkL3CR7Aolz8A0M6kCiKEgeAUWbuyY5vzeyf5Cno42ObBQ+ME+oORtqhDCAwAk78P8oIyrQsm27YeN9AAImy6AknduQMIW/+b1zavSms4EyS7rJTWIIOtDDX1PeG6XC2vGnwBYuOVk6yFxEPClWX/2qd+/Z/f4YMkRbCcxgCDZ0bcxzUW/HvyaCAMIgg5u40E9abMHjuxxqxkxDehw21sCP3TUGj5MydNx2wqUvLAPxGrcPaEAOauU1cOH5Dv3+ciDyrjeb0OoFJdHpt9JeygAmz3ltEM7CoKDA+Gzc3A9bvpHAoBpZni8OmnlcXvGdWZh6sXPOu39UYw3hcvCXBioCxwXwIWwX0bd8NvgJ988TvCxAQY1gTVWuFD4wst5rnLN2Sey7p5WmwggjkXV3Ts3EgNAwMtoHEsMIBKmLXUAiDNy09SA8G2K0/OpakBMWwnGtZkGxFSVgLAZ9Ofm1wAmO4AmoE5xv/Gv7RuaEsi+al3Q5AAAAABJRU5ErkJggg=="/>
                        </defs>
                    </svg>
                    <span class="hidden md:block">Historiques d'enr</span>
                </a>
                <a :href="'/app/'+currentUserId+'/parametre'"  class="flex items-center font-a w-[90%] p-2 rounded-lg gap-3 m-auto">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect width="30" height="30" fill="url(#pattern0_43_60)"/>
                        <defs>
                        <pattern id="pattern0_43_60" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_43_60" transform="scale(0.015625)"/>
                        </pattern>
                        <image id="image0_43_60" width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE/UlEQVR4nO1bzW4cRRBugwhPEBBCIESu/J8CSWQScUiEEDFK9Sx+gNw4gAN2Vy0aJDzVEwchnBPkgFAskUAQR66EAOKQB+BsIDgXR+FCIHa8qHq8yto7v+vt8YTdT2pptdvTVf1Nd1V1da1SY/hDYGefAEs3tMU1afJZvlOjAojNtLbU6W3A9Kb6P0Db9rM6ah/P6wOMZ/sJwLO540bt4zK2aipakXlYMy2BxTuyrAOLr2f1BaarKSvgalZ/GSvZKnhHZEydCR9SzZs8rm6ZkMVbEJlJ+R2+hvuDyBwCi+9qixeTvb+VgE17cBGYTkFMB+UZ92xkJmWsLX0ZV0Wmagw6akIzLfdNiummtngOLF3vn3BBY1yRZ5Mx+sZdFpmqSdCWFitPctDG+IlqGnRkDtdFQGDpZdU0BAu0LzGAficvMkSWahIgbj+tGX+vcQus6Hl8ofaJtsTybjM+Ldt+Hiz+Vaw0rQPjD8D0jo5xv7iyk5+dfECafJbvtDUzYOmK9C0x3k2Yx+e2KNhRE968Q6vr6piWJWgBS0dkKWpLfxYo+rdmtBCZvWVlCSFg8bR7Nm87MF57w849Kbq44Eo8EeOqlzhBMy2lTG6jYPJfwTw+OqjM4EN6TFu8VCCjXwempaHvcahi4Jg2wNIHQ/HVHTUBFmeryJe+fdtjJ9AuDk+L3jKEx0arIQOYgvIk4FrReaQytMXXivakIyCmOeUJwEglVt8/ELVP+FEgMpOpoWnPnlc+IduB6Ztcz7B5/vAGLfF5hrVPM3gQ46va0h8SJwQxHtupfDGMfYeju0v/nPKJMAzvy3J7YIm7/Uoby4qtO75zkek6XO+eIr0giMyhjLe/3uvnfROwmXtID5Yic8AbATqi9zKUu5xJWozHZPmDxd+A6ejQdGH8MXUVMJ0alow+iJFLX3rtt1XNkIlmEHBhuNnb2Ey70NelsTJigRj3D01oWd1ieinDEK6Jrk7n2EzvKNsMLnVdvDerxPm58ip4DGcHyuhm6cbgCjHdLiUkDPf0PufbCAqOLr71YLnn8N8xAffKFggqeIxatkBQ0ggCz72oaob4e+9GcDuSnH6aUDOjakZ2TIJfehMK7mIjdZldKT3GkM4GwPhz7S8DYjqYKpRpvTcN5dsLyP7PzA34DIXD3MMQnq6LAGD6KP1F4IrXw1DRcViOqqoAOz0bQDz7+K4dh6EoIWLxktc7u+QO8ttdSYjosikxS+hFgcTwvb8rKTFdNSnKFAxVAdEhNq0qSdG8+oTKgFFPiw96MSIJzDKGMc/g5e75TB3wvBo2puT+btvVmLuWYrxW8DZuaaaFKnd2SZyPZ7KtfS/J+GktV2NZl6Oy1PI9w91lKWksyeRIMsMFM2G4R5p8lu8k0gRLPw1wzR57vxzNg47MU7Vej+eRMAoFEprNQuNIAEtHanvbkTksnqFRJEBK8aPHtpiQ3hQSOvllcknJm58yuSwSxJhqS680olAylFNkZA64IkimC1mFkslvZkY8gjxTtlAyZyXIncUvtZAw5eIEP6Wy3VB8c+zzaX6+EST4LpZuReaZgnG/bwQJRZDS+D4lY9NSO4QUUObZlcaQEHj8wwRY8909QYJPjElQYxIcxitBjUlwGK8ENSbBYbwSlDu2X86LE05E+IUacRJuq1FAJgmMG2pUkE4C/qpGCWDxc1cMxrghk5/6GB/ZbZ0agf8AyI0+/7hzMgoAAAAASUVORK5CYII="/>
                        </defs>
                    </svg>
                    <span class="hidden md:block">Parametre</span>
                </a>
            </div>

             <a href=""  class="flex items-center font-a w-[90%] p-2 rounded-lg gap-3 mt-7 text-color-2">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="30" height="30" fill="url(#pattern0_43_58)"/>
                    <defs>
                    <pattern id="pattern0_43_58" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_43_58" transform="scale(0.0208333)"/>
                    </pattern>
                    <image id="image0_43_58" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqklEQVR4nO2ZTUoDQRCF3yPeQHGpLjyABFwqxpwh5xCcKpKV7sS1+LfzXC4CUReKKP6AESEQ6TjBIUQiWtVmpD9oZlfVr6e6UnkDJBKJxFSzDcwpeSzklZI9JfsGK8S5VPI0AxbdNq9ATcgbo02PXUI+Z8Cmy8l7b14/RdxmwLypACFPCgkuwttoABWL2CFOBqwr2SnkOIIleY1+nBJQMw0+zAHUC2+iYxu8cGGtTn6UBlAR8i3P0zUNXqxROCLknpCv4VlKAW4kAd+kBSwrkIUnSnoH2nmeewWqZRbQNxURS4AC1cHGrUXEvMQCrAh5V8j5kAGrpepCYi3iL9qoWIqYJCBvf6pA03gdKPny6zsxScBI9/Aet9tJwBcltCPkvuVS8iwMd+4lVPpLbI2UuY2Kxw/ZsMv8qANMwyjR8hpzYw1zsRCvcToWLbc/NMCWkufhiTKiZNfF7oiF/gNbpedtbO0CM57GVtFaXIMDGbDhZi2OMXfrxuZu2LyfudsEloJ3H2nef2wCC3Byj6+dBTyFPPCiBcwqeTgoI9tPTJ1QNi4nn0gkEojFOzJSX2TdwsbQAAAAAElFTkSuQmCC"/>
                    </defs>
                </svg>
                <span class="hidden md:block">Deconnecter</span>
             </a>
           </div>
           
        </div>
        <div class="content lg:w-[80%] md:w-[70%]  w-[90%] h-full font-a p-7 overflow-y-scroll lg:overflow-y-auto"  @scroll="isScrolled">
            <!--  overflow-y-scroll -->
            <div class="flex flex-col gap-4 pt-5">
                <h2>Parametres</h2>
                <h3>Informations personnel</h3>
                <div class="grid md:grid-cols-2 gap-4 m-4 md:m-1">
                    <SimpleInput :label="{label:'E-mail',type:'email',text:'Votre email',name:'userEmail',value:'jeremiekimpioka52@gmail.com'}">
                        <template #iconForm>
                            <img src="/message.svg" alt="user-icon">
                        </template>
                    </SimpleInput>
                    <SimpleInput :label="{label:'User name',type:'text',text:'Votre user name',name:'userName',value:'@jeyKimp'}">
                        <template #iconForm>
                            <img src="/user.svg" alt="user-icon">
                        </template>
                    </SimpleInput>
                    <SimpleInput :label="{label:'Noms',type:'text',text:'Votre nom',name:'userNom',value:'Jeremie Kimpioka Tandu'}">
                        <template #iconForm>
                            <img src="/user.svg" alt="user-icon">
                        </template>
                    </SimpleInput>
                    <SimpleInput :label="{label:'Password',type:'password',text:'Votre mot de passe',name:'userPw'}">
                        <template #iconForm>
                            <img src="/passIcon.svg" alt="user-icon">
                        </template>
                    </SimpleInput>
                    <div class="font-a h-[78px] rounded-lg p-1 flex gap-5 items-center">
                        <img src="/coupeProfJey.png" alt="" class="h-full rounded-[50%]">
                        <p>Changer le profil</p>
                    </div>
                    <SimpleInput :label="{label:'Confirm password',type:'password',text:'confirmez le mot de passe',name:'userPw'}">
                        <template #iconForm>
                            <img src="/passIcon.svg" alt="user-icon">
                        </template>
                    </SimpleInput>
                     <button class="p-1 rounded-lg font-bold cursor-pointer transition-all bg-greenLight-500 text-white w-fit px-4 hover:bg-greenLight-400"> MODIFIER LES INFOS</button>
                </div>
            </div>

            <div class="additionalSetting grid md:grid-cols-2  my-4 gap-2">
                <div class="famillyMember bg-white w-[90%] md:w-[100%] lg:w-[70%] m-auto h-full p-3 flex flex-col gap-1 rounded-t-lg relative">
                    <h3>Family member</h3>
                    <div class="itemFamilly flex justify-between items-center relative" >
                        <img src="/coupeProfJey.png" alt="" class="rounded-[50%] w-5 h-5">
                        <p>Jeremie Kimpioka</p>
                        <img src="/more.png" alt="" class="h-fit cursor-pointer" @click="detailUser(1)">
                        <div class="bg-greenLight-500 w-7 h-7 absolute right-0 -top-6 grid p-1 text-white text-sm" v-show="isVisible===1" ref="user1">
                            <span class="w-full truncate cursor-pointer hover:greenLight-400">Suppr</span>
                            <span class="w-full truncate cursor-pointer">Modif</span>
                        </div>
                    </div>
                     <div class="itemFamilly flex justify-between items-center relative">
                        <img src="/coupeProfJey.png" alt="" class="rounded-[50%] w-5 h-5">
                        <p>Jeremie Kimpioka</p>
                        <img src="/more.png" alt="" class="h-fit cursor-pointer" @click="detailUser(2)">
                        <div class="bg-greenLight-500 w-7 h-7 absolute right-0 -top-6 grid p-1 text-white" v-show="isVisible===2" ref="user2">
                            <span class="w-full truncate cursor-pointer hover:greenLight-400">Suppr</span>
                            <span class="w-full truncate cursor-pointer">Modif</span>
                        </div>
                    </div>
                    <!-- add familly member section  -->
                    <div class="absolute w-full bg-white left-0 -top-[100%] shadow p-2 grid gap-1 rounded-lg" v-show="addMemberLevel">
                        <img src="/close1.png" alt="" class="w-3 ml-[90%] cursor-pointer" @click="addMember">
                        <h3>Add member</h3>
                        <p>Profil</p>
                        <label for="Profil" class="flex items-center flex-col justify-center relative" v-if="!userProfil">
                            <input type="file" name="userProfil" id="Profil" class="w-full" @change="putFileName">
                        </label>
                        <SimpleInput :label="{label:'Noms',type:'text',text:'Votre nom',name:'userNom'}">
                            <template #iconForm>
                                <img src="/user.svg" alt="user-icon">
                            </template>
                        </SimpleInput>

                        <label for="genre">Genre</label>
                        <select name="userGenre" id="genre" 
                        class="h-5 rounded-md border border-l-grayP bg-transparent font-bold text-greenLight-500">
                            <option value="homme">Admin</option>
                            <option value="femme">Simple Familly member</option>
                        </select>
                        <div class="memberAdd bg-greenLight-500 w-fit p-2 rounded-lg text-xs text-white">
                        Ajouter
                    </div>

                    </div>
                    <div class="memberAdd bg-greenLight-500 w-fit p-2 rounded-[50%] self-end" @click="addMember">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="20" height="20" fill="url(#pattern0_45_218)"/>
                            <defs>
                            <pattern id="pattern0_45_218" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_45_218" transform="scale(0.02)"/>
                            </pattern>
                            <image id="image0_45_218" width="50" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADaklEQVR4nO2aS09UQRCFrwEBg1GGh7DUJYGgf0IFBQF3oO4gsOERdAu4VlcmJP4ODTFqxJioEcXXRsHBlcrCiDsRA+YzBecmHR3uPOhh7hBOcpPJdM+pqttV3dVVEwR72KUAqoEu4DowDcwDP4DfeuzzB43ZnE4gEcQBQAVwCbgP/CF7rAP3gItAeSEMOABcBpYcpVaBGWBcK9NobxzYryeh72xsAnik34T4CozZy9kpI84CnxwFXgJ9wOEcuKqAfmDO4VsE2vLtRrccga+AUx75W4E3Dv+U99UBGqS44ScwBJR4FbIppwQYAVac1a73RX5My412nWYvxNEyW4AFyUyaDtslrHMIXwC13rRNLzsBPJFsi8mG7cRE6E7PgErv2qbXoRJ47rhZ9jHjBLa5U3VeNM1MjxrHK6Zy2WLDwM57TGQYMyvSqTWbwy48J4Y8KLEBDzyjTvCndzHginNOlMTIkFLgrehG000uV6pgOLld4T4NMQBnRLcUuSpK3jZ2iMATPBuyz9lJe6MmPtCkPh+CfRtiAAZEeTeIuE+sKyPNOgHcQUMSut+spdQT6JbMh76E5sMQA/BYtB3BvwBuaHA8iL8hV0V7LdWgXUEN54rAkG7R3k41+FGDjUVgSJNo51MNLmuwuggMqRXtt1SDthMYyjJVLl8I0su3g9uwuqsNWS4i16qLcq1dE+zTGuwsAkPOR22/4YE4UewHYpcGZ4ooRWnfKhkLk8aquBrCZnIbJo2HtppkBWVDf4wNGRTldNSkC5o0F+OL1WtR9qQ7aL5o4ukYGtIuus9p2xAq7SPL41Z8eCe64UwrjGGtdyRGhoyJaiHjppD1J/QjK4q1BAUGcAL4JZ2ya2WoPxG+gZq8aZlZXpWULjdzIahQ4RgVkgtRxD4IzEqH2Zz7jHob1p0N2wp13rWNPvieSvbiths+avQkHTc77k3b6JhISqZl5Ud9Edc7braignKpF/L/t9gxJ7DNnY74FlLhbACooNzm8cS2VkZ4TmwEdl577+q+hsuOarEDufyLQXEw6KQdoSt56xZnsjqjTjqDMlJLrydVd2pSt6lMj31u1qVoUnPDOkGYdgwX6h8Qlpv1WkFZV4BssaabaU9BDEgFKyhbLdZubcAd9R6/O3+qsc/v7XqqOR1b3if2EBQ//gII7bjCd5MRxAAAAABJRU5ErkJggg=="/>
                            </defs>
                        </svg>
                    </div>
                </div>

                    <div class="famillyMember bg-white w-[90%] md:w-[100%] lg:w-[60%] m-auto h-full p-3 flex flex-col gap-1 rounded-t-lg relative">
                        <h3>Your devices </h3>
                        <!-- add device member section  -->
                        <div class="absolute w-full bg-white left-0 -top-[100%] shadow p-2 rounded-lg" v-show="addDeviseLevel">
                            <img src="/close1.png" alt="" class="w-3 ml-[90%] cursor-pointer" @click="addDevise">
                            <h3>Add device</h3>
                            <SimpleInput :label="{label:'Noms',type:'text',text:'Votre nom',name:'userNom'}">
                                <template #iconForm>
                                    <img src="/user.svg" alt="user-icon">
                                </template>
                            </SimpleInput>
                            <SimpleInput :label="{label:'Devise Ip',type:'text',text:'l\'adresse ip de l\'equipement',name:'userNom'}">
                                <template #iconForm>
                                    <img src="/user.svg" alt="user-icon">
                                </template>
                            </SimpleInput>

                            <div class="memberAdd bg-greenLight-500 w-fit p-2 rounded-lg text-xs text-white">
                            Ajouter
                        </div>
                     </div>
                    <div class="itemFamilly flex justify-between items-center font-a p-2 rounded-lg">
                        <p>Système d’Alerte</p>
                        <img src="/more.png" alt="" class="h-fit cursor-pointer" >
                    </div>
                    
                    <div class="memberAdd bg-greenLight-500 w-fit p-2 rounded-lg text-xs text-white cursor-pointer" @click="addDevise">
                        Ajouter un equipement
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .color-2{
        background: rgba(192, 57, 57, 0.372);
    }
    .text-color-2{
        color:rgb(93, 2, 2);
    }
    .bg-yellow-o{
        background: rgba(199, 169, 67, 0.372);
    }
</style>