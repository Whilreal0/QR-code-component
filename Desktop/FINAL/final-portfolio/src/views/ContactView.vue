<template>
  <section class="home-section">
    <div class="flex flex-col items-center justify-center" id="heading">
      <h1 class="custom-heading-1">Contact</h1>
      <p class="custom-subheading-1">Information</p>
    </div>
    <div class="mx-6 mt-5 flex flex-col justify-center   items-center">
      <p class="text-base my-5 text-custom-gray-2 bg-custom-secondary py-2 px-4 text-center rounded-[10px]">
        Currently, I am looking for opportunities and accepting freelance
        projects. If you think I am a good asset, kindly send me a message.
      </p>
      <span class="w-[250px] text-center text-gray-2  text-xl font-semibold min-w-[200px] py-2 px-5 bg-custom-secondary rounded-[5px]">
        {{ myEmail }}
      </span>
    </div>
  </section>
</template>

<script>
export default {
    data:()=>({
        myEmail: 'whilreal@gmail.com'
    })
};
</script>

<style>
</style>