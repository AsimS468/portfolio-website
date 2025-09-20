<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
    <label class="switch">
        <!-- bind checkbox to isDark -->
        <input type="checkbox" v-model="isDark" @click="toggleDark">
        <span class="slider"></span>
    </label>
</template>

<style scoped>



.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 35px;
  height: 35px;
  margin-left: 15px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  --background: #2a2a2a;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background);
  transition: .2s;
  border-radius: 10px;
  width: 35px;
  height: 35px;
  border: 1px solid #1a1a1a;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 50%;
  left: 17%;
  bottom: 15%;
  box-shadow: inset 8px -4px 0px 0px #b5b5b5;
  background: var(--background);
  transition: .2s;
}

input:checked + .slider {
  background-color: #d3d3d3;
}

input:checked + .slider:before {
  box-shadow: inset 15px -4px 0px 15px #464646;
}
</style>
