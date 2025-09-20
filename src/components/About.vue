<script setup>
import { ref } from "vue";
import SmallCard from "./cards/SmallHoverCard.vue";
import LargeCard from "./cards/LargeHoverCard.vue";

const activeTab = ref("experience");
</script>

<template>
<div class="about-container pb-15">
    <h1 class="text-[#1f1f1f] text-center font-[outfit-9] text-[2.5rem] whitespace-nowrap">ABOUT ME</h1>
    <div class="about-content">
        <div class="left-side bg-[#6b6b6b] rounded-[30px] p-[40px]">
            <img src="@/assets/images/me.jpg" class="rounded-full border-7 border-[#9c9c9c]">
            <p class="font-[outfit-4] text-[31px] leading-relaxed">
                Hello 👋 My name is Muhammad Asim Salman (Asim). I'm a third-year
                undergraduate student at Toronto Metropolitan University with a
                major in Computer Engineering and a minor in Computer Science. <br/>
                I'm a detail-oriented and adaptable individual with strong
                technical, organizational, and communication skills. Experienced in
                working both independently and in teams to complete projects
                efficiently and accurately. Skilled in data management, software
                tools, and troubleshooting.
            </p>
        </div>
        <div class="right-side pl-0">
            <div class="flex gap-15 mb-6 pt-10 justify-center">
                <!-- Experience -->
                <button class="rounded-md font-semibold transition" :class="activeTab === 'experience'" @click="activeTab = 'experience'">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" width="38" height="38" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd">
                        <g><path d="M 252.5,50.5 C 256.594,49.7046 259.761,51.038 262,54.5C 268.033,64.3703 273.866,74.3703 279.5,84.5C 292.071,87.9761 304.738,91.1428 317.5,94C 320.689,95.5444 321.855,98.0444 321,101.5C 313.043,111.792 304.71,121.792 296,131.5C 296.168,143.69 297.002,155.856 298.5,168C 299.023,172.471 297.19,175.304 293,176.5C 280.561,171.364 268.061,166.364 255.5,161.5C 242.939,166.364 230.439,171.364 218,176.5C 213.81,175.304 211.977,172.471 212.5,168C 213.998,155.856 214.832,143.69 215,131.5C 206.29,121.792 197.957,111.792 190,101.5C 189.145,98.0444 190.311,95.5444 193.5,94C 206.262,91.1428 218.929,87.9761 231.5,84.5C 238.01,72.8038 245.01,61.4704 252.5,50.5 Z"/></g>
                        <g><path d="M 191.5,136.5 C 198.953,138.071 201.119,142.405 198,149.5C 177.983,164.017 162.483,182.35 151.5,204.5C 143.131,208.237 138.965,205.571 139,196.5C 150.75,171.264 168.25,151.264 191.5,136.5 Z"/></g>
                        <g><path d="M 315.5,137.5 C 318.187,137.336 320.854,137.503 323.5,138C 345.546,153.765 361.879,174.099 372.5,199C 370.891,205.804 366.891,207.804 360.5,205C 356,197.833 351.5,190.667 347,183.5C 338,170.5 327,159.5 314,150.5C 310.471,145.639 310.971,141.305 315.5,137.5 Z"/></g>
                        <g><path d="M 247.5,191.5 C 287.45,190.956 309.783,210.456 314.5,250C 309.974,289.191 287.974,308.525 248.5,308C 216.401,301.901 199.068,282.568 196.5,250C 199.143,217.864 216.143,198.364 247.5,191.5 Z"/></g>
                        <g><path d="M 117.5,199.5 C 119.735,200.228 121.568,201.561 123,203.5C 126.788,210.912 130.955,218.079 135.5,225C 144.782,227.457 154.115,229.791 163.5,232C 165.988,234.627 166.155,237.46 164,240.5C 157.779,247.051 151.945,253.884 146.5,261C 147.5,269.333 148.5,277.667 149.5,286C 147.991,291.554 144.658,292.887 139.5,290C 132.283,286.558 124.95,283.391 117.5,280.5C 109.617,284.275 101.617,287.775 93.5,291C 88.422,292.257 86.0887,290.257 86.5,285C 87.7257,276.19 88.2257,267.357 88,258.5C 82.3333,252.167 76.6667,245.833 71,239.5C 70.1859,237.098 70.3526,234.765 71.5,232.5C 81.2318,229.984 90.8984,227.318 100.5,224.5C 105,216.833 109.5,209.167 114,201.5C 115.302,200.915 116.469,200.249 117.5,199.5 Z"/></g>
                        <g><path d="M 392.5,199.5 C 394.229,200.117 395.729,201.117 397,202.5C 401.374,210.083 405.874,217.583 410.5,225C 419.738,227.643 429.071,229.976 438.5,232C 440.396,233.808 440.896,235.975 440,238.5C 433.763,245.314 427.763,252.314 422,259.5C 422.285,267.144 422.785,274.811 423.5,282.5C 425.16,288.991 422.826,291.825 416.5,291C 408.541,287.403 400.541,283.903 392.5,280.5C 384.617,284.275 376.617,287.775 368.5,291C 362.922,292.09 360.589,289.756 361.5,284C 362.545,275.51 363.045,267.01 363,258.5C 356.064,251.571 349.897,244.071 344.5,236C 344.777,234.108 345.777,232.775 347.5,232C 356.554,229.82 365.554,227.487 374.5,225C 379.709,217.418 384.543,209.584 389,201.5C 390.302,200.915 391.469,200.249 392.5,199.5 Z"/></g>
                        <g><path d="M 241.5,326.5 C 274.703,323.464 304.703,331.631 331.5,351C 348.589,364.937 355.422,382.77 352,404.5C 348.535,416.966 341.035,426.132 329.5,432C 317.777,437.681 305.444,441.348 292.5,443C 264.39,446.724 236.39,446.058 208.5,441C 191.676,438.34 177.509,430.84 166,418.5C 154.299,399.47 154.966,380.803 168,362.5C 187.984,341.258 212.484,329.258 241.5,326.5 Z"/></g>
                    </svg>
                    <div class="text pointer-events-none absolute text-center opacity-0 transition-[0.2s]">
                        <span class="svg-text font-[outfit-5] text-[19px]">Experience</span>
                    </div>
                </button>

                <!-- Education -->
                <button class="rounded-md font-semibold transition justify-center items-center" :class="activeTab === 'education'" @click="activeTab = 'education'">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="30px" width="30px" version="1.1" id="Icons" viewBox="0 0 32 32" xml:space="preserve">
                        <g><path d="M31,26c-0.6,0-1-0.4-1-1V12c0-0.6,0.4-1,1-1s1,0.4,1,1v13C32,25.6,31.6,26,31,26z"/></g>
                        <g><path d="M16,21c-0.2,0-0.3,0-0.5-0.1l-15-8C0.2,12.7,0,12.4,0,12s0.2-0.7,0.5-0.9l15-8c0.3-0.2,0.6-0.2,0.9,0l15,8   c0.3,0.2,0.5,0.5,0.5,0.9s-0.2,0.7-0.5,0.9l-15,8C16.3,21,16.2,21,16,21z"/></g>
                        <path d="M17.4,22.6C17,22.9,16.5,23,16,23s-1-0.1-1.4-0.4L6,18.1V22c0,3.1,4.9,6,10,6s10-2.9,10-6v-3.9L17.4,22.6z"/>
                    </svg>
                    <div class="text pointer-events-none absolute text-center opacity-0 transition-[0.2s]">
                        <span class="svg-text font-[outfit-5] text-[19px]">Education</span>
                    </div>
                </button>

                <!-- Tech Stack -->
                <button class="rounded-md font-semibold transition" :class="activeTab === 'tech'" @click="activeTab = 'tech'">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="30" height="30" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd">
                        <g><path d="M 90.5,41.5 C 129.168,41.3333 167.835,41.5 206.5,42C 216.376,44.1063 225.376,48.1063 233.5,54C 249.471,68.9709 265.138,84.3042 280.5,100C 327.523,100.046 374.523,100.712 421.5,102C 447.329,107.829 463.163,123.663 469,149.5C 469.667,240.167 469.667,330.833 469,421.5C 463.167,447.333 447.333,463.167 421.5,469C 310.833,469.667 200.167,469.667 89.5,469C 63.6667,463.167 47.8333,447.333 42,421.5C 41.3333,311.167 41.3333,200.833 42,90.5C 48.3084,64.3585 64.4751,48.0251 90.5,41.5 Z M 134.5,166.5 C 215.167,166.333 295.834,166.5 376.5,167C 391.34,169.841 395.84,178.341 390,192.5C 386.481,196.676 381.981,198.843 376.5,199C 295.833,199.667 215.167,199.667 134.5,199C 119.66,196.159 115.16,187.659 121,173.5C 124.712,169.396 129.212,167.062 134.5,166.5 Z M 155.5,256.5 C 158.518,256.335 161.518,256.502 164.5,257C 193.117,277.949 221.45,299.282 249.5,321C 254.685,325.947 255.851,331.781 253,338.5C 225.5,360 198,381.5 170.5,403C 162.619,409.05 155.119,408.55 148,401.5C 144.667,396.167 144.667,390.833 148,385.5C 171.334,367.66 194.5,349.66 217.5,331.5C 194.476,313.309 171.31,295.309 148,277.5C 143.214,267.761 145.714,260.761 155.5,256.5 Z M 267.5,375.5 C 296.502,375.333 325.502,375.5 354.5,376C 363.916,379.663 367.416,386.496 365,396.5C 362.549,402.616 358.049,406.116 351.5,407C 324.5,407.667 297.5,407.667 270.5,407C 256.328,402.48 252.828,393.646 260,380.5C 262.426,378.548 264.926,376.881 267.5,375.5 Z"/></g>
                    </svg>
                    <div class="text pointer-events-none absolute text-center opacity-0 transition-[0.2s]">
                        <span class="svg-text font-[outfit-5] text-[19px]">Tech Stack</span>
                    </div>
                </button>
            </div>

            <transition name="fade-slide" mode="out-in">
                <div :key="activeTab">
                    <div v-if="activeTab === 'experience'" class="leading-relaxed">
                        <h2 class="text-[30px] text-[#1f1f1f] font-[outfit-9] mb-2">Experience</h2>
                        <div class="large-grid grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] auto-rows-[75px] justify-center gap-4 w-full h-full overflow-visible box-border">
                            <LargeCard LargeImage="/icons/UiUx-icon.png" LargeTitle="Freelance Front-End Engineer" details1="Web Developer" details2="Aug 2025 - Present" />
                            <LargeCard LargeImage="/icons/skyscanner-icon.png" LargeTitle="Skyscanner" details1="Virtual Frontend Software Engineer" details2="Aug 2025" />
                            <LargeCard LargeImage="/icons/hpe-icon.png" LargeTitle="Hewlett Packard Enterprise" details1="Virtual Software Engineer" details2="Jul 2025" />
                            <LargeCard LargeImage="/icons/ea-icon.png" LargeTitle="EA Sports" details1="Virtual Software Engineer" details2="February 2025" />
                            <LargeCard LargeImage="/icons/TheStoryGarden-icon.png" LargeTitle="The Story Garden" details1="Volunteer Supervisor" details2="Jul 2019 - Aug 2019" />
                            <LargeCard LargeImage="/icons/polycultural-icon.png" LargeTitle="Polycultural" details1="Volunteer Supervisor" details2="Jul 2019 - Aug 2019" />
                        </div>
                    </div>

                    <div v-else-if="activeTab === 'education'" class="leading-relaxed">
                        <h2 class="text-[30px] text-[#1f1f1f] font-[outfit-9] mb-2">Education</h2>
                        <div class="large-grid grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] auto-rows-[75px] justify-center gap-4 w-full h-full overflow-visible box-border">
                            <LargeCard LargeImage="/icons/tmu-icon.png" LargeTitle="Toronto Metropolitan University" details1="Bachelor of Computer Engineering" details2="Sep 2022 - Exp. May 2028" />
                            <LargeCard LargeImage="/icons/erindale-icon.png" LargeTitle="Erindale Secondary School" details1="High School Diploma" details2="Sep 2018 - Jun 2022" />
                        </div>
                    </div>

                    <div v-else class="leading-relaxed">
                        <h2 class="text-[30px] text-[#1f1f1f] font-[outfit-9] mb-2">Tech Stack</h2>
                        <div class="small-grid grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] auto-rows-[75px] justify-center gap-4 w-full h-full overflow-visible ml-0">
                            <SmallCard SmallImage="/icons/HTML-icon.png" SmallTitle="HTML" details="Intermediate"/>
                            <SmallCard SmallImage="/icons/css-icon.png" SmallTitle="CSS" details="Intermediate"/>
                            <SmallCard SmallImage="/icons/js-icon.png" SmallTitle="JavaScript" details="Intermediate"/>
                            <SmallCard SmallImage="/icons/vue-icon.png" SmallTitle="VUE" details="Novice"/>
                            <SmallCard SmallImage="/icons/react-icon.png" SmallTitle="React" details="Novice"/>
                            <SmallCard SmallImage="/icons/nextjs-icon.png" SmallTitle="NEXT" details="Learning..."/>
                            <SmallCard SmallImage="/icons/angular-icon.png" SmallTitle="ANGULAR" details="Learning..."/>
                            <SmallCard SmallImage="/icons/tailwind-icon.png" SmallTitle="Tailwind" details="Intermediate"/>
                            <SmallCard SmallImage="/icons/java-icon.png" SmallTitle="Java" details="Advanced"/>
                            <SmallCard SmallImage="/icons/python-icon.png" SmallTitle="Python" details="Intermediate"/>
                            <SmallCard SmallImage="/icons/c-icon.png" SmallTitle="C" details="Intermediate"/>
                            <SmallCard SmallImage="/icons/cpp_icon.png" SmallTitle="C++" details="Intermediate"/>
                        </div>
                        
                    </div>
                </div>
            </transition>

        </div>
    </div>
</div>
    
</template>

<style scoped>
.about-content{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem; 
    padding: 30px
}
.left-side {
    box-shadow: 0px 5px 50px 4px #000000c0;
}
.left-side img {
    float: left;
    margin: 0 1rem 1rem 0;
    width: 350px;
}
button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    background: #2a2a2a;
    border: 1px solid #1a1a1a;
    border-radius: 18px;
    cursor: pointer;
    position: relative;
    box-shadow: 0px 0px 10px 4px #0000004f;
}
button svg{
    width: 70%;
    transition-duration: .2s;
    display: flex;
    align-items: left;
    justify-content: center;
    fill: #b5b5b5;
    margin-bottom: 2px;
    width: 100%;
}
button:hover{
   background: #3a3a3a; 
}
button:hover svg{
    fill: #ffffff;
}
button:hover .text{
    box-shadow: 0px 0px 10px 4px #0000004f;
    background: #3a3a3a;
    border: 1px solid #1a1a1a;
    padding: 5px;
    width: 250%;
    border-radius: 10px;
    color: #ffffff;
    opacity: 1;
    transition-duration: .2s;
    margin-bottom: 90px;
}
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.2s ease;
}
.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(10px);
}
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
@media (max-width: 768px) {
    .about-content {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
    }
    .left-side img {
        display: none;
    }

    .left-side p {
        font-size: medium;
    }
    .about-container{
        padding-bottom: 0;
    }
    .small-grid{
        grid-template-columns: repeat(auto-fit,150px);
        grid-auto-rows: 65px;
        gap: clamp(8px, 5vw, 180px);
        left: 0%;
    }
}
</style>