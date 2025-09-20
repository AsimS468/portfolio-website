<script setup>
import 'vue3-carousel/carousel.css'
import { ref, onMounted, onUnmounted } from 'vue'

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import Certificate from './cards/CertificateCard.vue';

const carouselConfig1 = {
    itemsToShow: 2.5,
    wrapAround: true,
    dir: 'ltr',
    pauseAutoplayOnHover: 'true',
    mouseDrag: 'true',
    autoplay: '2500',
    gap: 250
}

const carouselConfig2 = {
    itemsToShow: 2.5,
    wrapAround: true,
    dir: 'ttb',
    pauseAutoplayOnHover: 'true',
    touchDrag: 'true',
    autoplay: '2500',
    height: '500px',
    gap: 250
}



</script>

<template>
    <h1 class="text-center font-[outfit-9] text-[2.5rem] whitespace-nowrap">Badges of Honor</h1>
    <h2 class="text-center font-[outfit-9] text-[2.5rem] whitespace-nowrap hidden">CERTIFICATES</h2>
    <div class="carousel-lg p-20 bg-[#6b6b6b] mt-10 mx-20 rounded-[50px]">
        <Carousel v-bind="carouselConfig1">
            <Slide>
                <div class="carousel__item">
                    <Certificate class="certif" DisplayImg="/images/skyscanner-certificate.jpg" CertificateLink="/documents/skyscanner-certificate.pdf"/>
                </div>
            </Slide>
            <Slide>
                <div class="carousel__item">
                    <Certificate class="certif" DisplayImg="/images/hpe-certificate.jpg" CertificateLink="/documents/hpe-certificate.pdf"/>
                </div>
            </Slide>
            <Slide>
                <div class="carousel__item">
                    <Certificate class="certif" DisplayImg="/images/EA-certificate.jpg" CertificateLink="/documents/EA-certificate.pdf"/>
                </div>
            </Slide>
            <Slide>
                <div class="carousel__item">
                    <Certificate class="certif" DisplayImg="/images/IC.jpg" CertificateLink="https://www.coursera.org/account/accomplishments/specialization/HB6N75LG2K6B"/>
                </div>
            </Slide>
            <Slide>
                <div class="carousel__item">
                    <Certificate class="certif" DisplayImg="s/images/7.jpg" CertificateLink="https://www.udemy.com/certificate/UC-972b6692-472a-4653-a2bd-6480fd0f82e0"/>
                </div>
            </Slide>
            <Slide>
                <div class="carousel__item">
                    <Certificate class="certif" DisplayImg="/images/8.jpg" CertificateLink="https://www.udemy.com/certificate/UC-1fe2b67e-34e2-44b5-b9dc-526cc0245d8d"/>
                </div>
            </Slide>

            <template #addons>
                <!-- <Navigation /> -->
                <Pagination />
            </template>
        </Carousel>
    </div>

    <div class="carousel-sm py-10 bg-[#6b6b6b] mt-10 mx-5 rounded-[50px]">
        <Carousel  v-bind="carouselConfig2">
            <Slide>
                <div class="carousel__item">
                    <Certificate class="certif" DisplayImg="/images/skyscanner-certificate.jpg" CertificateLink="/documents/skyscanner-certificate.pdf"/>
                </div>
            </Slide>
            <Slide>
                <div class="carousel__item">
                    <Certificate class="certif" DisplayImg="/images/hpe-certificate.jpg" CertificateLink="/documents/hpe-certificate.pdf"/>
                </div>
            </Slide>
            <Slide>
                <div class="carousel__item">
                    <Certificate class="certif" DisplayImg="/images/EA-certificate.jpg" CertificateLink="/documents/EA-certificate.pdf"/>
                </div>
            </Slide>
            <Slide>
                <div class="carousel__item">
                    <Certificate class="certif" DisplayImg="/images/IC.jpg" CertificateLink="https://www.coursera.org/account/accomplishments/specialization/HB6N75LG2K6B"/>
                </div>
            </Slide>
            <Slide>
                <div class="carousel__item">
                    <Certificate class="certif" DisplayImg="/images/7.jpg" CertificateLink="https://www.udemy.com/certificate/UC-972b6692-472a-4653-a2bd-6480fd0f82e0"/>
                </div>
            </Slide>
            <Slide>
                <div class="carousel__item">
                    <Certificate class="certif" DisplayImg="/images/8.jpg" CertificateLink="https://www.udemy.com/certificate/UC-1fe2b67e-34e2-44b5-b9dc-526cc0245d8d"/>
                </div>
            </Slide>
        </Carousel>
    </div>

    <div class="flex justify-center">
        <a href="/certificates" class="btn transition-[0.2s] mt-10 mb-25 bottom-0 w-[250px] h-[75px] bg-[#2a2a2a] border-[#3f3f3f] border-[3px] flex items-center justify-center rounded-[30px] text-white z-20">
            <span class="font-[altone-bold] text-2xl">See All →</span>
        </a>
    </div>

</template>

<style scoped>
.carousel-lg{
    box-shadow: 0px 0px 15px 4px #00000054;
}
.carousel-sm{
    display: none;
    box-shadow: 0px 0px 15px 4px #00000054;
}
@media (max-width: 768px) {
    .carousel-lg{
        display: none;
    }
    .carousel-sm{
        display: block;
    }
    h1{display: none}
    h2{display: block}
}
</style>