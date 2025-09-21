<script setup>
import Hero from "@/components/Hero.vue"
import About from "@/components/About.vue"
import Projects from "@/components/Projects.vue"
import Certificates from "@/components/Certificates.vue"
import Contact from "@/components/Contact.vue"

</script>

<template>
<div class="sections">
    <!-- Hero Section -->
    <section id="hero" class="hero-section h-[115vh] w-[100vw] pt-0">
        <Hero />
    </section>

    <!-- About Section -->
    <section id="about" class="about-section bg-[#d4d4d4] w-[100vw] pt-20">
        <About />
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects-section bg-[#6b6b6b] w-[100vw] pt-20 pb-70">
        <Projects />
    </section>

    <!-- Certificates Section -->
    <section id="certificates" class="certificates-section bg-[#242424] w-[100vw] pt-20">
        <Certificates />
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section bg-[#6b6b6b] w-[100vw] pt-20">
        <Contact />
    </section>
</div>
    

</template>

<style scoped>
@media (max-width: 768px) {
    .desktop-wrapper {
         display: none; 
    }
    .mobile-header-wrapper, .mobile-nav-wrapper {
         display: block; 
    }
    .about-section, .projects-section, .certificates-section, .contact-section{
        padding-top: 30px;
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
