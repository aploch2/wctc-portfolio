<template>
    <footer class="footer">
        <div class="footer-main">
            <div class="left">
                <div class="links">
                <p>// <router-link to="/">Home</router-link></p>
                <p>// <router-link to="/portfolio">Portfolio</router-link></p>
                </div>
            </div>
            <div class="middle">
                <img src="@/assets/logo.png" alt="Austin Ploch's logo. ">
            </div>
            <div class="right">
                <h3>// Contact Me</h3>
                <div class="button-container">
                <a href="mailto:austin@austinploch.com" class="icon-button"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
                <a href="https://www.linkedin.com/in/austin-ploch/" class="icon-button" target="_blank"><font-awesome-icon :icon="[ 'fab', 'linkedin' ]" /></a>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <p>
           <font-awesome-icon :icon="['far', 'copyright']"/> 2021 - Austin Ploch
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss">
footer {
}
.footer-main {
    @include wrapper;
    
    // background-color: var(--white);
    padding: 100px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left, .middle, .right {
        // width: 33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .left .links {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        // align-items: start;

        a {
            text-decoration: none;
            color: var(--heading-text-color);

            @include link-underline;
        }
    }
    .left {
        a {
            margin-bottom: 1em;
            padding-bottom: 0.5em;

            &:last-child {
                margin-bottom: 0px;
            }
        }
    }
    .middle {
        img {
            width: 100%;
            max-width: 200px;
        }
    }
    .right {
        h3 {
            @include heading-text(1.25);
            margin-bottom: 1em;
            text-transform: inherit;
        }
        a {
            margin-right: 1em;
            font-size: 2em;
            color: var(--white);
            transition: 0.2s ease-in-out;

            &:hover {
                color: var(--red);
                transition: 0.2s ease-in-out;
            }
            &:last-child {
                margin-right: 0px;

            }
        }
    }
}
.footer-copyright {
    background: var(--white);
    padding: 0.25em 0;
    p {
        color: var(--body-text-color-dark);
        text-align: center;
        font-size: 0.8em;
    }
}
</style>