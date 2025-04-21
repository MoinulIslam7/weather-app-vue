<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>🌤 Weather Dashboard</v-toolbar-title>
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
