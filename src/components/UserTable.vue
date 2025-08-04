<template>
  <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 overflow-x-auto transition-colors">
    <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Últimos usuários</h3>

    <table class="min-w-full text-sm text-left text-gray-700 dark:text-gray-200">
      <thead>
        <tr class="text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
          <th class="py-2 px-3">Nome</th>
          <th class="py-2 px-3">Tipo</th>
          <th class="py-2 px-3">Data</th>
          <th class="py-2 px-3">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(user, index) in users"
          :key="index"
          class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <td class="py-2 px-3">{{ user.nome }}</td>
          <td class="py-2 px-3">{{ user.tipo }}</td>
          <td class="py-2 px-3">{{ user.data }}</td>
          <td class="py-2 px-3">
            <span
              :class="[
                'px-2 py-1 rounded text-xs font-bold',
                user.status === 'ativo'
                  ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                  : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
              ]"
            >
              {{ user.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const users = [
  { nome: "Gabriel", tipo: "Aluno", data: "2025-07-01", status: "ativo" },
  { nome: "João", tipo: "Doador", data: "2025-07-03", status: "pendente" },
  { nome: "Maria", tipo: "Aluno", data: "2025-07-05", status: "ativo" },
];
</script>