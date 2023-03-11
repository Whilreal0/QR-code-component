<template>
  <section class="home-section">
    <div class="flex flex-col items-center justify-center" id="heading">
      <h1 class="custom-heading-1">Projects</h1>
      <p class="custom-subheading-1">Here Are some of my projects</p>
    </div>
    <div class="grid grid-cols-1 gap-2  mx-6" >
        <div class="bg-custom-secondary " v-for="(info, i ) in projectInfo" :key="i">
            
                <h2>{{ info.title }}</h2>
            
        </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    projectInfo: [
      {
        title: "Jason Creations",
        description:
          "a responsive photography portfolio for a freelance photographer in the Philippines.",
        stack: ["VueJs2", "TailwindCSS"],
        icon: ["fa-brands fa-github", "fa-solid fa-up-right-from-square"],
        codelink: "#",
        sitelink: "https://j-creations.netlify.app/",
      },
      {
        title: "Castra Gears",
        description: "a responsive eCommerce site",
        stack: ["Wordpress"],
        icon: ["fa-brands fa-github", "fa-solid fa-up-right-from-square"],
        codelink: "#",
        sitelink: "https://dev-castra-gears.pantheonsite.io/",
      },
      {
        title: "Simple To Do list",
        description: "a simple responsive To Do List app",
        stack: ["VueJs2, Vuetify"],
        icon: ["fa-brands fa-github", "fa-solid fa-up-right-from-square"],
        codelink: "#",
        sitelink: "#",
      },
      {
        title: "Weather App",
        description: "a simple Weather App",
        stack: ["VueJs2, OpenWeatherAPI, Vuetify"],
        icon: ["fa-brands fa-github", "fa-solid fa-up-right-from-square"],
        codelink: "#",
        sitelink: "https://mer-weather-app.netlify.app/",
      },
      {
        title: "Thesis Title Generator",
        description: "To Generate A title for you",
        stack: ["VueJs2, Vuetify"],
        icon: ["fa-brands fa-github", "fa-solid fa-up-right-from-square"],
        codelink: "#",
        sitelink: "#",
      },
      {
        title: "Shortly Landing Page",
        description: "This is a Challenge in Front-end Mentor",
        stack: ["VueJs2, TailwindCSS"],
        icon: ["fa-brands fa-github", "fa-solid fa-up-right-from-square"],
        codelink: "#",
        sitelink: "https://shortly-mer-landing-page.netlify.app/",
      },
    ],
  }),
};
</script>

<style>
</style>