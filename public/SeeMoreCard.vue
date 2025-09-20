<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});
</script>

<template>
    <div class="sm-container bg-[#6b6b6b] mb-10 p-10 rounded-[50px]">
        <h1 class="font-[outfit-9] text-[2.8rem]">{{ title }}</h1>
        <h2 class="font-[outfit-7] text-[2rem]">{{ date }}</h2>
        <p class=" mt-7 font-[outfit-5] text-[1.5rem]">{{ description }}</p>
    </div>
</template>

<style scoped>
@media (max-width: 768px) {
    h1{font-size: 1.8rem;}
    h2{
        margin-top: 20px;
        font-size: 1.3rem;
    }
    p{font-size: 1rem;}
}
</style>