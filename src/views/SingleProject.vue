<template>
    <div>
        <img :src="image" :alt="imageAlt">
        <p class="mid-light-heading">Technologies Used:</p>
        <div class="technologies">
            <p v-for="item in tech" :key="item.name" :class="item">{{ item }}</p>
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
    props: ['id',
            'title',
            'image',
            'imageAlt',
            'year',
            'link',
            'description',
            'tech'],
    // data() {
    //     return {
    //         projectId: this.$route.params.id
    //     }
    // },
    setup () {
        // console.log($route.params);

        return {
           
        }
    }
}
</script>

<style lang="scss" scoped>
.project-body {
    @include wrapper;

    .project-body-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
.mid-light-heading {
    color: var(--gray);
    text-align: center;
    // font-size: 0.8em;
    margin-bottom: 0px;
}
.technologies {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        display: inline-block;
        padding: 0.5em 1em;
        border: 2px solid var(--white);
        border-radius: 2px;
        margin-right: 1em;

        &:last-child {
            margin-right: 0px;
        }
    }
    .VueJS {
        color: var(--VueJS);
        border-color: var(--VueJS);
    }
    .Docker {
        color: var(--Docker);
        border-color: var(--Docker);
    }
    .MongoDB {
        color: var(--MongoDB);
        border-color: var(--MongoDB);
    }
    .WordPress {
        color: var(--WordPress);
        border-color: var(--WordPress);
    }
}
.project-link {
    text-decoration: none;
    color: var(--black);
    padding: 0.5em 1em;
    background-color: var(--white);
    border: 2px solid var(--white);
    border-radius: 2px;

    &:hover {
        background-color: transparent;
        color: var(--white);
    }
}
</style>