<template>
  <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow transition-colors">
    <apexchart
      class="w-full"
      type="bar"
      height="300"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import ApexCharts from 'vue3-apexcharts'

const series = [
  {
    name: 'Pedidos',
    data: [20, 30, 10, 20, 9]
  }
]

const chartOptions = ref({
  chart: {
    id: 'basic-bar',
    toolbar: {
      show: false
    }
  },
  xaxis: {
    categories: ['Seg', 'Ter', 'Quar', 'Quin', 'Sex']
  },
  colors: ['#3B82F6'],
  theme: {
    mode: document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  },
  grid: {
    borderColor: '#e5e7eb'
  }
})

// Observa mudanças no modo escuro
const updateTheme = () => {
  chartOptions.value = {
    ...chartOptions.value,
    theme: {
      mode: document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    }
  }
}

onMounted(() => {
  // Atualiza o tema ao montar
  updateTheme()

  // Observa mudanças manuais na classe do <html>
  const observer = new MutationObserver(updateTheme)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})
</script>

<script>
export default {
  components: {
    apexchart: ApexCharts
  }
}
</script>