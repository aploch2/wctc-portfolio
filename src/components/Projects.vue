<template>
<div class="projects">
    <div class="project" v-for="project in projects" :key="project.id">
        <img class="project-image" :src="project.image" :alt="project.imageAlt">
        <div class="project-info">
            <h2>{{ project.title }}</h2>
            <p>{{ project.year }}</p>
        </div>
    </div>
</div>
</template>

<script>

// import Project from '@/components/Project.vue';

export default {
    components: {
        // Project,
    },
    data: ()=>({
        
    }),
    setup () {
        

        return {
            projects: [
            { 
            id: 1, 
            title: 'Project 1', 
            image: 'https://miro.medium.com/max/2625/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg',
            imageAlt: 'Alt Text 1. ',
            year: '2018',
            },
            { 
            id: 2, 
            title: 'Project 2', 
            image: 'https://www.clientresourcesinc.com/wp-content/uploads/2018/06/vuejs_logo.png',
            imageAlt: 'Alt Text 2. ',
            year: '2019',
            },
        ],
        }
    }
}
</script>

<style lang="scss" scoped>
    .projects {
        display: flex;
        justify-content: center;
        
        .project {
            width: 30%;
            margin: 1em;

            
            .project-image {
                max-width: 100%;
            }
            .project-info {
                display: flex;
                justify-content: space-between;
                align-items: center;

                h2, p {
                    display: inline-block;
                    margin: 0px;
                    padding: 0px;
                    width: 50%;
                }
                p {
                    text-align: right;
                }
            }
        }
    }
</style>