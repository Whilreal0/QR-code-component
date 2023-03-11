<template>
  <div>
    <Navbar />
    <Home />
    <Skills />
    <Contact />
    <Projects />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Home from "@/views/HomeView";
import Skills from "@/views/SkillsView";
import Contact from "@/views/ContactView";
import Projects from "@/views/ProjectsView"

export default {
  components: {
    Navbar,
    Home,
    Skills,
    Contact,
    Projects,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap");
body {
  font-family: "Rubik", sans-serif;
}
</style>