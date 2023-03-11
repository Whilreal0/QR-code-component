<template>
  <section class="home-section">
    <div class="  flex flex-col items-center mb-[60px] px-3.5" id="hero-section ">
      <h2 class="custom-hero-h2">Hello, I am <span class="text-custom-tertiary">Whilmer</span></h2>
      <h1 class="custom-hero-h1"><span class="custom-underline">Front-End</span> Web Developer</h1>
      <p class="custom-hero-p">Creative Developer & designer</p>
    </div>

    <div class="px-3.5" id="hero-img-container ">
      <img class="custom-hero-img" :src="hero" alt="">
      
    </div>
    <div class="flex flex-row items-center justify-center gap-2 pb-[50px] px-3.5">
      <button class="custom-btn py-3 px-5">
        Get in Touch
      </button>
      <button class="custom-btn py-3 px-5">
        Resume
      </button>
    </div>
    <div class=" " id="design-bg">
      <img class="custom-hero-design" :src="heroDesign" alt="">
    </div>
    
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data:()=>({
    hero: [require("@/assets/images/hero.svg")],
    heroDesign: [require("@/assets/images/bg-design-2.svg")],
  })
};
</script>
