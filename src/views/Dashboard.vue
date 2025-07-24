<template>
  <div class="px-4 py-6 space-y-8 max-w-7xl mx-auto">
    <!-- Título -->
    <h2 class="text-2xl font-bold text-gray-800">Dashboard</h2>

    <!-- Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :value="card.value"
      />
    </div>

    <!-- Gráficos -->
    <ChartCard />
    <PieChartCard />
    <GraficoLinha />
    <UserTable />
  </div>
</template>

<script setup>
import StatCard from '../components/StatCard.vue'
import ChartCard from '../components/ChartCard.vue'
import PieChartCard from '../components/pieChartCard.vue'
import GraficoLinha from '../components/GraficoLinha.vue'
import UserTable from '../components/UserTable.vue'

const cards = [
  { title: 'Usuários', value: 124 },
  { title: 'Pedidos', value: 89 },
  { title: 'Receitas', value: 'R$ 12.300' },
  { title: 'Erros', value: 3 },
]
</script>