<template>
    <div class="project">
        <div class="project-image-container">
            <img class="project-image" :src="image" :alt="imageAlt">            
        </div>
        <div class="project-info">
            <h2>
                <router-link :to="link">
                    {{ title }}
                </router-link>
            </h2>
            <p>2020</p>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'title',
        'year',
        'image',
        'imageAlt',
        'link'
    ],
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.project {
    width: 30%;
    margin: 1em;

    // &:first-child {
    //     margin-left: 0px;
    // }
    // &:last-child {
    //     margin-right: 0px;
    // }
    .project-image-container {
        height: 20em;
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
            
            a {
                color: var(--heading-text-color);
                text-decoration: none;
                transition: 0.2s ease-in-out;

                &:hover {
                    color: var(--red);
                    transition: 0.2 ease-in-out;
                }
            }
            
        }
        p {
            text-align: right;
            width: 20%;
        }
    }
}

</style>