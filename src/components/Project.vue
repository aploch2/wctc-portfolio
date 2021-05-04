<template>
<router-link :to="link" class="project-link">
    <div class="project">
        <div class="project-image-container">
            <img class="project-image" :src="image" :alt="imageAlt">            
        </div>
        <div class="project-info">
            <h2>
                    {{ title }}
            </h2>
            <p>2020</p>
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
    width: 20%;
    margin: 1em;
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

}
.project {
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
        justify-content: space-between;
        align-items: center;
        padding: 1em 0;

        h2, p {
            display: inline-block;
            margin: 0px;
            padding: 0px;
        }
        h2 {
            width: 80%;            
        }
        p {
            text-align: right;
            width: 20%;
        }
    }
}

</style>