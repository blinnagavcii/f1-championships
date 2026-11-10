<template>
  <div id="app">
    <div class="navigation">
      <navigation></navigation>
    </div>
    <div class="content">
      <router-view :key="$route.fullPath"></router-view>
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/layouts/Navigation.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";

export default {
  components: {
    Navigation,
    TheFooter,
  },
};
</script>

<style lang="scss">

$base-color: #e6101a;

#app {
  font-family: "Poppins", sans-serif;
  display: flex;
  background-color: #edf0f2;
}

h1,
h2,
h3 {
  color: $base-color;
  letter-spacing: 0;
}

h4,
h5,
h6 {
  color: #c2c8cb;
}

h2{
  font-size: 22px;
  font-weight: 600;
}

div,
span,
p,
ul,
li,
a {
  color: #242424;
  letter-spacing: 1px;
}

body {
  margin: 0;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 15px;
  width: 100%;
  min-height: calc(100% - 140px);
}

.navigation {
  flex: 0 0 20%;
  text-align: center;
}

.content {
  flex: 0 0 80%;
}
</style>
