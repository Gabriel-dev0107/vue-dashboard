<template>
  <div
    class="bg-white rounded-lg shadow p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg"
  >
    <div class="flex items-center justify-between mb-2">
      <div>
        <h3 class="text-gray-600 text-sm font-medium">{{ title }}</h3>
        <p class="text-2xl font-bold">{{ value }}</p>
      </div>
      <div :class="['p-2 rounded-full text-white', bgClass]">
        <component :is="icon" class="w-5 h-5" />
      </div>
    </div>
    <p class="text-sm text-gray-500">
      Variação: 
      <span :class="variation >= 0 ? 'text-green-600' : 'text-red-600'">
        {{ variation >= 0 ? '+' : '' }}{{ variation }}%
      </span>
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
  icon: Object,          
  bgClass: String,       
  variation: Number      
})
</script>