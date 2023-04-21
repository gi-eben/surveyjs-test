import { acceptHMRUpdate, defineStore } from 'pinia'
import { Obj } from 'tsu'

export const useSurveyStore = defineStore('survey', {
  state: () => ({
    json: '',
    results: null as Obj<any> | null
  }),

  actions: {
    loadSurvey() {
      this.json = window.localStorage.getItem('surveyjs') || ''
    },

    saveSurvey(jsonString: string) {
      this.json = jsonString
      window.localStorage.setItem('surveyjs', jsonString)
    },

    getSurveyJSON() {
      return JSON.parse(this.json)
    },

    saveSurveyResults(data: any) {
      this.results = data
    },

    clearSurveyResults() {
      this.results = null
    }
  },

  getters: {
    hasResults: (state) => state.results !== null
  }
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSurveyStore, import.meta.hot))
}
