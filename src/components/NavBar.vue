<template>
  <nav class="bg-white px-4 py-3 shadow flex justify-between items-center">
      <!-- Botão para controlar a sidebar (sempre visível) -->
    <button @click="$emit('toggle-sidebar')" class="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100">
      ☰
    </button>
    <h1 class="text-xl font-semibold">Meu Painel</h1>
    <button
      @click="logout"
      class="text-sm bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
    >Sair</button>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  localStorage.removeItem('logado')
  router.replace('/login')
}
</script>