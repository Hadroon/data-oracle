<template>
<div class="question-wrapper" :style="{'width': maxWidth }">
  <div class="float-left" :style="{'width': windowWidth + 'px',
   'background-color': red,
   'height': windowHeight + 'px' }" >
    <p>{{position}}</p>
    <button @click="turnPage">go to second</button>
   </div>
  <div class="float-left" :style="{'width': windowWidth + 'px',
   'background-color': green,
   'height': windowHeight }" >
    <button @click="turnPage">go to third</button>
   </div>
  <div class="float-left" :style="{'width': windowWidth + 'px',
   'background-color': yellow,
   'height': windowHeight }" >third</div>

</div>
</template>

<script>

// get the datas from store
// store answers
// when answer a question animate to the next one
// when finshed send to the server

export default {
  name: 'question-comp',
  data () {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      red: 'red',
      green: 'green',
      yellow: 'yellow',
      ani: null,
      fontSize: '24px',
      position: 0
    }
  },
  computed: {
    innerWidth: function () {
      let width = window.innerWidth / 2
      return width
    },
    maxWidth: function () {
      return (this.windowWidth * 4) + 'px'
    }
  },
  methods: {
    out: function (e) {
      e.preventDefault()
      this.ani = {
        animated: true,
        bounceOut: true
      }
    },
    turnPage: function () {
      this.position = this.position - windowWidth
    }
  }
}
</script>

<style scoped>

@media only screen and (max-width: 600px) {

.question-wrapper {
  position: relative;
}

.float-left {
  float: left;
}

}

</style>
