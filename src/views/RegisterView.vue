<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="bg-white p-6 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-4 text-center">Cadastro</h2>

      <form @submit.prevent="handleRegister">
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
          Cadastrar
        </button>
      </form>

      <p class="mt-4 text-center text-sm">
        Já tem uma conta?
        <router-link to="/login" class="text-blue-600 hover:underline">Faça login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleRegister = async () => {
  error.value = ''
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    router.push('/login') // redireciona para login após sucesso
  } catch (err) {
    if (err.code === 'auth/email-already-in-use') {
      error.value = 'Email já está em uso.'
    } else if (err.code === 'auth/weak-password') {
      error.value = 'A senha precisa ter pelo menos 6 caracteres.'
    } else {
      error.value = 'Erro ao cadastrar. Tente novamente.'
    }
  }
}
</script>