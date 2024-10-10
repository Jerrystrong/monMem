<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
    const router=useRouter()
    console.log(router.currentRoute.value.params)
    const currentUserId= ref('')
    currentUserId.value=router.currentRoute.value.params['id']
    const scrol=ref(false)
    // const isScrolled=(e)=>{
    //     if(e.target.scrollY>5){
    //         scrol.value=!scrol.value
    //     }
    //     scrol.value=!scrol.value
    //     console.log(e)
    //     console.log(e.target.scrollY)
    // }
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
            <div class="grid lg:grid-cols-2 gap-5 lg:gap-1 mt-4 md:mt-0">
                <div class="flex flex-col gap-4 lg:gap-1">
                    <h1>
                        Bonjour, 
                     <br><span id="userConnectedName">
                            Jeremie K
                        </span>
                    </h1>
                    <p>
                        Finissez de configuerer votre assistant 
                        interlligenter en ajoutant les membres
                        de votre famille et vos objets connecté
                    </p>
                    <div class="flex justify-start lg:justify-between">
                        <div class="userSete h-7 flex">
                            <img src="/coupeProfJey.png" alt="" class="rounded-[50%] object-cover h-full -z-20 md:z-10 hover:scale-105 cursor-pointer">
                            <div class="rounded-[50%] object-cover h-full w-7 bg-white -translate-x-1 -z-30 md:z-0 hover:scale-105 cursor-pointer"></div>
                        </div>
                        <a class="bg-black text-white flex items-center px-2 gap-2 rounded-2xl w-fil truncate  hover:scale-105"  :href="'/app/'+currentUserId+'/parametre'">
                            <span>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect width="30" height="30" fill="url(#pattern0_43_33)"/>
                                    <defs>
                                    <pattern id="pattern0_43_33" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_43_33" transform="scale(0.02)"/>
                                    </pattern>
                                    <image id="image0_43_33" width="50" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADaklEQVR4nO2aS09UQRCFrwEBg1GGh7DUJYGgf0IFBQF3oO4gsOERdAu4VlcmJP4ODTFqxJioEcXXRsHBlcrCiDsRA+YzBecmHR3uPOhh7hBOcpPJdM+pqttV3dVVEwR72KUAqoEu4DowDcwDP4DfeuzzB43ZnE4gEcQBQAVwCbgP/CF7rAP3gItAeSEMOABcBpYcpVaBGWBcK9NobxzYryeh72xsAnik34T4CozZy9kpI84CnxwFXgJ9wOEcuKqAfmDO4VsE2vLtRrccga+AUx75W4E3Dv+U99UBGqS44ScwBJR4FbIppwQYAVac1a73RX5My412nWYvxNEyW4AFyUyaDtslrHMIXwC13rRNLzsBPJFsi8mG7cRE6E7PgErv2qbXoRJ47rhZ9jHjBLa5U3VeNM1MjxrHK6Zy2WLDwM57TGQYMyvSqTWbwy48J4Y8KLEBDzyjTvCndzHginNOlMTIkFLgrehG000uV6pgOLld4T4NMQBnRLcUuSpK3jZ2iMATPBuyz9lJe6MmPtCkPh+CfRtiAAZEeTeIuE+sKyPNOgHcQUMSut+spdQT6JbMh76E5sMQA/BYtB3BvwBuaHA8iL8hV0V7LdWgXUEN54rAkG7R3k41+FGDjUVgSJNo51MNLmuwuggMqRXtt1SDthMYyjJVLl8I0su3g9uwuqsNWS4i16qLcq1dE+zTGuwsAkPOR22/4YE4UewHYpcGZ4ooRWnfKhkLk8aquBrCZnIbJo2HtppkBWVDf4wNGRTldNSkC5o0F+OL1WtR9qQ7aL5o4ukYGtIuus9p2xAq7SPL41Z8eCe64UwrjGGtdyRGhoyJaiHjppD1J/QjK4q1BAUGcAL4JZ2ya2WoPxG+gZq8aZlZXpWULjdzIahQ4RgVkgtRxD4IzEqH2Zz7jHob1p0N2wp13rWNPvieSvbiths+avQkHTc77k3b6JhISqZl5Ud9Edc7braignKpF/L/t9gxJ7DNnY74FlLhbACooNzm8cS2VkZ4TmwEdl577+q+hsuOarEDufyLQXEw6KQdoSt56xZnsjqjTjqDMlJLrydVd2pSt6lMj31u1qVoUnPDOkGYdgwX6h8Qlpv1WkFZV4BssaabaU9BDEgFKyhbLdZubcAd9R6/O3+qsc/v7XqqOR1b3if2EBQ//gII7bjCd5MRxAAAAABJRU5ErkJggg=="/>
                                    </defs>
                                    
                                </svg>
                            </span><span class="hidden lg:block">Ajouter vos configurations</span>
                        </a>
                    </div>
                </div>
                <div>
                    <div class="bg-white w-4/4 p-2 md:w-3/4 h-fit m-auto rounded-lg flex justify-center flex-col md:p-3 lg:p-3">
                        <h3 class="px-3 font-bold">Lancer l’assistance intélligente</h3>
                        <a class="bg-greenLight-500 text-white flex items-center gap-2 rounded-2xl w-fill m-auto  hover:scale-105 p-1 px-3" :href="'/app/'+currentUserId+'/live'">
                            <span class="border border-dashed border-white rounded-[50%] p-[5px]">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect width="20" height="20" fill="url(#pattern0_43_39)"/>
                                    <defs>
                                    <pattern id="pattern0_43_39" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_43_39" transform="scale(0.0333333)"/>
                                    </pattern>
                                    <image id="image0_43_39" width="30" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvUlEQVR4nO3WoWqCURjH4Q8mYlo0WAxegDdgWrR4F1aj1bhbsC5ajZbBEItF8Ao0CivDIrhHBF9YnIOdg58+N/Arh/95i+IhJ8yxQi91+KcFOjnCYYpWjvDZAWPUU4fDF0aopQ6HLfp4Sh0Oa3RzhMMM7RzhsyMmaKYOhz1e8Zw6HHYYopo6HN7vJrzDAJXSPq4j3tD4dTDc0oAs8fLnYLgiuEn9SXxeRqFW2kPg+zL8rdIeex9ZztuH4h+cANx73pV8PrVwAAAAAElFTkSuQmCC"/>
                                    </defs>
                                </svg>
                            </span>Lancer les service
                        </a>
                    </div>
                </div>
            </div>

            <div class="my-6 flex gap-4 flex-wrap items-start activites pt-5">
                
                <div class="font-a p-2 w-4/4 md:w-[40%] lg:w-1/4">
                    <div class="flex gap-1 ">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="24" height="24" fill="url(#pattern0_34_50)"/>
                            <defs>
                            <pattern id="pattern0_34_50" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_34_50" transform="scale(0.0416667)"/>
                            </pattern>
                            <image id="image0_34_50" width="24" height="24" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6ElEQVR4nO2TPQrCQBCFPySgfTqNpXiElLZ6Gr2BXsDCW4iEdP6cQwQL9QiC2lkpC29hWUwUXLHJg4HwZuZ7JJuFSoHUBjLgpsqBbkj4GXh4ZbwkREAm4FJAUyt5ixABN8ES762Md/11wCVEQC7YSmBTa3nm832tbskhdwikRAd6VWUh4ZUKVQN6wASYApHTi+SNNWNmP1YDGAEn76+ZCxzp2e0dgSFQfwdvATtn8QDMdKFsiIVf1Ds481ugWRaw0eAe6Dt+6oRYuPGsBtqxF7JQdw3FL3qpwD7cKtauYRTqEaj+F1AJX08ZSXQGHn/IgAAAAABJRU5ErkJggg=="/>
                            </defs>
                        </svg>
                        <p class="text-[18px]">Personnes non suspect</p>
                    </div>
                    <p>3 personnes non suspect la semaine</p>
                </div>

                <div class="color-2 p-2 w-4/4 md:w-2/4 lg:w-1/4">
                    <div class="flex gap-1">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="32" height="32" fill="url(#pattern0_21_51)"/>
                            <defs>
                            <pattern id="pattern0_21_51" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_21_51" transform="scale(0.02)"/>
                            </pattern>
                            <image id="image0_21_51" width="50" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC+ElEQVR4nO2Z30tUQRTHP65SGynkq39A7r/QD9MSkXrpxz8QUkGFEFG0+RhB/qh/w97CXquHIq0oe61WeqkstSIKNGiF3DjwvTDIyt5Z79x7of3AwO7szDkzd8+Zc85caNGiRdp0AyPAfaACrKnZ5xn9ZmNyyy5gDPgF1Bq0n8B1oEjO6AHmnYU+AM4CvcButZL6HjrjXmluLugBPmlhZj4HY8zp09ia5vbkwZzmtaDHwB6PuTb2iea+zNrMxrSQd56biDCnX5CMcoD1xV5E5NhxzGkr+p0DoJsMGHEce7s8kqzTZMCMlJ9JQNY5ybpHBkS2bUfsdik5p17qrEp5ZwKyOiVrlQyIglpe5W1LcQcwDEwCc8BH4LeafZ7Vb8Ma20heKriKu5Q7LcbIs2pORC87ppn5Ro7paUff3wLjwGCdXMv6JhRAo/EfJCPzjbgJ4GGP+ftkapvlpErBUVwFzgNtTcixOReAdUdegRS5IaU/gEMJyOuXrJpkp4LZ8189RR9TaoTla1XJPkpgLNX+rCdn5pQ0FyV7MXRaf9mpH5rxiUa0AS+k4xKBsAC2LCVm06E4Ih2mqz2EgqhueEN4KgnUOVsyJeG3CM+kdFlgTZynEm7ROQ47tKAl4IsiuvXFYUi6rKZPnPcSvjfm+Ik6Udv64tCr8VbzJM6aZ/2xVGcj5sCZ1ydVCbdMNw7f62zkW8y5XRr/hwB89TSt6HBwm/mMj2mtEIDnns7esclPxusUU42cfY4A3PF02Ihm0vPbnv+gF33OrWLojSxozn4C0O74yYDHvFnFoLgMOidcsNrkmlMNhkoaX0vHFQJSdF4hWGWXNKNOHR/8dv4UsKHCKsks2Iq0dck+QUrcdErdJDYzkEWpi5zwrhSvq7Jr9vJh1Ll8mA7kew0XUVaNXdObKyuKfE6nyLE3FJ8KZMjJTRd0FQWyIV3KdaqV1DflxInIsY+TE4rAVeVGca9Ml3XE7iSHFIADeurPtLGq2or6pjQmUzNq0eJ/4x94LiDUc+50cgAAAABJRU5ErkJggg=="/>
                            </defs>
                        </svg>
                        <p class="text-[18px]">Personnes inconnues</p>
                    </div>
                    <p>20 personnes inconnue aux système la semaine passée</p>
                </div>

                <div class="bg-yellow-o p-2 w-4/4 md:w-2/4 lg:w-1/4">
                    <div class="flex gap-1 items-center">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="30" height="30" fill="url(#pattern0_43_54)"/>
                            <defs>
                            <pattern id="pattern0_43_54" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_43_54" transform="scale(0.02)"/>
                            </pattern>
                            <image id="image0_43_54" width="50" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEcUlEQVR4nO2ZWYgcVRSGv19jXDCuGFAU3CIKiogGQR9EwSiI4sL4oBDwZcAlJpm6t2eihkb0wUgUVJSgoL7kLT4EQhAjTpJJCEhGUNCE4IZBzGjUKIr7wmlPz1T3VHdXdddsOD8UNLfO9te99/Q598I85jG3sAKODdLTQTpoT5TW2RhzDUF6MUr/pB8bm7GAorQrSu9GWJRXZwCuCNJfQfotwlUJLLXfNmbvcvuGReY7SDvpFUEa9a/5BqBcAUjDrrM+ZWe9z8xwTtcyn25nlF6RwHlBOlwzCI92kg9wlzv/eiWcUh9fAScF6ZC9q8CdnexEeMztfDcEF1IGKnBjlP60pZHALa3kqrAwSAec9P0ZwT3gwX3SbuMHWJbHX1ew2fCl8UMFLmkhU3GZD6uwoPl9HxwdpA9qMjVekxFhSZS+d5lHmAK0XbMJLA7SEZ+NZR2+ttk4YjqTiEjvFd2ThWFZJEi7g7Q9I4ANPhtbOtqRtrjshox3O8xHkSzZAAsuSvsCLLclUER3EC6zNR2l3wfg4k7yJmOypmO6RXz12fKE5bVYpXfI+hKpP64DRQhFaZvrPpc3IJN1nW1FCARPJh7n9qyMc1SEviDtT/0bfxqhP2vjjgcEt6XS5Ol5iQzBqfW0nsCtreSqGXEF6bNOcZniggzmu7Nk++GYuoMEHqYgTMft7zdbtK4sGlZKWwJtCFmgOzKdwEp3sq9VIO1gOqbrmW5VCyLDQfqoMIG8sGVky8lnI/NPq5Z9JpbpriwZ0+1maZaGIL3gAbzdSqa5+m1j602XeZ7pRN70mZeIVQpB+sOeBC6dssAzAtyap7/IS8RlX3K5rV0FFaSRZoepLDHSLF+Bm+olxho4oywiZitMlDg3F46zg0BDQ2NZwwpCL+iSTh+pCJGaPCStis4icXZEBR7KU4Z3S6Ta2AY8yFTAmqQofeOzcXsenaJEDAHucPlvV8NplI0gPeuzMblQK5GIIUhvuc4zlIkAF0TpV+/YrpxqIoNweaqavoiyEKTNHszLRfS6JWII0iu+AjZTBiJc7wZ/XAVnTheRBBZbW92p4yRvDxCl993YUFH9XogYKrCm3RlAbljNX+9LqnDcdBOpwsIofeyZsr+ofvqU7ys30teVjR6JGBK42/XHBuFkiiJIT6XKlK5OM5qaop09nN6MuJ11hU8XU+l2KTOMgcaz5CW5FaO0yb/Aa8wSBOl1j2lTLoUKXBOlv4P08wCcwyxBhLOi9JPv2evaCtdOLKS9nm7X9uo8T6tbyB6s9f02arG2FKzAfS54sAon9Oq4jKyVxmo4Pkqfmy2LlSxU4cQgfemzcQ8loGwihgj3+sc+ZFcVNCNIT7jAnrIOj9PNUCm3ThPpeI/bfZI0KnC2be7aJodrmeVI4GpPSL8MwrnjLyzNOsONzBFEaaPP9KvpwdrFyhCczxxB+K9HMiKHJwZ9k1vJzhxBAjf4KvpifDBAtdUJxWx/QvqC1u/2LGuNzXRgMf8zFqTHi15KzWMe/1f8C7eB2u4lTAWwAAAAAElFTkSuQmCC"/>
                            </defs>
                        </svg>
                        <p class="text-[18px]">Menances</p>
                    </div>
                    <p>4 personnes suspect la semaine passée</p>
                </div>
                <button class="bg-greenLight-500 text-white flex items-center gap-2 rounded-2xl w-fit hover:scale-105">
                           Voir vos historiques
                        </button>
            </div>

            <h3 class="text-4 text-justify">
                Simplifier vous avec le modèle assistant AI perfoment et fiable pour la reconnaissance faciale  en un seul click
            </h3>
        </div>
    </div>
</template>
<style scoped>
    
    .text-color-2{
        color:rgb(93, 2, 2);
    }
    .bg-yellow-o{
        background: rgba(199, 169, 67, 0.372);
    }
    .activites{
        position: relative;
    }
    .activites::before{
        position: absolute;
        content: 'Rapport des activites';
        top:-0px;
    }
</style>