<script setup>
defineProps({
    DisplayImg: {
        type: String,
        required: true,
    },
    CertificateLink: {
        type: String,
        required: true,
    }
});
</script>

<template>
    <div class="box h-[500px]">
        <div class="card-container group relative w-[500px] h-[450px] p-[15px] bg-[#d4d4d4] rounded-[30px] overflow-hidden">
            <!-- Image -->
            <div class="bg-[#242424] rounded-[20px] overflow-hidden">
                <img :src="DisplayImg" class="img w-full h-[320px] object-cover" />
            </div>

            <!-- Bar (always visible) -->
            <div class=" w-full justify-center items-center">
                <a :href="CertificateLink" target="_blank" class="btn transition-[0.2s] absolute bottom-0 w-[200px] h-[75px] bg-[#2a2a2a] border-[#3f3f3f] border-[3px] flex items-center justify-center rounded-[30px] mb-[15px] text-white z-20 left-1/2 -translate-x-1/2">
                    <span class="font-[altone-bold] text-2xl">See More →</span>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (max-width: 768px) {
    .card-container{
        width: 300px;
        height: 270px;
    }
    .img{
        height: 180px;
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
