<template>
  <div id="app">
    <header class="header">
      <h1 class="title">궁점멸</h1>
      <h3 class="subtitle">🍚먹을 거 추천해주는 '궁극의 점심 멸망'</h3>
    </header>
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  components: {
    NavBar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap&subset=korean");

#app {
  font-family: "Noto Sans KR", sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
}

.header {
  border: 2px solid black;
}

.subtitle {
  color: #3c6382;
}
</style>
