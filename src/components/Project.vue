<template>
<router-link :to="link" class="project-link">
    <div class="project">
        <!-- <p class="project-year">{{ year }}</p> -->
        <div class="project-image-container">
            <img class="project-image" :src="image" :alt="imageAlt">            
        </div>
        <div class="project-info">
            <h2>
                    {{ title }}
            </h2>
        </div>
    </div>
</router-link>
</template>

<script>
export default {
    props:[
        'title',
        'year',
        'image',
        'imageAlt',
        'link',
        'description'
    ],
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.project-link {
    width: 30%;
    margin: 1em;
    // margin-bottom: 1em;
    padding: 1.5em;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    transition: 0.2s ease-in-out;
    color: var(--heading-text-color);
    text-decoration: none;
    transition: 0.2s ease-in-out;

    &:hover {
        background: rgba(255,255,255,0.3);
        // color: var(--red);
        transition: 0.2s ease-in-out;
    }
    @media screen and (max-width: 800px) {
        width: 90%;
    }
    @media screen and (min-width: 800px) and (max-width: 1500px) {
        width: 40%;
    }
}
.project {
    position: relative;

    .project-year {
        position: absolute;
        top: -2em;
        left: -2em;
        z-index: 2;
        background: var(--red);
        display: inline-block;
        padding: 0.5em 1em;
        border-radius: 2px;
    }
    .project-image-container {
        width: auto;
        height: 15em;
        overflow: hidden;
        display: flex;
        justify-content: center;

        .project-image {
            max-height: 100%;
        }
    }
    .project-info {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em 0;
        padding-bottom: 0px;

        h2, p {
            display: inline-block;
            margin: 0px;
            padding: 0px;
        }
        h2 {
            // width: 80%;
            font-size: 1em;
            text-align: center;
        }
        p {
            text-align: right;
            width: 20%;
        }
    }
}

</style>