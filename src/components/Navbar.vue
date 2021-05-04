<template>
  <nav>
      <span>
      <router-link to="/">home</router-link>
      <!-- <router-link to="/">About</router-link> -->
      </span>
      <img src="../assets/logo.png" alt="Austin Ploch's logo. ">
      <span>
      <router-link to="/portfolio">portfolio</router-link>
      <!-- <router-link to="Portfolio">Contact</router-link> -->
      </span>
  </nav>
</template>

<script>
export default {
    setup() {


        return{}
    }
}
</script>

<style lang="scss">
// @import "@/scss/_mixins.scss";

nav {
    padding: 2em 0;
    // border-bottom: 1px solid #000;
    // background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    margin: 0 auto;

    * {
        // flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    span, a, img {
        // margin-right: 2em;

        &:last-child {
            // margin: 0px;
        }
    }
    a {
        @include link-underline;

        text-decoration: none;
        color: var(--white);
        // transition: 0.2s ease-in-out;
        font-family: var(--heading-text);
        text-transform: uppercase;
        padding: 5px 0;

        &:hover {
            // color: var(--gray);
            transition: 0.2s ease-in-out;
        }
    }
    img {
        max-width: 200px;
    }
}
nav>* {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>