<template>
  <v-app>
    <v-main>
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
@import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@700&display=swap');
body{
  font-family: 'Archivo Narrow', sans-serif;
  
}
</style>
