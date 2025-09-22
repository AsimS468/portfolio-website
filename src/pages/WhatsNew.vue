<script setup>
import SeeMore from '../components/cards/SeeMoreCard.vue';
</script>

<template>
    <div class="wn-container bg-[#d4d4d4] pt-25 pb-25">
        <h1 class="text-center text-[#1f1f1f] font-[outfit-9] text-[2.5rem] whitespace-nowrap">What's New with Me</h1>
        <h2 class="text-center text-[#1f1f1f] font-[outfit-9] text-[2.5rem] whitespace-nowrap hidden">What's New</h2>
        

        <div class="see-more mt-7 mx-14 mb-10 rounded-[50px]"> 
            <SeeMore 
                title="Completed Google's UI/UX course on Coursera"
                date="September 21, 2025"
                description="I've just completed Google's Coursera course titled &quot;Design a User Experience for Social Good & Prepare for Jobs&quot; which teaches me user experience fundamentals along with a brief introduction on UI and how to prepare to successfully interview for an entry-level UX design job.
                In addition, i've completed Google's &quot;Accelerate Your Job Search with AI&quot; course which helps me explore new career possibilities and build a stand out resume with a step-by-step job search plan."
            />
        </div>




        <div class="see-more mt-7 mx-14 mb-10 rounded-[50px]"> 
            <SeeMore 
                title="New Portfolio Website finally out!"
                date="September 19, 2025"
                description="I have just launched my brand-new website, built with Vue.js and Tailwind CSS. In addition to these frameworks, Typed.js was used for the typewriter effect, Particles.js for the animated background particles, and Swiper.js for the carousels featured in the Projects and Certificates sections."
            />
        </div>

        <div class="see-more mt-7 mx-14 mb-10 rounded-[50px]"> 
            <SeeMore 
                title="Skyscanner Virtual Front-End Software Engineering Internship Complete!"
                date="August 4, 2025"
                description="I recently completed my one-month virtual internship with Skyscanner through Forage. During this program, I worked as a frontend engineer where I built a web application using React. One of my main tasks was developing a date-picking page with Skyscanner’s open-source Backpack React library. I also customized my application to improve usability and ran automated tests to make sure everything rendered correctly. This experience gave me valuable insight into frontend development practices and how large-scale companies structure their open-source tools."
            />
        </div>

        <div class="see-more mt-7 mx-14 mb-10 rounded-[50px]"> 
            <SeeMore 
                title="HPE Virtual Software Engineering Internship Complete!"
                date="August 1, 2025"
                description="As of today, I have completed my one-month virtual internship with Hewlett Packard Enterprise through Forage. Over the course of this program, I had the opportunity to dive into backend development by designing a RESTful web service to manage employee data. I built a Java Spring Boot application capable of handling HTTP requests and processing uploaded JSON files, while also writing unit tests to evaluate its performance. This experience allowed me to strengthen my skills in backend engineering and learn more about building scalable, testable applications."
            />
        </div>

        <div class="see-more mt-7 mx-14 mb-10 rounded-[50px]"> 
            <SeeMore 
                title="EA Virtual Software Engineering Internship Complete!"
                date="February 28, 2025"
                description="As of today, I have completed my one-month virtual internship with Electronic Arts through Forage. During this internship, I learned how to propose features for software, create their respective class diagrams, develop the features, and fix bugs. The programming language I used was C++. I would like to thank the Electronic Arts Emerging Talent team for giving me this incredible opportunity to learn and grow with them."
            />
        </div>

        <div class="see-more mt-7 mx-14 mb-10 rounded-[50px]"> 
            <SeeMore 
                title="Finished my Tailwind CSS certification!"
                date="February 15, 2025"
                description="I've finally completed my Udemy certification course on Tailwind CSS! Check it out in the Certificates section!"
            />
        </div>
    </div>
</template>

<style scoped>
.see-more{
    box-shadow: 0px 0 30px 4px #00000065;
}
@media (max-width: 768px) {

    .wn-container{padding-top: 30px;}
    h1{display: none}
    h2{display: block}
}
</style>

