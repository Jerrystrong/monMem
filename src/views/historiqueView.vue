<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SimpleInput from '../components/simpleInput.vue';
import {fetchD} from '../composable/fetchData.js'
import {decon} from '../composable/deconnection.js'
    const router=useRouter()
    console.log(router.currentRoute.value.params)
    const currentUserId= ref('')
    currentUserId.value=router.currentRoute.value.params['id']
    const scrol=ref(false)
    // fonction pour la deconnection
    const deconection=async function decon(){
        try {
            const data = await fetchD({}, `logout`,"POST");
            if(data.status==='success'){
                console.log(data.message)
                router.push(`/`)
            }else{
                console.log(data.message)
                stateError.value=data.message
            }
        
        } catch (error) {
            console.error('Erreur lors de la soumission du formulaire:', error.message);
        }
    }
</script>
<template>
    <div class="w-dvww h-dvh flex items-center justify-center">
        <div class="toggleMenu lg:w-[20%] md:w-[30%] w-[10%]  h-full bg-white rounded-lg">
           <div class="flex flex-col items-center gap-5 fixed  lg:w-[20%] md:w-[30%] w-[10%]">
            <h1 class="text-black text-[36px] p-1 absolute left-[100%] md:relative md:left-0 md:w-fit w-screen bg-white z-20" >
                <!-- :class="{'bg-white z-50':scrol}" -->
                SecureAIOp
            </h1>
            <!-- button user info -->
            <div class="border border-grayP border-solid rounded-md flex items-center justify-between p-1 mt-1 md:mt-0 md:p-2 w-[90%]">
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
                <RouterLink :to="'/app/'+currentUserId+'/'" class="flex items-center font-a w-[90%] p-2 rounded-lg gap-3 m-auto">
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
                </RouterLink>
                <RouterLink :to="'/app/'+currentUserId+'/historique'" class="flex items-center font-a w-[90%] p-2 rounded-lg gap-3 m-auto">
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
                </RouterLink>
                <RouterLink :to="'/app/'+currentUserId+'/parametre'"  class="flex items-center font-a w-[90%] p-2 rounded-lg gap-3 m-auto">
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
                </RouterLink>
            </div>

             <a href=""  class="flex items-center font-a w-[90%] p-2 rounded-lg gap-3 mt-7 text-color-2" @click.prevent="deconection">
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
                <h2>Historiques</h2>
                <button class="bg-greenLight-500 text-white w-fit">Imprimer</button>
                <table class="w-full border-collapse border table p-2">
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Date</td>
                            <td>Resultat</td>
                            <td>Fichier</td>
                            <td>Details</td>
                        </tr>
                    </thead>
                    <tbody>
                         
                    </tbody>
                </table>
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