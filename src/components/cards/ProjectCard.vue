<script setup>
defineProps({
    DisplayImg: {
        type: String,
        required: true,
    },
    ProjTitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ProjRedirect: {
        type: String,
        required: true,
    }
});
</script>

<template>
    <div class="card-container group relative w-[550px] h-[400px] p-[15px] bg-[#d4d4d4] rounded-[30px] overflow-hidden">
        <!-- Image -->
        <div class="bg-[#d4d4d4] rounded-[20px] overflow-hidden">
            <img :src="DisplayImg" class="img w-full h-[280px] object-cover" />
        </div>

        <!-- Bar (always visible) -->
        <div class=" w-full justify-center items-center">
            <a :href="ProjRedirect" class="btn transition-[0.2s] absolute bottom-0 w-[200px] h-[75px] bg-[#2a2a2a] border-[#3f3f3f] border-[3px] flex items-center justify-center rounded-[30px] mb-[15px] text-white z-20 left-1/2 -translate-x-1/2">
                <span class="font-[altone-bold] text-2xl">See More →</span>
            </a>

        <!-- Sliding text (hidden until hover) -->
            <div class="text absolute left-0 bottom-0 w-full h-full bg-[#242424] bg-opacity-95 rounded-[20px] flex flex-col justify-start text-white text-xl z-10 p-[50px]">
                <h1 class="font-[altone-bold] text-2xl text-center">{{ ProjTitle }}</h1>
                <p class="mt-[40px]">{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.btn:hover{
    background: #3a3a3a;
    border: 3px solid #b5b5b5;
    transition: 0.2s;
}
.card-container .text {
    transform: translateY(100%);
    transition: transform 0.2s ease-in-out;
}

.card-container:hover .text {
    transform: translateY(0);
}

@media (max-width: 768px) {
    .card-container{
        width: 300px;
        height: 250px;
    }
    .img{
        height: 153px;
    }
    .btn{
        width: 130px;
        height: 50px;
        border-radius: 22px;
    }
    .btn span{
        font-size: 15px;
    }
    .text{
        padding: 25px;
    }
    .text h1{
        font-size: 20px;
    }
    .text p{
        font-size: 12px;
        margin-top: 15px;
    }
    
}
</style>
