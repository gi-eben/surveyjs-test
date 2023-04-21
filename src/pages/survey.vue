<script setup lang="ts">
import { Survey } from 'survey-knockout-ui'
import { StylesManager } from 'survey-core'

const router = useRouter()

StylesManager.applyTheme('defaultV2')

const surveyStore = useSurveyStore()

onMounted(() => {
  // load survey from localStorage into pinia store
  surveyStore.loadSurvey()

  // create survey
  const json = surveyStore.getSurveyJSON()
  const survey = new Survey(json)

  // render to DOM
  survey.render('survey-viewer')

  survey.onComplete.add(() => {
    surveyStore.saveSurveyResults(survey.data)
    router.push('/results')
  })
})
</script>

<template>
  <div id="survey-viewer" class="h-full" />
</template>
