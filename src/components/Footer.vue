<template>
    <div class="footer">
        <div class="left">
            <div class="links">
            <router-link to="/">Home</router-link>
            <router-link to="/portfolio">Portfolio</router-link>
            </div>
        </div>
        <div class="middle">
            <img src="@/assets/logo.png" alt="Austin Ploch's logo. ">
        </div>
        <div class="right">
            <h2>Contact Me:</h2>
            <a href="mailto:austin@austinploch.com" class="button">Send Message</a>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss">
.footer {
    // background-color: var(--white);
    padding: 100px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left, .middle, .right {
        width: 33%;
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
    .middle {
        img {
            width: 100%;
            max-width: 250px;
        }
    }
}
</style>