<script setup>
import Project from "@/components/cards/ProjectCard.vue";
</script>

<template>
    <div class="proj-container bg-[#6b6b6b] pt-25 pb-25">
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
            <Project class="project" ProjTitle="FNAF Fan Game" DisplayImg="/images/freddy-icon.png" 
                description="This is my attempt to get into game development. I will use software such as blender to create the 3D models and the game environment. The software Clickteam Fusion 2.5 will be used to create the game. Once the game is completed, it will be released onto the GameJolt, Steam, and Epic Games stores." 
                ProjRedirect="https://www.linkedin.com/in/m-asim-salman/details/projects/?profileId=ACoAAETThJ8BpgbHom_GtPcBzWefoQKCC1_R22A"
            />
            <Project class="project" ProjTitle="Valkyrie Web-Novel" DisplayImg="/images/valk.jpeg" 
                description="This was a story I've wanted to write. I was unsure of the length, but I also wanted to share this story with my friends so I would release my story chapter by chapter." 
                ProjRedirect="https://www.linkedin.com/in/m-asim-salman/details/projects/?profileId=ACoAAETThJ8BpgbHom_GtPcBzWefoQKCC1_R22A"
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

    .proj-container{padding-top: 30px;}

    h1{display: none}
    h2{display: block}
}
</style>