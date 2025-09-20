<script setup>
import Typed from "typed.js";
import { onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

import HeroButton from "@/components/buttons/HeroButton.vue";

const router = useRouter();
let typedInstance = null;

onMounted(() => {
  setTimeout(() => {
    const heroCards = document.querySelectorAll(".home-card-link");

    heroCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("visible");
      }, index * 250);
    });
  }, 400);

  typedInstance = new Typed(".element", {
    strings: [
      "An aspiring engineer",
      "A programmer",
      "A software developer",
      "A front-end engineer",
      "A quick learner",
      "An innovator",
      "A problem solver",
      "A chill dude",
      "A creative thinker",
      "A dedicated worker"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
  });
});

onBeforeUnmount(() => {
  if (typedInstance) {
    typedInstance.destroy();
  }
});
</script>


<template>
    <div class="cards">
        <div class="card card1 absolute bg-[#d4d4d4] w-[100vw] h-[80px] z-30 rounded-bl-[50px] rounded-br-[50px]">
        </div>
        <div class="card card2 absolute pt-15 w-[100vw] text-center bg-[#6b6b6b] z-20 rounded-bl-[50px] rounded-br-[50px]">
            <div class="text p-5 pt-25 pb-20">
                <h1 class="hero-intro text-center text-[2.3rem] pt-7 font-[outfit-5] whitespace-nowrap">Hello! I'm</h1>
                <div class="image">
                    <img src="@/assets/images/me.jpg" class="rounded-full border-7 border-[#9c9c9c]">
                </div>
                <h2 class="hero-name text-center text-[5.45rem] font-[altone-bold]">MUHAMMAD ASIM SALMAN</h2>
                <h3 class="hero-details text-center text-[2rem] pt-7 font-[outfit-5]"><span class="element"></span></h3></div>
        </div>
        <div class="card card3 absolute bg-[#242424] w-[100vw] h-[800px] z-10 rounded-bl-[50px] rounded-br-[50px]">
            <div class="hero-buttons grid grid-cols-3 p-10 gap-4 mt-[580px]">
                <a href="/whatsnew">
                    <HeroButton header="What's New" subtext="See what I've been up to">
                        <template #icon>
                            <svg class="iconSvg absolute mr-[20px] ml-[10px] left-0 top-[15px] w-[auto] h-[70px] fill-[#ffffff56]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
                                <path d="M6,0C2.68,0,0,2.68,0,6s2.68,6,6,6s6-2.68,6-6S9.31,0,6,0z M6.5,9.5h-1v-1h1V9.5z M7.26,6.17C6.73,6.51,6.5,6.68,6.5,7v0.5h-1V7c0-0.9,0.71-1.35,1.23-1.67C7.27,4.99,7.5,4.82,7.5,4.5c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1V5h-1V4.5c0-1.1,0.9-2,2-2h1c1.1,0,2,0.9,2,2C8.5,5.4,7.79,5.85,7.26,6.17z" />
                            </svg>
                        </template>
                    </HeroButton>
                </a>
                <a href="/projects">
                    <HeroButton header="My Projects" subtext="Explore what I've built">
                        <template #icon>
                            <svg class="iconSvg absolute mr-[20px] ml-[10px] left-0 top-[15px] w-[auto] h-[70px] fill-[#ffffff56]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"  width="22" height="22" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd;">
                                <g><path d="M 90.5,41.5 C 129.168,41.3333 167.835,41.5 206.5,42C 216.376,44.1063 225.376,48.1063 233.5,54C 249.471,68.9709 265.138,84.3042 280.5,100C 327.523,100.046 374.523,100.712 421.5,102C 447.329,107.829 463.163,123.663 469,149.5C 469.667,240.167 469.667,330.833 469,421.5C 463.167,447.333 447.333,463.167 421.5,469C 310.833,469.667 200.167,469.667 89.5,469C 63.6667,463.167 47.8333,447.333 42,421.5C 41.3333,311.167 41.3333,200.833 42,90.5C 48.3084,64.3585 64.4751,48.0251 90.5,41.5 Z M 134.5,197.5 C 215.167,197.333 295.834,197.5 376.5,198C 391.34,200.841 395.84,209.341 390,223.5C 386.481,227.676 381.981,229.843 376.5,230C 295.833,230.667 215.167,230.667 134.5,230C 119.66,227.159 115.16,218.659 121,204.5C 124.712,200.396 129.212,198.062 134.5,197.5 Z"/></g>
                            </svg>
                        </template>
                    </HeroButton>
                </a>
                <a href="/certificates">
                    <HeroButton header="My Certificates" subtext="View my achievements">
                        <template #icon>
                            <svg class="iconSvg absolute mr-[20px] ml-[10px] left-0 top-[10px] w-[auto] h-[70px] fill-[#ffffff56]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25" height="25" style="shape-rendering:geometricPrecision; fill-rule:evenodd; margin-top: 1px;">
                                <g><path d="M 79.5,76.5 C 189.501,76.3333 299.501,76.5 409.5,77C 436.077,83.2443 452.244,99.7443 458,126.5C 458.333,166.167 458.667,205.833 459,245.5C 481.096,276.415 486.43,310.082 475,346.5C 467.369,367.1 454.869,384.1 437.5,397.5C 436.667,422.16 436.167,446.827 436,471.5C 431.32,481.217 423.82,484.384 413.5,481C 399.833,471.5 386.167,462 372.5,452.5C 358.833,462 345.167,471.5 331.5,481C 321.18,484.384 313.68,481.217 309,471.5C 309.153,446.441 308.319,421.607 306.5,397C 233.842,397.603 161.175,397.603 88.5,397C 57.2098,394.047 38.0431,377.213 31,346.5C 30.3333,273.167 30.3333,199.833 31,126.5C 36.9386,99.7303 53.1053,83.0636 79.5,76.5 Z M 133.5,161.5 C 207.501,161.333 281.501,161.5 355.5,162C 370.365,164.894 374.865,173.394 369,187.5C 365.481,191.676 360.981,193.843 355.5,194C 281.5,194.667 207.5,194.667 133.5,194C 118.635,191.106 114.135,182.606 120,168.5C 123.712,164.396 128.212,162.062 133.5,161.5 Z M 360.5,226.5 C 397.199,223.435 425.699,237.102 446,267.5C 466.521,308.89 460.021,345.39 426.5,377C 399.441,397.024 370.107,401.024 338.5,389C 299.42,369.011 282.92,337.177 289,293.5C 299.202,256.46 323.036,234.127 360.5,226.5 Z M 133.5,278.5 C 166.869,278.043 200.202,278.543 233.5,280C 242.177,284.19 245.343,291.024 243,300.5C 240.138,307.351 234.971,310.851 227.5,311C 194.133,311.957 160.799,311.624 127.5,310C 118.823,305.81 115.657,298.976 118,289.5C 121.076,282.726 126.242,279.059 133.5,278.5 Z"/></g>
                            </svg>
                        </template>
                    </HeroButton>
                </a>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
.card{
    box-shadow: 0px 5px 50px 4px #0000005d;
    animation: slideDown 0.6s ease forwards;
}

.homeSvg, .iconSvg {
    transition: 0.2s;
}

.home-card-link:hover .iconSvg {
    fill: #b5b5b5;
    transition: 0.2s;
}

.home-card-link:hover .iconSvg {
    height: 80px;
    width: auto;
    margin-right: 17px;
    margin-left: 10px;
    margin-top: -8px;
}

.text img{
    box-shadow: 0px 5px 50px 4px #0000005d;
    opacity: 0;
    height: 250px;
}

.image{
    display: none;
}


@media (max-width: 768px) {
    .card{
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    .card1{
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        height: 60px;
    }
    .card2{
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        margin-top: -80px;
    }
    .card3{
        height: 800px;
    }

    .hero-intro{
        font-size: 1.8rem;
        max-width: 100vw;
        text-align: center;
    }
    .hero-name{
        font-size: 2rem;
        max-width: 100vw;
        text-align: center;
        margin-top: 10px;
    }
    .hero-details{
        font-size: 1.5rem;
        max-width: 100vw;
        text-align: center;
        margin-bottom: -30px;
    }

    .hero-buttons{
        margin-top: 620px;
    }

    .image {
        display: flex;
        align-items: center;  
        justify-content: center;
        display: auto;

    }

    .text img{

        opacity: 1;
    }

    .home-card-link .iconSvg {
        height: 65px;
        width: auto;
        margin-left: 15px;
    }

    .home-card-link:hover .iconSvg {
        height: 65px;
        width: auto;
        margin-left: 15px;
        margin-right: 13px;

    }
    
}
    
</style>