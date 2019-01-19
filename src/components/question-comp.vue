<template>
  <div class="questionWrapper" :style="{'width': windowWidth + 'px', 'height': windowHeight + 'px' }">
    <img class="questipnPic" :src="'/img/' + question.picture" alt="">
    <div class="content">
      <h2 :style="{'width': windowWidth * 0.8 + 'px' }">
        {{question.question}}
      </h2>
      <button @click="turnPage" v-for="(answer, index) in question.answers" :key="answer">
        {{answer}}
        {{index}}
      </button>
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

.content {
  position: absolute;
  bottom: 15px;
  width: 100%;
}

.questionWrapper {
  position: relative;
}

.questionWrapper button {
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  /* border: 1px solid #ffffff; */
  border: 0;
  border-radius: 5px;
  text-decoration: none;
  margin: 5px 10px;
  color: #ffffff;
  cursor: pointer;
}

.questionWrapper h2 {
  display: block;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  color: #ffffff;
  width: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

</style>
