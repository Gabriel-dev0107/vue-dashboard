<template>
  <footer class="text-sm text-gray-600 dark:text-gray-300 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-inner">
    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
      <p>
        © {{ currentYear }} <span class="font-semibold text-blue-600 dark:text-blue-400">EducAção</span>. Todos os direitos reservados.
      </p>

      <div class="flex items-center gap-4">
        <a href="#" class="hover:underline">Termos</a>
        <a href="#" class="hover:underline">Privacidade</a>
        <span class="hidden md:inline">|</span>
        <div class="flex gap-3 text-gray-500 dark:text-gray-400">
          <a href="#" title="Instagram" target="_blank">
            <Instagram class="w-5 h-5 hover:text-pink-500 transition" />
          </a>
          <a href="#" title="Twitter" target="_blank">
            <Twitter class="w-5 h-5 hover:text-blue-400 transition" />
          </a>
          <a href="#" title="LinkedIn" target="_blank">
            <Linkedin class="w-5 h-5 hover:text-blue-700 transition" />
          </a>
          <a href="#" title="YouTube" target="_blank">
            <Youtube class="w-5 h-5 hover:text-red-600 transition" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()
</script>