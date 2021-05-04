v-<template>
    <div>
        <img :src="image" :alt="imageAlt" class="project-image">
        <p class="mid-light-heading">Technologies Used:</p>
        <div class="tech">
            <span v-for="item in tech" :key="item.name" :class="item">{{ item }}</span>
        </div>
        <div class="project-body">
            <div class="project-body-header">
                <h1>{{ title }}</h1>
                <a class="project-link" :href="link" target="_blank">Project Link</a>
            </div>
        <!-- <p>The Project ID is: {{ id }}</p> -->
            <p>{{ year }}</p>
            <p>{{ description }}</p>
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
        'link',
        'tech',
        'description',
    ],
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.project-image {
    width: 100vw;
}
.project-body {
    @include wrapper;

    .project-body-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .project-link {
            text-decoration: none;
            color: var(--black);
            padding: 0.5em 1em;
            background-color: var(--white);
            border: 2px solid var(--white);
            border-radius: 2px;
            transition: 0.2s ease-in-out;

            &:hover {
                background-color: transparent;
                color: var(--white);
                transition: 0.2s ease-in-out;
            }
        }
    }
}
.mid-light-heading {
    color: var(--gray);
    text-align: center;
    // font-size: 0.8em;
    margin-bottom: 0px;
}
</style>