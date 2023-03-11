<template>
  <nav>
    <!-- Desktop -->
    <div
      class="
        px-3 py-5
        md:py-16 md:px-[7.25rem]
        xl:px-[15rem]
        text-lg
        bg-custom-primary
      "
    >
      <div class="max-w-7xl mx-auto py-5">
        <div class="flex justify-between items-center">
          <!-- icon -->
          <div class="flex gap-2 items-center">
            <div
              class="flex items-center"
              v-for="(icon, i) in NavIcons"
              :key="i"
            >
              <a href="">
                <box-icon
                  class="fill-white flex items-center h-7 aspect-square"
                  :type="icon.type"
                  :name="icon.name"
                  :size="icon.size"
                >
                </box-icon>
              </a>
            </div>
          </div>

          <!-- Menu button -->
          <div class="md:hidden">
            <button v-if="!isOpen" class="flex items-center" @click="showNav">
              <box-icon
                class="fill-white h-8 aspect-square"
                size="cssSize"
                name="menu-alt-right"
              ></box-icon>
            </button>
            <button class="flex items-center" v-if="isOpen" @click="showNav">
              <box-icon 
                class="fill-white h-8 aspect-square"
                size="cssSize"
                name="x"
              ></box-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <transition enter-active-class="animate__animated animate__fadeInLeft"
    leave-active-class="animate__animated animate__fadeOutLeft">
      <div class="absolute flex gap-2 justify-center w-screen p-2 bg-[#202a36] transition duration-500 " v-show="isOpen">
      <button class="custom-btn ">
        HOME
      </button>
      <button class="custom-btn ">
        PROJECTS
      </button>
      <button class="custom-btn ">
        SKILLS
      </button>
    </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data: () => ({
    NavIcons: [
      {
        name: "instagram",
        type: "logo",
        size: "cssSize",
        link: "#",
      },
      {
        name: "github",
        type: "logo",
        size: "cssSize",
        link: "#",
      },
      {
        name: "linkedin",
        type: "logo",
        size: "cssSize",
        link: "#",
      },
    ],
    isOpen: false
  }),
  methods:{
    showNav() {
      this.isOpen = !this.isOpen;
    },
  }
};
</script>

<style>
</style>