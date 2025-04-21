<template>
    <apexchart type="line" height="300" :options="chartOptions" :series="series" />
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
export default {
    components: { apexchart: VueApexCharts },
    computed: {
        forecast() {
            return this.$store.getters.weather.forecast || [];
        },
        series() {
            return [
                {
                    name: 'Max Temp',
                    data: this.forecast.map(day => day.max_temp)
                },
                {
                    name: 'Min Temp',
                    data: this.forecast.map(day => day.min_temp)
                }
            ];
        },
        chartOptions() {
            return {
                chart: {
                    id: 'temp-trend'
                },
                xaxis: {
                    categories: this.forecast.map(day => day.date)
                },
                colors: ['#F44336', '#2196F3']
            };
        }
    }
};
</script>
