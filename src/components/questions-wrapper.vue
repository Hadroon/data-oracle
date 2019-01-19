<template>
<div class="question-wrapper" :style="{'width': windowWidth + 'px', 'top': top + 'px' }">

  <div class="float-left" :style="{'width': windowWidth + 'px',
   'height': windowHeight + 'px' }" >
    <button @click="turnPage">go to second</button>
  </div>

  <div class="float-left" :style="{'width': windowWidth + 'px',
   'height': windowHeight +'px' }" >
    <button @click="turnPage">go to third</button>
  </div>

  <div class="float-left" :style="{'width': windowWidth + 'px',
   'height': windowHeight + 'px' }" >third
  </div>

</div>
</template>

<script>

// get the datas from store
// store answers
// when answer a question animate to the next one
// when finshed send to the server

export default {
  name: 'questions-wrapper',
  data () {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      top: 0
    }
  },
  computed: {
    innerWidth: function () {
      let width = window.innerWidth / 2
      return width
    },
    maxWidth: function () {
      return (this.windowWidth) + 'px'
    }
  },
  methods: {
    turnPage: function () {
      this.top -= this.windowHeight
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
