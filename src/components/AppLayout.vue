<script setup lang="ts">
//
</script>

<template>
  <div class="flex flex-col w-screen h-screen">
    <header
      class="flex justify-center items-center fixed top-0 inset-x-0 border-b border-b-300 bg-white w-full h-10"
    >
      <div class="flex items-center divide-x-2 h-full">
        <RouterLink to="/" class="px-10 w-32" exact-active-class="font-semibold underline"
          >Create</RouterLink
        >

        <RouterLink to="/survey" class="px-10 w-32" exact-active-class="font-semibold underline"
          >View</RouterLink
        >

        <RouterLink to="/results" class="px-10 w-32" exact-active-class="font-semibold underline"
          >Results</RouterLink
        >
      </div>
    </header>

    <main class="w-full h-full pt-10">
      <slot />
    </main>
  </div>
</template>
