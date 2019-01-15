<template>

<div>

</div>

    <!-- <div class="question-view" :class="ani">
      <div class="hei">
        <img src="@/assets/img/gal.jpeg" alt="">
      </div>
      <div class="question-box">
        <h1>Hiszel a jóslatokban?</h1>
        <a @click="out" :style="{color: red}">{{winWidth}}</a>
        <a href="http://">{{innerWidth}}</a>
        <a href="http://">mik azok a jóslatok?</a>
      </div>
    </div> -->

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
      winWidth: window.innerWidth * 3,
      red: 'red',
      ani: null
    }
  },
  computed: {
    innerWidth: function () {
      let width = window.innerWidth / 2
      return width
    }
  },
  methods: {
    out: function (e) {
      e.preventDefault()
      this.ani = {
        animated: true,
        bounceOut: true
      }
    }
  }
}
</script>

<style scoped>

@media only screen and (max-width: 600px) {

  a {
    display: block;
    padding: 5px;
    background-color: #1976D2;
    border: 1px solid #ffffff;
    border-radius: 5px;
    text-decoration: none;
    margin: 5px 10px;
    color: #ffffff;
  }

  h1 {
    color: #ffffff;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hei {
    height: 100%;
  }

  .question-view {
    background-color: #1976D2;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }

}

</style>
