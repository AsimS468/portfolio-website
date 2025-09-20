<script setup>
defineProps({
    LargeImage: {
        type: String,
        required: true,
    },
    LargeTitle: {
        type: String,
        required: true,
    },
    details1: {
        type: String,
        required: true,
    },
    details2: {
        type: String,
        required: true,
    }
});
</script>

<template>
    <div class="long-card relative flex items-center bg-[#2a2a2a] border-[#3f3f3f] border-[3px] mb-[30px] ml-[0px] rounded-[25px] w-[350px] h-[75px] transition-all duration-[0.2s]">
        <img :src="LargeImage" alt="card_pic" class="w-[40px] mr-[20px] ml-[10px] mt-[12px] mb-[10px] transition-all duration-[0.2s]"/>
        <div class="edu-card-content text-left">
            <p class="long-title transition-all duration-[0.2s] absolute top-[35%] w-[75%] text-[16px] font-[altone-bold] text-[#FFFFFF]">{{ LargeTitle }}</p>
            <p class="long-desc1 transition-all duration-[0.2s] absolute opacity-0 w-[75%] translate-y-[-40%] text-[15px] font-[outfit-7] text-[#b5b5b5]">{{ details1 }}</p>
            <p class="long-desc2 transition-all duration-[0.2s] absolute opacity-0 w-[75%] translate-y-[30%] text-[15px] font-[outfit-7] text-[#b5b5b5]">{{ details2 }}</p>
        </div>
    </div>
</template>

<style scoped>
.long-card:hover {
    background: #3a3a3a;
    border: 3px solid #b5b5b5;
    transition: 0.2s;
}
.long-card:hover img {
  width: 50px;
  height: auto;
  transition: 0.s;
}

.long-card {
  box-shadow: 0px 0px 15px 4px #00000054;
    transition: 0.2s;
}

.long-card:hover .long-title {
  transform: translateY(-70%);
  transition: 0.2s;
}

.long-card:hover .long-desc1 {
  transition: 0.2s;
  opacity: 1;
}

.long-card:hover .long-desc2 {
  transition: 0.2s;
  opacity: 1;
}

.long-card:hover {
    background: #3a3a3a;
    border: 3px solid #b5b5b5;
    transition: 0.2s;
}

.long-card:hover img {
  width: 50px;
  height: auto;
  transition: 0.2s;
}
</style>