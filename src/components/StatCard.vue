<template>
  <div class="bg-white shadow-md rounded-lg p-4 w-full">
    <h3 class="text-sm text-gray-500">{{ title }}</h3>
    <p class="text-2xl font-bold text-blue-600">{{ value }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number]
})
</script>