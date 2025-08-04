<template>
  <footer class="text-sm text-gray-600 dark:text-gray-300 py-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-inner">
    <div class="max-w-7xl mx-auto px-4 flex flex-col gap-6 md:flex-row justify-between items-start">
      <!-- Coluna institucional -->
      <div>
        <p class="text-base font-semibold text-blue-600 dark:text-blue-400">EducAção</p>
        <p class="mt-1">CNPJ: 12.345.678/0001-99</p>
        <p>Rua Exemplo, 123 – Centro</p>
        <p>São Paulo – SP, 01000-000</p>
        <p class="mt-1">📧 contato@educacao.com.br</p>
      </div>

      <!-- Links úteis -->
      <div class="flex flex-col gap-2">
        <a href="/termos" class="hover:underline">Termos de Uso</a>
        <a href="/privacidade" class="hover:underline">Política de Privacidade</a>
        <a href="/sobre" class="hover:underline">Sobre Nós</a>
        <a href="/contato" class="hover:underline">Fale Conosco</a>
      </div>

      <!-- Redes sociais -->
      <div class="flex flex-col items-start gap-2">
        <p class="font-semibold">Siga-nos:</p>
        <div class="flex gap-3 text-gray-500 dark:text-gray-400">
          <a
            href="https://www.instagram.com/seuusuario"
            target="_blank"
            aria-label="Instagram"
            class="hover:text-pink-500 transition"
          >
            <Instagram class="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/seuusuario"
            target="_blank"
            aria-label="Twitter"
            class="hover:text-blue-400 transition"
          >
            <Twitter class="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/seuusuario"
            target="_blank"
            aria-label="LinkedIn"
            class="hover:text-blue-700 transition"
          >
            <Linkedin class="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/@seuusuario"
            target="_blank"
            aria-label="YouTube"
            class="hover:text-red-600 transition"
          >
            <Youtube class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>

    <div class="mt-6 text-center text-xs text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-700 pt-4">
      © {{ currentYear }} EducAção. Todos os direitos reservados.
    </div>
  </footer>
</template>

<script setup>
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()
</script>