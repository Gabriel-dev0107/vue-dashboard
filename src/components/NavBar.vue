<template>
  <nav class="bg-white dark:bg-gray-800 px-4 py-3 shadow flex justify-between items-center">
    <!-- Botão lateral -->
    <button
      @click="$emit('toggle-sidebar')"
      class="text-blue-600 dark:text-blue-400 text-xl hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded"
    >
      ☰
    </button>

    <!-- Título -->
    <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
      Meu Painel
    </h1>

    <!-- Ações -->
    <div class="flex items-center gap-2">
      <!-- Alternar Tema -->
      <button
        @click="$emit('toggle-theme')"
        class="text-gray-600 dark:text-gray-300 text-xl hover:text-blue-600 dark:hover:text-blue-400 transition"
        title="Alternar tema"
      >
        <span class="text-lg">
          <span class="hidden dark:inline">🌞</span>
          <span class="inline dark:hidden">🌙</span>
        </span>
      </button>

      <!-- Logout -->
      <button
        @click="logout"
        class="text-sm bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
      >
        Sair
      </button>
    </div>
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