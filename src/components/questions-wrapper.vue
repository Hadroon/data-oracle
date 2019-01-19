<template>
<div class="question-wrapper" :style="{'width': windowWidth + 'px', 'top': top + 'px' }">

  <!-- <div :style="{'width': windowWidth + 'px',
   'height': windowHeight + 'px' }" >
    {{questions}}
    <button @click="turnPage">go to second</button>
  </div>

  <div :style="{'width': windowWidth + 'px',
   'height': windowHeight +'px' }" >
    <button @click="turnPage">go to third</button>
  </div>

  <div :style="{'width': windowWidth + 'px',
   'height': windowHeight + 'px' }" >third
  </div> -->

  <question-comp v-for="question in questions" :key="question.id" v-bind="{ question, windowWidth, windowHeight}" />

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
      top: 0
    }
  },
  methods: {
    turnPage: function () {
      this.top -= this.windowHeight
    }
  },
  computed: {
    questions () {
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
