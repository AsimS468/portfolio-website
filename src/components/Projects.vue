<script setup>
import Project from "@/components/cards/ProjectCard.vue";
</script>

<template>
    <h1 class="text-center font-[outfit-9] text-[2.5rem] whitespace-nowrap" >MADE BY ME</h1>
    <h2 class="text-center font-[outfit-9] text-[2.5rem] whitespace-nowrap hidden" >PROJECTS</h2>
    <div class="proj-grid grid grid-cols-[repeat(auto-fit,550px)] auto-rows-[400px] justify-center gap-8 mt-10 w-full h-full overflow-visible box-border">
        <Project class="project" ProjTitle="Portfolio Website" DisplayImg="/images/portfolio.png"
            description="This is my personal portfolio website, built with Vue and enhanced with subtle GSAP animations for smooth, engaging interactions. It showcases my projects, skills, and experience in a clean and responsive design, serving as both a creative space and a professional introduction." 
            ProjRedirect=""
        />
        <Project class="project" ProjTitle="Happy Chappy Website" DisplayImg="/images/happy-chappy.png" 
            description="This is a website created for a restaurant called Happy Chappy Grill, designed to highlight its menu and services while providing an accessible online presence. Multiple proposals were made to the company, but they chose not to move forward with the project." 
            ProjRedirect="https://happy-chappy-demo.netlify.app"
        />
        <Project class="project" ProjTitle="Café Alba Website" DisplayImg="/images/cafe-alba.png" 
            description="This is a website designed for a local café called Café Alba, created to showcase the menu, atmosphere, and brand online. The site was proposed to the company as a potential digital presence but was ultimately not adopted." 
            ProjRedirect="https://cafealba-demo.netlify.app"
        />
        <Project class="project" ProjTitle="PassVault" DisplayImg="/images/passvault.png" 
            description="This is a password manager application built with JavaFX that allows users to securely store and manage their credentials. It can generate strong, random passwords, encrypt stored data for security, and provide an organized interface for easy access to saved accounts." 
            ProjRedirect="https://github.com/AsimS468/PassVault-App"
        />
        <Project class="project" ProjTitle="Raspberry Pi Minecraft Server" DisplayImg="/images/r-pi-server.jpeg" 
            description="A 24/7 Minecraft Java Edition server hosted on a Raspberry Pi 4, using Paper to optimize performance and support up to 10 players. An OLED display was added to monitor system resources and server status." 
            ProjRedirect="https://www.linkedin.com/in/m-asim-salman/details/projects/?profileId=ACoAAETThJ8BpgbHom_GtPcBzWefoQKCC1_R22A"
        />
        <Project class="project" ProjTitle="Bluetooth Speaker" DisplayImg="/images/bt-speaker.jpeg" 
            description="A Bluetooth speaker built using the controller from wired earbuds, powered by two PAM8403 amplifier boards. Each board drove 3W speakers, with custom circuits added to separate low and high frequencies for better sound output." 
            ProjRedirect="https://www.linkedin.com/in/m-asim-salman/details/projects/?profileId=ACoAAETThJ8BpgbHom_GtPcBzWefoQKCC1_R22A"
        />
    </div>
    <div class="flex justify-center">
        <router-link to="/projects" class="btn transition-[0.2s] mt-20 bottom-0 w-[250px] h-[75px] bg-[#2a2a2a] border-[#3f3f3f] border-[3px] flex items-center justify-center rounded-[30px] mb-[15px] text-white z-20">
            <span class="font-[altone-bold] text-2xl">See All →</span>
        </router-link>
    </div>
    
</template>

<style scoped>
.project{
    box-shadow: 0px 0px 30px 8px #00000049;
}

.btn:hover{
    background: #3a3a3a;
    border: 3px solid #b5b5b5;
    transition: 0.2s;
}

@media (max-width: 768px) {
    .proj-grid{
        grid-template-columns: repeat(auto-fit,300px);
        grid-auto-rows: 250px;
    }

    h1{display: none}
    h2{display: block}
}
</style>
