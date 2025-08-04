<template>
  <div class="p-4 rounded-lg shadow bg-white dark:bg-gray-800 transition-colors">
    <div class="flex items-center justify-between mb-2">
      <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">
        {{ title }}
      </h3>
      <component :is="icon" class="w-5 h-5 text-white p-1 rounded-full" :class="bgClass" />
    </div>
    <div class="text-2xl font-bold text-gray-900 dark:text-white">
      {{ value }}
    </div>
    <div
      class="text-sm"
      :class="{
        'text-green-600': variation > 0,
        'text-red-600': variation < 0,
        'text-gray-500 dark:text-gray-400': variation === 0
      }"
    >
      Variação: {{ variation >= 0 ? '+' : '' }}{{ variation }}%
    </div>
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