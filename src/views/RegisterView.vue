<!-- src/views/RegisterView.vue -->
<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <AuthForm mode="register" />
  </div>
</template>

<script setup>
import AuthForm from '../components/forms/AuthForm.vue'
</script>