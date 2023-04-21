<script setup lang="ts">
const surveyStore = useSurveyStore()
</script>

<template>
  <div class="h-full">
    <div class="container h-full py-4">
      <p v-if="!surveyStore.hasResults" class="text-center text-xl text-gray-600 font-medium">
        No results.
      </p>

      <div v-else>
        <button
          class="block mx-auto shadow rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700"
          type="button"
          @click="surveyStore.clearSurveyResults()"
        >
          Clear results
        </button>

        <div class="mt-4 rounded bg-gray-100 p-4 h-full overflow-y-scroll">
          <pre class="text-sm">{{ JSON.stringify(surveyStore.results, null, 2) }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>
