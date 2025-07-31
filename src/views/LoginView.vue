<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="bg-white p-6 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-4 text-center">Login</h2>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block mb-1 font-semibold">Email</label>
          <input v-model="email" type="email" class="w-full border px-3 py-2 rounded" required />
        </div>

        <div class="mb-4">
          <label class="block mb-1 font-semibold">Senha</label>
          <input v-model="password" type="password" class="w-full border px-3 py-2 rounded" required />
        </div>

        <div v-if="error" class="text-red-500 mb-2 text-sm text-center">{{ error }}</div>

        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
          Entrar
        </button>
      </form>

      <p class="mt-4 text-center text-sm">
        Ainda não tem conta?
        <router-link to="/register" class="text-blue-600 hover:underline">Cadastre-se</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
  error.value = ''
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    localStorage.setItem('logadi', 'true') 
    localStorage.setItem('nomeUsuario', email.value.split('@')[0]) 
    router.push('/' ) 
  } catch (err) {
    if (err.code === 'auth/user-not-found') {
      error.value = 'Usuário não encontrado.'
    } else if (err.code === 'auth/wrong-password') {
      error.value = 'Senha incorreta.'
    } else {
      error.value = 'Erro ao fazer login. Verifique os dados.'
    }
  }
}
</script>