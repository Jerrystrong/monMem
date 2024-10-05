<script setup>
import { ref, useTemplateRef } from 'vue';

  const menu=useTemplateRef('menu')

  const stateMenu=ref(false)
  const toggleMenu=()=>{
    stateMenu.value=!stateMenu.value
    // menu.value.classList.add="jey"
  }
  const closeMenu=()=>{
    stateMenu.value=!stateMenu.value
  }
  
</script>
<template>
    <nav className="px-[20px] md:px-[100px] py-[20px] flex justify-between items-center">
      <h1 className="text-black text-[36px]">SecureAIOp</h1>
      <div 
      className="hidden lg:flex flex-row 
      gap-[30px] 
       p-5 lg:bg-none lg:relative lg:w-fit 
       lg:h-fit lg:p-0"
       >
        <img src="/close1.png" alt="" className="w-5 lg:hidden self-end" @click="closeMenu">
        <RouterLink to="/" class="hov flex gap-1" :class="'activeLink'"><span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="18" height="18" fill="url(#pattern0_41_15)"/>
        <defs>
        <pattern id="pattern0_41_15" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_41_15" transform="scale(0.0416667)"/>
        </pattern>
        <image id="image0_41_15" width="24" height="24" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9klEQVR4nGNgGDGgfPcqufJdq86C8e5VctQ2XLds16pH5btW/Qfhsl0rn1XsXGVMFcPLdqxyLdu16iPMcLglO1d9Lt2x2ocyl+9YmVS+c9UvdMOR8J/y3asySTf5/3/G8p0rG/AYjI4n1tfXMxFldv2qVWzlu1YuIcHw/1C8un7/fA68hldsWSpYtnPlfjIM/w/BK48W7V8qgj28ty9XKN+56hr5hq+CprBVt0t3rVFFNXzHCv2ynaueUGp4OQzvXPW8dNdqE4QFO1fdoZrhuxA+wR5UFBrMQAgMmAUMZKobteD/SAyinasOY2pceYhcdaOAgRAAAK9OxgPSWyzQAAAAAElFTkSuQmCC"/>
        </defs>
        </svg>
        </span>Acceuil</RouterLink>
        <RouterLink to="/about" class="hov">About App</RouterLink>
        <RouterLink to="/contact" class="hov">Contact</RouterLink>
      </div>

      <div 
      className="flex flex-col 
      lg:flex-row gap-[30px] absolute
       bg-white top-0 right-0 w-1/2 h-full z-30 
       p-5 lg:bg-none lg:relative lg:w-fit 
       lg:h-fit lg:p-0 lg:hidden"
        v-if="stateMenu"
        ref="menu"
        id="menu"
       >
        <img src="/close1.png" alt="" className="w-5 lg:hidden self-end" @click="closeMenu">
        <RouterLink to="/" class="hov" :class="'activeLink'">Acceuil</RouterLink>
        <RouterLink to="/about" class="hov">About App</RouterLink>
        <RouterLink to="/contact" class="hov">Contact</RouterLink>
      </div>
      <div class="connectionBloc" className="md:flex gap-5 items-center hidden">
        <RouterLink to="/signin" className="text-[18px]">Sing in</RouterLink>
        <RouterLink to="/signup" className="text-[16px] bg-yellowB font-bold w-[100px] h-[40px] rounded-lg flex justify-center items-center">Sing up</RouterLink>
      </div>
      <div id="nav-log"  @click="toggleMenu">
        <img src="/menu1.png" alt="menu-icon" className="lg:hidden">
      </div>
  </nav>
</template>
<style scoped>
  .hov{
    color:#485563;
    position: relative;
    transition: all .3s ease-out;
  }
  .hov:hover{
    color:#77BAAA;
    position: relative;
  }
  .hov::after{
    content: '';
    width:20px;
    height: 3px;
    background: #77BAAA;
    display:none;
    border-radius: 5px;
  transition: all .4s ease-out;
}
.hov:hover::after{
  transition: all .4s ease-out;
  display: block;
  animation: fade .4s ease-out forwards;
}
@keyframes fade {
  from{
    opacity: 0;
    transform: translateX(-5px);
  }to{
    opacity: 1;
    transform: translateX(0px);
  }
}
.activeLink{
  position: relative;
}
.activeLink::after{
  content: '';
    width:20px;
    height: 3px;
    background: #77BAAA;
    display:block;
    border-radius: 5px;
    transition: all .4s ease-out;
    position: absolute;
    bottom: 0;
}
</style>