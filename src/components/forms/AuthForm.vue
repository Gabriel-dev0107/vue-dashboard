<!-- src/components/forms/AuthForm.vue -->
<template>
  <div class="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-6 text-center">
      {{ mode === 'login' ? 'Login' : 'Cadastro' }}
    </h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block mb-1 text-sm text-gray-600">Email</label>
        <input v-model="email" type="email" required class="w-full px-4 py-2 border rounded" />
      </div>

      <div>
        <label class="block mb-1 text-sm text-gray-600">Senha</label>
        <input v-model="password" type="password" required class="w-full px-4 py-2 border rounded" />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {{ mode === 'login' ? 'Entrar' : 'Cadastrar' }}
      </button>

      <p class="mt-4 text-sm text-center text-gray-500">
        <router-link
          :to="mode === 'login' ? '/register' : '/'"
          class="text-blue-600 hover:underline"
        >
          {{ mode === 'login' ? 'Criar conta' : 'Já tem conta? Fazer login' }}
        </router-link>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// ✅ Corrigir aqui:
const props = defineProps({
  mode: {
    type: String,
    required: true
  }
})

const router = useRouter()
const email = ref('')
const password = ref('')
const name = ref('')

function handleSubmit() {
  if (props.mode === 'login') {
    // Simula login
    if (email.value && password.value) {
      localStorage.setItem('logado', 'true')
      router.push('/')
    }
  } else {
    // Simula cadastro
    if (name.value && email.value && password.value) {
      localStorage.setItem('logado', 'true')
      router.push('/')
    }
  }
}
</script>