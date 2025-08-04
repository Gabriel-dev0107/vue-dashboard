<template>
  <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 transition-colors">
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
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ApexCharts from "vue3-apexcharts"

const series = [44, 33, 23] // dados fictícios

const chartOptions = ref({
  labels: ["Cursos", "Projetos", "Pedidos"],
  colors: ["#3B82F6", "#10B981", "#F59E0B"],

  title: {
    text: 'Distribuição de Ações',
    align: 'center',
    style: {
      fontSize: '18px',
      fontWeight: 'bold'
    }
  },

  legend: {
    position: 'right',
    offsetY: 0,
    itemMargin: {
      vertical: 8
    },
    markers: {
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
  },

  theme: {
    mode: document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  }
})

// ✅ Atualiza o tema dinâmico (sem recriar chart desnecessariamente)
const updateTheme = () => {
  const isDark = document.documentElement.classList.contains('dark')
  if (chartOptions.value.theme.mode !== (isDark ? 'dark' : 'light')) {
    chartOptions.value = {
      ...chartOptions.value,
      theme: {
        mode: isDark ? 'dark' : 'light'
      }
    }
  }
}

let observer

onMounted(() => {
  updateTheme()
  observer = new MutationObserver(updateTheme)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<script>
export default {
  components: {
    apexchart: ApexCharts
  }
}
</script>