<template>
<div>
  <div v-if="!canShowResult" class="question-wrapper" :style="{'width': windowWidth + 'px',
    'top': top + 'px', 'height': windowHeight * (questions.length - 1) + 'px',
    'max-height': windowHeight * (questions.length - 1) + 'px' }">

    <question-comp v-for="(question, questionIndex) in questions" :key="question.id"
      v-bind="{ question, windowWidth, windowHeight, questionIndex, questionsLength}" />

  </div>
  <div v-else>
    <h1>Itt lesz az eredmény</h1>
  </div>
</div>
</template>

<script>
import questionComp from '@/components/question-comp.vue'

// get the datas from store
// store answers
// when answer a question animate to the next one
// when finshed send to the server

export default {
  name: 'questions-wrapper',
  components: {
    questionComp
  },
  data () {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      top: 0,
      // questionsLength: 0,
      canShowResult: false
    }
  },
  computed: {
    questions () {
      // this.questionsLength = this.$store.state.questions.length
      return this.$store.state.questions
    },
    questionsLength () {
      return this.questions.length
    }
  }
  // created() {
  //   let body = document.getElementsByTagName("BODY")
  //   var root = document.documentElement
  //   root.className += 'stable'
  //   body[0].className += 'stable'
  // }
}
</script>

<style>

.question-wrapper {
  position: relative;
  transition: 0.8s;
}

html, body {
  margin: 0;
  height: 100%;
  overflow: hidden
}

.stable {
  margin: 0;
  height: 100%;
  overflow: hidden;
  background-color: red;
}

</style>
