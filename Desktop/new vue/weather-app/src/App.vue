<template>
  <v-app>
    <v-main class="mx-auto">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  
  }),
};
</script>
<style>
div.v-application--wrap{
  background-image: url(./assets/mountain-bg.png);
  background-size: cover;
  background-color: rgba(0, 0, 02, 2.6);
}
</style>