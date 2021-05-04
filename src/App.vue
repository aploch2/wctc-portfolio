<template>
  <Navbar/>
  <router-view />
  <Footer />
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
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
  background-color: rgb(15, 15, 15);
}

#app {
  font-family: var(--body-text);
  line-height: 1.5;
  color: var(--body-text-color);
  margin: 0px;
  padding: 0px;
}

.tech {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 50px;

    span {
        display: inline-block;
        padding: 0.5em 1em;
        border: 2px solid var(--white);
        border-radius: 2px;
        margin-right: 1em;

        &:last-child {
            margin-right: 0px;
        }
    }
    .VueJS {
      color: var(--VueJS);
      border-color: var(--VueJS);
    }
    .Docker {
      color: var(--Docker);
      border-color: var(--Docker);
    }
    .MongoDB {
      color: var(--MongoDB);
      border-color: var(--MongoDB);
    }
    .WordPress {
      color: var(--WordPress);
      border-color: var(--WordPress);
    }
}
.button {
    text-decoration: none;
    color: var(--black);
    padding: 0.5em 1em;
    background-color: var(--white);
    border: 2px solid var(--white);
    border-radius: 2px;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: transparent;
        color: var(--white);
        transition: 0.2s ease-in-out;
    }
}

</style>
