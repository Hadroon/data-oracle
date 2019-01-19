<template>
  <div class="home" :style="{width: newWidth}">
    <questionWrapper />
  </div>
</template>

<script>
// @ is an alias to /src
import questionWrapper from '@/components/question-wrapper.vue'

export default {
  name: 'home',
  components: {
    questionWrapper
  },
  data () {
    return {
      newWidth: window.innerWidth
    }
  }
}
</script>

<style>

/* xs, extra-small: 0px or larger
sm, small: 600px or larger
md, medium: 960px or larger
lg, large: 1280px or larger
xl, extra-large: 1920px or larger */

html, body {
  margin: 0;
  height: 100%;
  overflow: hidden
}

</style>
