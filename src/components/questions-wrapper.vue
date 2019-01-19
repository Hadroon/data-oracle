<template>
  <div>

    <!-- <transition name="fade">
      <div v-if="show">
      <button v-on:click="show = !show">
        Toggle
      </button>
        <p>hello</p>
        <p>
          Hello from mainView :)
        </p>
        <p>
          {{this.$store.state.questions[0].question}}
        </p>
      </div>
    </transition> -->

  </div>
</template>

<script>
export default {
  name: 'questions-wrapper',
  data () {
    return {
      show: true
    }
  },
  methods: {
    toggleOne: function () {

    }
  }

}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
