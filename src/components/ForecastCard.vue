<template>
    <v-row>
        <v-col v-for="day in forecast" :key="day.date" cols="12" sm="4">
            <v-card class="pa-3">
                <div class="text-center">{{ day.date }}</div>
                <v-img :src="day.icon" contain height="60" class="my-2" />
                <div class="text-center">{{ day.condition }}</div>
                <div class="text-center">
                    {{ day.min_temp }}°C / {{ day.max_temp }}°C
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    computed: {
        forecast() {
            return this.$store.getters.weather?.forecast || [];
        }
    }
};
</script>
