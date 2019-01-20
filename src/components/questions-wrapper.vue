<template>
<div class="question-wrapper" :style="{'width': windowWidth + 'px',
  'top': top + 'px', 'height': windowHeight * (questions.length - 1) + 'px',
  'max-height': windowHeight * (questions.length - 1) + 'px' }">

  <question-comp v-for="(question, questionIndex) in questions" :key="question.id"
    v-bind="{ question, windowWidth, windowHeight, questionIndex, questionsLength}" />

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
      questionsLength: 0
    }
  },
  computed: {
    questions () {
      this.questionsLength = this.$store.state.questions.length
      return this.$store.state.questions
    }
  }
}
</script>

<style scoped>

.question-wrapper {
  position: relative;
  transition: 1s;
}

</style>
