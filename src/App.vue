<script setup>
import { onMounted } from "vue";

import DesktopNavBar from "./components/desktopComponents/DesktopNavBar.vue";
import MobileHeader from "./components/mobileComponents/Header.vue";
import MobileNavBar from "./components/mobileComponents/MobileNavBar.vue";


</script>

<template>
    <div class="">

        <div class="desktop-wrapper fixed pointer-events-auto top-0 left-0 w-[100%] pt-3 z-60000000000000">
            <DesktopNavBar />
        </div>

        <div class="mobile-header-wrapper fixed top-0 left-0 w-[100%] pt-3 z-60000000000000">
            <MobileHeader />
        </div>

        <div class="mobile-nav-wrapper fixed justify-center items-center bottom-0 w-[100%] pt-7 z-60000000000000">
            <MobileNavBar />
        </div>

        <main class="app-content">
            <RouterView />
        </main>

        <footer class="bg-[#6b6b6b] font-[outfit-4] text-[1.6rem] p-7 text-center">
            <p>© {{ new Date().getFullYear() }} Muhammad Asim Salman. All rights reserved.</p>
        </footer>
    </div>
</template>

<style scoped>
.desktop-wrapper, .mobile-header-wrapper{
    animation: slideDown 0.6s ease forwards;
}

.mobile-nav-wrapper{
    animation: slideUp 0.6s ease forwards;
}

@media (max-width: 768px) {
    .desktop-wrapper {
         display: none; 
    }
    .mobile-header-wrapper, .mobile-nav-wrapper {
         display: block; 
    }
    
}

@media (min-width: 769px) {
    .desktop-wrapper { 
        display: block; 
    }
    .mobile-header-wrapper, .mobile-nav-wrapper { 
        display: none; 
    }
}
</style>
