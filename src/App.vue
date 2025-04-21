<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-container class="d-flex justify-space-between align-center px-4">
        <v-toolbar-title class="text-h6 font-weight-medium">
          🌤 Weather Dashboard
        </v-toolbar-title>

        <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
          <v-icon>
            {{ $vuetify.theme.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}
          </v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <Dashboard />
    </v-main>
  </v-app>
</template>

<script>
import Dashboard from './views/DashboardC.vue';
export default {
  components: { Dashboard }
};

</script>
