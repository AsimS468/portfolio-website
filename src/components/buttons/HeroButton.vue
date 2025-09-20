<script setup>
defineProps({
    header: {
        type: String,
        required: true,
    },
    subtext: {
        type: String,
        required: true,
    }
});
</script>

<template>
    <div class="home-card-link relative flex items-center cursor-pointer bg-[#2a2a2a] text-[16px] transition-[0.2s] mb-[30px] border-[#3f3f3f] border-[3px] ml-0 rounded-[40px] w-[100%] h-[100px] min-w-[100px]">
        <div class="hero-card">
            <slot name="icon" />
            <p class="homeCard-header absolute w-[300px] ml-[100px] text-[25px] font-[altone-bold] text-[#FFFFFF]"> {{ header }} </p>
            <p class="homeCard-subtext absolute w-[300px] ml-[100px] text-[20px] font-[outfit-6] text-[#b5b5b5] opacity-0"> {{ subtext }} </p>
        </div>
        <svg class="homeSvg absolute right-[15px] top-[15px] fill-[#b5b5b5]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="30" height="30">
            <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"/>
        </svg>
    </div>
</template>

<style scoped>
.home-card-link {
    box-shadow: 0px 5px 15px 4px #00000054;
}

.homeSvg, .iconSvg {
    transition: 0.2s;
}

.home-card-link:hover .homeSvg {
    fill: #b5b5b5;
    transition: 0.2s;
}

.home-card-link:hover .iconSvg {
    fill: #b5b5b5;
    transition: 0.2s;
}

.homeCard-header {
    transform: translateY(-50%);
    transition: all 0.2s ease-in-out;
}

.homeCard-subtext {
    transition: all 0.2s ease-in-out;
    transform: translateY(0%);
}

.home-card-link:hover .homeCard-header {
    transform: translateY(-80%);
}

.home-card-link:hover .homeCard-subtext {
    opacity: 1;
}


.home-card-link:hover .iconSvg {
    height: 80px;
    width: auto;
    margin-right: 17px;
    margin-left: 10px;
    margin-top: -5px;
}

.home-card-link:hover {
    background: #3a3a3a;
    border: 3px solid #b5b5b5;
    transition: 0.2s;
}

@media (max-width: 768px) {
    .home-card-link {
        width: 100px;
        height: 100px;
        min-width: 100px;
    }

    .homeCard-header,
    .homeCard-subtext,
    .homeSvg {
        display: none;
    }

    .home-card-link:hover .iconSvg {
        height: 65px;
        width: auto;
        margin-left: 15px;
    }

    .home-card-link:hover {
        height: 100px;
        width: auto;
        margin-left: 15px;
    }
}

</style>