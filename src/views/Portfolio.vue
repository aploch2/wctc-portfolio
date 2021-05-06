<template>
  <div class="portfolio">
    <header>
      <span class="title-span">// <h1>My Works</h1></span>
    </header>
    <main>
      <Projects/>
    </main>
  </div>
</template>

<script>

import Projects from '@/components/Projects.vue';

export default {
  components: {
    Projects,
  },
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>
.portfolio {
  @include wrapper;

  header {
    padding: 50px 0;  

    .title-span {
      font-size: 2.5em;
      position: relative;
      animation-name: page-load-slide-in-left;
      animation-duration: 1.0s;
      animation-delay: 0s;
      animation-timing-function: ease-in-out;

    }
    h1 {
      @include heading-text(1);

      display: inline-block;
    }
  }
  main {
    padding: 50px 0;
  }
  @media screen and (max-width: 800px) {
    h1 {
      text-align: center;
    }
  }

}
</style>
