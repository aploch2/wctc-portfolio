<template>
  <nav id="nav">
      <div class="nav">
        <span>
        <router-link to="/" class="nav-left" @click="closeMenu()">home</router-link>
        <!-- <router-link to="/">About</router-link> -->
        </span>
        <img src="../assets/logo.png" alt="Austin Ploch's logo. " class="nav-center">
        <span>
        <router-link to="/portfolio" class="nav-right" @click="closeMenu()">portfolio</router-link>
        <!-- <router-link to="Portfolio">Contact</router-link> -->
        </span>
      </div>
      <font-awesome-icon :icon="[ 'fas', 'times' ]" class="menu-close" @click="closeMenu()" />
  </nav>
  <div class="mobile-nav-head">
        <img src="../assets/logo.png" alt="Austin Ploch's logo. " class="mobile-logo">
        <font-awesome-icon :icon="[ 'fas', 'bars' ]" class="nav-menu" @click="openMenu()" />
  </div>
</template>

<script>
export default {
    setup() {


        return{}
    },
    methods: {

        openMenu() {
            document.getElementById("nav").style.width = "100%";
            console.log('open');
        },
        closeMenu() {
            document.getElementById("nav").style.width = "0%";
            console.log('close');
        } 
    }
}
</script>

<style lang="scss">
// @import "@/scss/_mixins.scss";
nav {
    @media screen and (max-width: 800px) {
        overflow: hidden;
        background-color: var(--black);
        position: relative;
        height: 100%;
        width: 0;
        z-index: 10;
        position: fixed;
        left: 0;
        top: 0;

        .nav {
            // display: none;
            flex-direction: column;
            position: relative;
            top: 10%;
            width: 100%;
            // margin-top: 2em;

            a {
                margin-bottom: 2em;
            }
            .nav-center {
                order: -1;
                margin-bottom: 2em;
            }
        }
        .menu-close {
            font-size: 2em;
            position: absolute;
            top: 1em;
            right: 1em;
            display: block;
        }
    }
}
.mobile-nav-head {
    display: none;

    @media screen and (max-width: 800px) {
        
        padding: 2em 0;
        display: flex;
        justify-content: center;
        align-items: center;
    
        .mobile-logo {
            display: flex;
            max-width: 200px;
            margin-right: 50px;
            // position: absolute;
            // left: 1.5em;
            // top: 1.5em;
    
        }
    }
    .nav-menu {
        // padding: 1em;
        display: none;
        transition: 0.2s ease-in-out;
    
        @media screen and (max-width: 800px) {
            display: block;
            position: absolute;
            font-size: 2em;
            right: 1.5em;
            top: 1.5em;
    
        }
        &:hover {
            color: var(--red);
            cursor: pointer;
            transition: 0.2s ease-in-out;
        }
    }
}
.menu-close {
    @media screen and (min-width: 801px) {
        display: none;
    }
}
.nav {
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
}
.nav>* {
  flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
}


// @media only screen and (max-width: 750px) {
//     .nav-menu {
//         display: inline-block;
//         font-size: 1.5em;

//         &:hover {
//             color: var(--red);
//         }
//     }
// }
</style>