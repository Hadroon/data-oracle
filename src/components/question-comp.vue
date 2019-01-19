<template>
  <div :style="{'width': windowWidth + 'px', 'height': windowHeight + 'px' }">
    <div class="questionComp" :style="{'width': windowWidth + 'px', 'height': windowHeight + 'px' }">
      <div :style="{'background': randomColor()}">
        <img class="questipnPic" :src="'/img/' + question.picture" alt="">
      </div>
      <div :style="{'background': randomColor()}">
        {{question.question}}
        <button @click="turnPage">go to second</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'question',
  props: [
    'question',
    'windowWidth',
    'windowHeight'
  ],
  methods: {
    turnPage: function () {
      this.$parent.top -= this.windowHeight
    },
    randomColor: function getRandomColor () {
      var letters = '0123456789ABCDEF'
      var color = '#'
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    }
  }
}
</script>

<style>

.questionComp {
  /* position: relative; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
}

.questipnPic {
  width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
}

</style>
