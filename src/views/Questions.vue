<template>
  <div class="home" :style="{width: newWidth}">
    <questionsWrapper />
  </div>
</template>

<script>
// @ is an alias to /src
import questionsWrapper from '@/components/questions-wrapper.vue'

export default {
  name: 'questions',
  components: {
    questionsWrapper
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

/* html, body {
  margin: 0;
  height: 100%;
  overflow: hidden
} */

</style>
