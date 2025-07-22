<template>
  <aside class="bg-white w-64 h-full shadow-md p-4">
    <ul>
      <li class="mb-4">
        <router-link to="/" class="text-blue-600 hover:underline" @click="handleLinkClick">Dashboard</router-link>
      </li>
      <li>
        <router-link to="/users" class="text-blue-600 hover:underline" @click="handleLinkClick">Usuários</router-link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
const emit = defineEmits(['close'])

function handleLinkClick() {
  emit('close') // ✅ Fecha sempre, independente do tamanho da tela
}
</script>