<template>
  <div class="bg-white shadow-md rounded-lg p-4">
    <apexchart
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
    data: [30, 40, 35, 50, 49]
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