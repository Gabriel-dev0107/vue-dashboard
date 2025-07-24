<template>
  <div class="bg-white shadow-md rounded-lg p-4">
    <apexchart
      class="w-full"
      type="pie"
      height="320"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script setup>
import ApexCharts from "vue3-apexcharts"

const chartOptions = {
  labels: ["Cursos", "Projetos", "Pedidos"],
  colors: ["#3B82F6", "#10B981", "#F59E0B"],

  title:{
    text:'Distribuição de Ações',
    align: 'center',
    style:{
      fontSize: '18px',
      fontWeigth: 'bold'
    }
  },

  legend: {
    position: 'right',
    offsetY: 0,
    itemMargin: {
      vertical: 8
    },
    markers:{
      width: 12,
      height: 12,
      radius: 12
    }
  },
    dataLabels: {
    enabled: true,
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      colors: ['#fff']
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 1,
      opacity: 0.8
    }
  },

  plotOptions: {
    pie: {
      expandOnClick: true
    }
  },

  tooltip: {
    y: {
      formatter: (val) => `${val}%`
    }
  }
}

const series = [44, 33, 23] // dados fictícios

</script>

<script>
export default {
  components: {
    apexchart: ApexCharts
  }
}
</script>