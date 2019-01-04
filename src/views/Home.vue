<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <questionComp />
  </div>
</template>

<script>
// @ is an alias to /src
import questionComp from '@/components/question-comp.vue'

export default {
  name: 'home',
  components: {
    questionComp
  }
}
</script>

<style>

/* xs, extra-small: 0px or larger
sm, small: 600px or larger
md, medium: 960px or larger
lg, large: 1280px or larger
xl, extra-large: 1920px or larger */

</style>
