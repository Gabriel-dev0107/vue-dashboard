<template>
  <aside
    class="h-screen w-64 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-lg flex flex-col justify-between p-4 transition-all duration-300"
  >
    <ul class="space-y-4">
      <li>
        <router-link
          to="/"
          class="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          @click="handleLinkClick"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11 0h7v7h-7v-7zm0-11h7v7h-7V3z" />
          </svg>
          <span>Dashboard</span>
        </router-link>
      </li>

      <li>
        <router-link
          to="/users"
          class="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          @click="handleLinkClick"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M5.121 17.804A4 4 0 0112 21a4 4 0 016.879-3.196M15 11a3 3 0 10-6 0 3 3 0 006 0z" />
          </svg>
          <span>Usuários</span>
        </router-link>
      </li>

      <li>
        <router-link
          to="/relatorios"
          class="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          @click="handleLinkClick"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M11 3v18M6 8v13M16 13v8M21 5v16" />
          </svg>
          <span>Relatórios</span>
        </router-link>
      </li>

      <li>
        <router-link
          to="/configuracoes"
          class="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          @click="handleLinkClick"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M10.325 4.317a9 9 0 013.35 0M6.584 6.584a9 9 0 000 10.832m10.832 0a9 9 0 000-10.832M12 8v4l3 3" />
          </svg>
          <span>Configurações</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
const emit = defineEmits(['close'])

function handleLinkClick() {
  emit('close')
}
</script>