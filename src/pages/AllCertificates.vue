<script setup>
import Certificate from '@/components/cards/CertificateCard.vue';
</script>

<template>
    <div class="certif-container bg-[#242424] pt-25 pb-25">
        <h1 class="text-center font-[outfit-9] text-[2.5rem] whitespace-nowrap">Badges of Honor</h1>
        <h2 class="text-center font-[outfit-9] text-[2.5rem] whitespace-nowrap hidden">CERTIFICATES</h2>
        <div class="proj-grid grid grid-cols-[repeat(auto-fit,500px)] auto-rows-[450px] justify-center gap-8 mt-10 w-full h-full overflow-visible box-border">
            <Certificate class="certif" DisplayImg="/images/skyscanner-certificate.jpg" CertificateLink="/documents/skyscanner-certificate.pdf"/>
            <Certificate class="certif" DisplayImg="/images/hpe-certificate.jpg" CertificateLink="/documents/hpe-certificate.pdf"/>
            <Certificate class="certif" DisplayImg="/images/EA-certificate.jpg" CertificateLink="/documents/EA-Certificate.pdf"/>
            <Certificate class="certif" DisplayImg="/images/6.jpg" CertificateLink="https://www.udemy.com/certificate/UC-7fd1385b-1a92-40fe-83a7-e9aa8732e9d8"/>
            <Certificate class="certif" DisplayImg="/images/7.jpg" CertificateLink="https://www.udemy.com/certificate/UC-972b6692-472a-4653-a2bd-6480fd0f82e0"/>
            <Certificate class="certif" DisplayImg="/images/8.jpg" CertificateLink="https://www.udemy.com/certificate/UC-1fe2b67e-34e2-44b5-b9dc-526cc0245d8d"/>
            <Certificate class="certif" DisplayImg="/images/IC.jpg" CertificateLink="https://www.coursera.org/account/accomplishments/specialization/HB6N75LG2K6B"/>
            <Certificate class="certif" DisplayImg="/images/IC1.jpg" CertificateLink="https://www.coursera.org/account/accomplishments/verify/D6TEQSJX66XV?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"/>
            <Certificate class="certif" DisplayImg="/images/IC2.jpg" CertificateLink="https://www.coursera.org/account/accomplishments/verify/956U2YK88Y6C?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"/>
            <Certificate class="certif" DisplayImg="/images/IC3.jpg" CertificateLink="https://www.coursera.org/account/accomplishments/verify/E9LRWZDNXHDN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"/>
            <Certificate class="certif" DisplayImg="/images/1.jpg" CertificateLink="/documents/WHMIS.pdf"/>
            <Certificate class="certif" DisplayImg="/images/2.jpg" CertificateLink="https://www.udemy.com/certificate/UC-66695bc7-af94-4f89-993e-85229ef23596"/>
            <Certificate class="certif" DisplayImg="/images/3.jpg" CertificateLink="https://www.udemy.com/certificate/UC-b164abf7-974c-4e75-8574-404d68524c56"/>
            <Certificate class="certif" DisplayImg="/images/4.jpg" CertificateLink="https://www.udemy.com/certificate/UC-178450c5-fae5-4294-93f7-e159e0f39955"/>
            <Certificate class="certif" DisplayImg="/images/5.jpg" CertificateLink="https://www.udemy.com/certificate/UC-37b59d56-9f18-48a7-9ad0-de371f13df63"/>
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
        grid-auto-rows: 270px;
    }

    .certif-container{padding-top: 30px;}

    h1{display: none}
    h2{display: block}
}
</style>