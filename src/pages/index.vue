<script setup lang="ts">
import { SurveyCreator } from 'survey-creator-knockout'

const surveyStore = useSurveyStore()

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
}

onMounted(() => {
  surveyStore.loadSurvey()

  const creator = new SurveyCreator(creatorOptions)
  creator.render('survey-creator')

  creator.text = surveyStore.json

  creator.saveSurveyFunc = function () {
    surveyStore.saveSurvey(creator.text)
  }
})
</script>

<template>
  <div id="survey-creator" class="h-full" />
</template>

<style>
.svc-creator__banner {
  @apply hidden;
}

.svc-creator__area.svc-creator__area--with-banner {
  @apply w-full h-full;
}

.svc-json-editor-tab__content-area {
  @apply text-sm font-mono;
}
</style>
