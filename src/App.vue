<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/NavBar.vue'
import Sidebar from './components/SideBar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
const isSidebarOpen = ref(true)
const isDarkMode = ref(false)

// Aplica classe dark no HTML
const aplicarTema = () => {
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

// Define se mostra o layout completo
const showLayout = computed(() => route.meta.requiresAuth)

// Inicializa dados do localStorage
onMounted(() => {
  const savedSidebar = localStorage.getItem('sidebar')
  const savedTheme = localStorage.getItem('theme') || 'light'

  isSidebarOpen.value = savedSidebar === null ? true : savedSidebar === 'true'
  isDarkMode.value = savedTheme === 'dark'

  aplicarTema()
})

// Observa mudanças
watch(isSidebarOpen, val => localStorage.setItem('sidebar', val))
watch(isDarkMode, val => {
  localStorage.setItem('theme', val ? 'dark' : 'light')
  aplicarTema()
})
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    
    <!-- ✅ Navbar fixa -->
    <Navbar
      v-if="showLayout"
      class="fixed top-0 left-0 right-0 z-50"
      @toggle-sidebar="isSidebarOpen = !isSidebarOpen"
      @toggle-theme="isDarkMode = !isDarkMode"
    />

    <!-- ✅ Sidebar fixa -->
    <Sidebar
      v-if="showLayout"
      v-show="isSidebarOpen"
      class="fixed top-12 left-0 h-[calc(100vh-3rem)] z-40"
      @close="isSidebarOpen = false"
    />

    <!-- ✅ Conteúdo com scroll -->
    <div :class="[isSidebarOpen ? 'pl-64' : 'pl-0']" class="pt-12 transition-all">
      <main class="min-h-[calc(100vh-6rem)] overflow-y-auto p-4">
        <router-view />
      </main>

      <Footer v-if="showLayout" />
    </div>
  </div>
</template>