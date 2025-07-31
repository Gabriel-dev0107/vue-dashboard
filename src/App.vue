<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/NavBar.vue'
import Sidebar from './components/SideBar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
const isSidebarOpen = ref(true)

// ✅ Computa se deve mostrar layout (NavBar e Sidebar)
const showLayout = computed(() => route.meta.requiresAuth)

// Carrega estado salvo no localStorage
onMounted(() => {
  const saved = localStorage.getItem('sidebar')
  isSidebarOpen.value = saved === null ? true : saved === 'true'
})

// Salva sempre que o estado mudar
watch(isSidebarOpen, (val) => {
  localStorage.setItem('sidebar', val)
})
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <!-- ✅ Navbar -->
    <Navbar
      v-if="showLayout"
      @toggle-sidebar="isSidebarOpen = !isSidebarOpen"
    />

    <div class="flex flex-1">
      <!-- ✅ Sidebar -->
      <Sidebar
        v-if="showLayout"
        v-show="isSidebarOpen"
        @close="isSidebarOpen = false"
        class="transition-all duration-300 transform"
        :class="isSidebarOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'"
      />

      <!-- Conteúdo principal -->
      <main class="flex-1 p-4 overflow-y-auto">
        <router-view />
        

        
        
      </main>
      
      
    </div>
  </div>
</template>