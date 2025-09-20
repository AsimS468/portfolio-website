<script setup>
defineProps({
    SmallImage: {
        type: String,
        required: true,
    },
    SmallTitle: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    }
});
</script>

<template>
    <div class="short-card relative flex items-center bg-[#2a2a2a] border-[#3f3f3f] border-[3px] mb-[30px] rounded-[25px] w-[250px] h-[75px] transition-all duration-[0.2s]">
        <img :src="SmallImage" class="card-img w-[40px] mr-[20px] ml-[10px] mt-[12px] mb-[10px] transition-all duration-[0.2s]" />
        <div class="card-content">
            <p class="short-title absolute transition-all duration-[0.2s] top-[50%] translate-y-[-40%] text-[18px] font-[altone-bold] text-[#FFFFFF]"> {{ SmallTitle }} </p>
            <p class="short-desc absolute transition-all duration-[0.2s] opacity-0 text-[16px] font-[outfit-9] text-[#b5b5b5]"> {{ details }} </p>
        </div>
    </div>
</template>

<style scoped>
.short-card {
    box-shadow: 0px 0px 15px 4px #00000054;
    transition: 0.2s;
}
.short-card:hover {
    background: #3a3a3a;
    border: 3px solid #b5b5b5;
    transition: 0.2s;
}
.short-card:hover img {
    width: 50px;
    height: auto;
    transition: 0.2s;
}
.short-card:hover .short-title {
    transform: translateY(-20%);
    transition: 0.2s;
}
.short-card:hover .short-desc {
    transition: 0.2s;
    opacity: 1;
}

@media (max-width: 768px) {
    .short-card {
        width: 150px;
        height: 65px;
    }
    .card-img{
        width: 25px;
    }
    .short-title{
        font-size: 13px;
    }
    .short-desc{
        font-size: 11px;
    }
    .short-card:hover img {
        width: 35px;
        height: auto;
        transition: 0.2s;
    }
    .short-card:hover .short-title {
        transform: translateY(-30%);
    }
}
</style>