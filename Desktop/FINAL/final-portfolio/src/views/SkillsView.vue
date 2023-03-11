<template>
  <section class="home-section">
    <div class="flex flex-col items-center justify-center" id="heading">
      <h1 class="custom-heading-1">Technologies</h1>
      <p class="custom-subheading-1">What i currently know</p>
    </div>
    <div class="grid grid-cols-2 gap-2 mt-5 mx-6">
      <span
        class="
          bg-custom-secondary
          text-custom-accent text-semibold
          py-2.5
          text-center
          justify-center
          rounded-[5px]
        "
        v-for="(skill, i) in skills"
        :key="i"
      >
        {{ skill.name }}
      </span>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "TailwindCSS" },
      { name: "VueJs" },
      { name: "Git" },
      { name: "Javascript ES6" },
      { name: "Bootstrap" },
      { name: "Wordpress" },
    ],
  }),
};
</script>

<style>
</style>