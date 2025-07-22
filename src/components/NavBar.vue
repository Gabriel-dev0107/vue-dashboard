<template>
  <nav class="bg-blue-600 text-white px-4 py-3 flex items-center justify-between shadow-md">
    <!-- Botão para controlar a sidebar (sempre visível) -->
    <button @click="$emit('toggle-sidebar')" class="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100">
      ☰
    </button>

    <h1 class="font-bold text-lg">Vue Dashboard</h1>
  </nav>
</template>