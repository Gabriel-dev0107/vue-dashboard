<template>
  <div class="bg-white shadow-md rounded-lg p-4">
    <apexchart
      class="w-full"
      type="pie"
      height="300"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script setup>
import ApexCharts from "vue3-apexcharts"

const chartOptions = {
  labels: ["Cursos", "Projetos", "Pedidos"],
  colors: ["#3B82F6", "#10B981", "#F59E0B"]
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