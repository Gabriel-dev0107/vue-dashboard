<script setup>
import { ref, onMounted, watch } from "vue";
import Navbar from "./components/NavBar.vue";
import Sidebar from "./components/SideBar.vue";

// Carrega estado salvo no localStorage
const isSidebarOpen = ref(true);

onMounted(() => {
  const saved = localStorage.getItem('sidebar')
  isSidebarOpen.value = saved === null ? true : saved === 'true'
})

// Salva toda vez que mudar
watch(isSidebarOpen, (val) => {
  localStorage.setItem('sidebar', val)
})
</script>

<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <!-- NAVBAR -->
    <Navbar @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />

    <!-- CONTEÚDO: sidebar e main -->
    <div class="flex flex-1">
      <!-- SIDEBAR controlada manualmente -->
      <Sidebar
      v-show="isSidebarOpen"
      @close="isSidebarOpen = false"
      class="transition-all duration-300 transform"
      :class="isSidebarOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'" />

      <!-- ÁREA PRINCIPAL -->
      <main class="flex-1 p-4 overflow-y-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>