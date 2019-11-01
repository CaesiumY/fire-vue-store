<template>
  <div class="nav">
    <ul>
      <router-link to="/">Home</router-link>
      <span class="br">|</span>
      <router-link to="/review">Review</router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  padding: 15px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 2;
}

.nav a {
  font-weight: bold;
  color: #cad3c8;
}

.nav a.router-link-exact-active {
  color: #eb2f06;
}
</style>
