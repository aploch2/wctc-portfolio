<template>
  <div class="portfolio">
    <h1>Portfolio</h1>
    <Projects/>
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
h1 {
@include heading-text(2.5);
}
.portfolio {
  @include wrapper;
}
</style>
