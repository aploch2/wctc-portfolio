<template>
  <nav>
      <span>
      <router-link to="/" class="nav-left">home</router-link>
      <!-- <router-link to="/">About</router-link> -->
      </span>
      <img src="../assets/logo.png" alt="Austin Ploch's logo. " class="nav-center">
      <span>
      <router-link to="/portfolio" class="nav-right">portfolio</router-link>
      <!-- <router-link to="Portfolio">Contact</router-link> -->
      </span>
      <font-awesome-icon :icon="[ 'fas', 'bars' ]" class="nav-menu" />
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
    .nav-left {
        position: relative;
        animation-name: page-load-slide-in-top;
        animation-duration: 1s;
        animation-delay: 0s;
        animation-timing-function: ease-in-out;

    }
    .nav-center {
        position: relative;
        animation-name: page-load-slide-in-top;
        animation-duration: 1s;
        animation-delay: 0s;
        animation-timing-function: ease-in-out;

    }
    .nav-right {
        position: relative;
        animation-name: page-load-slide-in-top;
        animation-duration: 1s;
        animation-delay: 0s;
        animation-timing-function: ease-in-out;


    }
    .nav-menu {
        display: none;
    }

    @media screen and (max-width: 500px) {
        .nav-menu {
            display: block;
        }
    }
}
nav>* {
  flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
}


@media only screen and (max-width: 750px) {
    .nav-menu {
        display: inline-block;
        font-size: 1.5em;

        &:hover {
            color: var(--red);
        }
    }
}
</style>