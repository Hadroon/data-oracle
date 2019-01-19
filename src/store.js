import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [
      {
        id: 0,
        question: 'mi az egy?',
        answers: [
          'valami',
          'kabát',
          'pulcsi'
        ],
        picture: 'globe.jpg'
      },
      {
        id: 1,
        question: 'mi a kettő?',
        answers: [
          'valami',
          'kabát',
          'pulcsi'
        ],
        picture: 'valami.jpg'
      },
      {
        id: 2,
        question: 'mi a három?',
        answers: [
          'valami',
          'kabát',
          'pulcsi'
        ],
        picture: 'valami.jpg'
      }
    ]

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
})
