<script setup>
import StatCard from '../components/StatCard.vue'
import ChartCard from '../components/ChartCard.vue'

const cards = [
  { title: 'Usuários', value: 124 },
  { title: 'Pedidos', value: 89 },
  { title: 'Receitas', value: 'R$ 12.300' },
  { title: 'Erros', value: 3 },
]
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Dashboard</h2>

    <!-- Grid de cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :value="card.value"
      />
    </div>

    <!-- Gráfico -->
    <ChartCard />
  </div>
</template>