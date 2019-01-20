<template>
  <div class="about" :style="{'width': newWidth + 'px', 'height': newHeight + 'px'}">
    <img class="questionPic" :src="'/img/head.jpg'" alt="">
    <div class="homeContent">
      <h1>Mit hoz a 2019? – Válaszolj pár kérdésre és megtudhatod!</h1>
      <router-link to="/questions">Tudd meg a jövődet</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import questionsWrapper from '@/components/home-comp.vue'

export default {
  name: 'home',
  // components: {
  //   questionsWrapper
  // },
  data () {
    return {
      newWidth: window.innerWidth,
      newHeight: window.innerHeight
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

.homeContent {
  position: absolute;
  bottom: 0px;
  color: white;
  margin: 0 0 20px 20px;
}

/* h1 {
  column;
} */

a {
  text-decoration: none;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 0;
  border-radius: 5px;
  text-decoration: none;
  margin: 5px 10px;
  color: #ffffff;
  cursor: pointer;
}

</style>
