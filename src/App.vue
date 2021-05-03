<template>
  <Navbar/>
  <router-view />
</template>

<script>

import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  }
}
</script>


<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Abel&family=Montserrat:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Open+Sans+Condensed:wght@300&family=Roboto+Mono:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

:root {
  // colors
  --black: #000;
  --white: #fff;
  --gray: rgb(190, 190, 190);
  --red: rgb(125, 0, 0);
  --body-text-color: var(--white);
  --heading-text-color: var(--white);

  --VueJS: #42b883;
  --MongoDB: #4db33d;
  --Docker: #0db7ed;
  --WordPress: #0073aa;

  // fonts
  --heading-text: 'Roboto Mono', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --body-text: 'Roboto Mono', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0px; // fixes initial body margin
  background-color: rgb(34, 34, 34);
}

#app {
  font-family: var(--body-text);
  line-height: 1.5;
  color: var(--body-text-color);
  margin: 0px;
  padding: 0px;
}
</style>
