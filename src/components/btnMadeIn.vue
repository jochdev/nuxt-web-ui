<template>
    <a href="https://joch.dev" target="_blank" rel="nofollow">
      <button id="btn-back-to-top" class="btn-white-jochdev z-20">
        <nuxt-img
          format="webp"
          src="#"
          height="16"
          width="16"
          class="mr-1 rounded bg-white w-4 h-4"
        />
        Creado por Jochdev
      </button>
    </a>
  </template>
  
  <script>
  export default {
    data() {
      return {}
    },
  }
  </script>
  <!-- <botonMadeIn /> -->
  
  <style scoped lang="postcss">
  #btn-back-to-top {
    position: fixed;
  }
  .btn-default-jochdev {
    @apply bottom-2 right-1 text-gray-900 bg-slate-100 bg-opacity-40 border border-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 text-center inline-flex items-center mr-px mb-px;
  }
  .btn-white-jochdev {
    @apply bottom-2 right-1 text-gray-900 bg-white  border border-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 text-center inline-flex items-center mr-px mb-px;
  }
  .btn-black-jochdev {
    @apply bottom-2 right-1 text-white bg-black border border-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 text-center inline-flex items-center mr-px mb-px;
  }
  </style>