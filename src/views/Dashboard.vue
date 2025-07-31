<template>
  <div class="px-4 py-6 space-y-8 max-w-7xl mx-auto">
    <!-- Título -->
    <h2 class="text-2xl font-bold text-gray-800">Dashboard</h2>

    <!-- Saudação personalizada -->
      <div class="mb-2">
        <p class="text-lg text-gray-700 font-medium">
          👋 Bom dia, {{ nomeUsuario }}!
        </p>
        <p class="text-sm text-gray-500">
          📅 {{ dataAtual }} — {{ resumo }}
        </p>
      </div>

    <!-- Filtros -->
    <div class="flex gap-2 mb-2">
      <button
        v-for="periodo in ['Hoje', 'Semana', 'Mês']"
        :key="periodo"
        @click="filtroSelecionado = periodo"
        :class="[
          'px-4 py-2 rounded',
          filtroSelecionado === periodo
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800'
        ]"
      >
        {{ periodo }}
      </button>
    </div>

    <!-- Cards -->
     <TransitionGroup
        name="fade"
        tag="div"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <StatCard
          v-for="card in cards"
          :key="card.title"
          :title="card.title"
          :value="card.value"
          :icon="card.icon"
          :bgClass="card.bgClass"
          :variation="card.variation"
        />
      </TransitionGroup>
    

    <!-- Gráficos -->
    <ChartCard />
    <PieChartCard />
    <GraficoLinha />
    <UserTable />
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>

<script setup>
import { ref, computed } from 'vue'
import StatCard from '../components/StatCard.vue'
import ChartCard from '../components/ChartCard.vue'
import PieChartCard from '../components/pieChartCard.vue'
import GraficoLinha from '../components/GraficoLinha.vue'
import UserTable from '../components/UserTable.vue'

const nomeUsuario = ref(localStorage.getItem('nomeUsuario') || 'Usuário')
const dataAtual = new Date().toLocaleDateString('pt-BR', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

// Simulando os dados do resumo
const resumo = computed(() => {
  if (filtroSelecionado.value === 'Hoje') {
    return 'Hoje temos 5 novos usuários e R$ 320 em receitas.'
  } else if (filtroSelecionado.value === 'Semana') {
    return 'Nesta semana foram 42 novos usuários e R$ 5.740 em receitas.'
  } else {
    return 'No mês tivemos 124 novos usuários e R$ 12.300 em receitas.'
  }
})

// Ícones
import { Users, ShoppingCart, DollarSign, AlertTriangle } from 'lucide-vue-next'

// Estado do filtro
const filtroSelecionado = ref('Hoje')

// Dados dinâmicos dos cards
const cards = computed(() => {
  if (filtroSelecionado.value === 'Hoje') {
    return [
      { title: 'Usuários', value: 8, icon: Users, bgClass: 'bg-blue-500', variation: 2 },
      { title: 'Pedidos', value: 5, icon: ShoppingCart, bgClass: 'bg-green-500', variation: -1 },
      { title: 'Receitas', value: 'R$ 320', icon: DollarSign, bgClass: 'bg-yellow-500', variation: 4 },
      { title: 'Erros', value: 0, icon: AlertTriangle, bgClass: 'bg-red-500', variation: 0 },
    ]
  } else if (filtroSelecionado.value === 'Semana') {
    return [
      { title: 'Usuários', value: 42, icon: Users, bgClass: 'bg-blue-500', variation: 10 },
      { title: 'Pedidos', value: 31, icon: ShoppingCart, bgClass: 'bg-green-500', variation: 6 },
      { title: 'Receitas', value: 'R$ 5.740', icon: DollarSign, bgClass: 'bg-yellow-500', variation: 12 },
      { title: 'Erros', value: 3, icon: AlertTriangle, bgClass: 'bg-red-500', variation: -2 },
    ]
  } else {
    return [
      { title: 'Usuários', value: 124, icon: Users, bgClass: 'bg-blue-500', variation: 22 },
      { title: 'Pedidos', value: 89, icon: ShoppingCart, bgClass: 'bg-green-500', variation: 9 },
      { title: 'Receitas', value: 'R$ 12.300', icon: DollarSign, bgClass: 'bg-yellow-500', variation: 15 },
      { title: 'Erros', value: 9, icon: AlertTriangle, bgClass: 'bg-red-500', variation: 1 },
    ]
  }
})
</script>