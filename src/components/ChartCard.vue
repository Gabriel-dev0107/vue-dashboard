<template>
  <div class="bg-white shadow-md rounded-lg p-4">
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
import ApexCharts from 'vue3-apexcharts'

const chartOptions = {
  chart: {
    id: 'basic-bar'
  },
  xaxis: {
    categories: ['Seg', 'Ter', 'Quar', 'Quin', 'Sex']  // Corrigido: "ctegories" → "categories"
  },
  colors: ['#3B82F6']
}

const series = [
  {
    name: 'Pedidos',
    data: [20, 30, 10, 20, 9]
  }
]
</script>

<script>
export default {
  components: {
    apexchart: ApexCharts
  }
}
</script>