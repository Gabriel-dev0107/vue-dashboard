<template>
  <div class="bg-white p-4 rounded-lg shadow-md">
    <apexchart
      type="line"
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
    id: 'linha-pedidos'
  },
  xaxis: {
    categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex']
  },
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 4
  },
  colors: ['#3B82F6'],
  dataLabels: {
    enabled: false
  },
  title: {
    text: 'Pedidos da semana',
    align: 'left',
    style: {
      fontSize: '16px',
      fontWeight: 'bold'
    }
  }
}

const series = [
  {
    name: 'Pedidos',
    data: [20, 30, 10, 20, 9] // dados fictícios
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