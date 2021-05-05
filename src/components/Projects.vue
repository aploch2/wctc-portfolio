<template>
<div class="projects">
    <Project 
        :title="projects[0].title"
        year="2020"
        image="https://austinploch.com/images/self-hosted-project-manager.jpg"
        imageAlt="Image for the Self Hosted Project Manager. "
        link="/portfolio/self-hosted-project-manager"
    />
    <Project 
        title="The Etnyre Foundation"
        year="2020"
        image="https://austinploch.com/images/the-etnyre-foundation.jpg"
        imageAlt="Image of home page for The Etynre Foundation. "
        link="/portfolio/the-etnyre-foundation"
    />
    <Project 
        title="2018 Portfolio"
        year="2018"
        image="https://austinploch.com/images/2018-portfolio.jpg"
        imageAlt="Image for the 2018 Portfolio. "
        link="/portfolio/2018-portfolio"
    />
    <Project 
        title="The Invention Group"
        year="2021"
        image="https://austinploch.com/images/the-invention-group.jpg"
        imageAlt="Image for The Invention Group. "
        link="/portfolio/the-invention-group"
    />
    <Project 
        title="Summerfield United Methodist Church"
        year="2021"
        image="https://austinploch.com/images/summerfield-church.jpg"
        imageAlt="Image for the Summerfield United Methodist Church. "
        link="/portfolio/summerfield-church"
    />
</div>
</template>

<script>

import Project from '@/components/Project.vue';
import ProjectImage1 from "@/assets/logo.png"
import ProjectImage2 from "@/assets/logo-dark.png"

export default {
    components: {
        Project,
    },
    data() {
        return {
            projects: [
            { 
            id: 1, 
            title: 'Self Hosted Project Manager', 
            image: ProjectImage1,
            imageAlt: 'Image showing the self hosted project manager. ',
            year: '2020',
            projectLink: '/portfolio/self-hosted-project-manager',
            },
            { 
            id: 2, 
            title: 'Magic Tree House Books', 
            image: ProjectImage2,
            imageAlt: 'Alt Text 2. ',
            year: '2019',
            description: 'description 2',
            tech: ['WordPress'],
            link: 'https://aploch2.bitlampsites.com/wpd/final/',
            },
        ],
        }
    },
    setup () {
        

        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .projects {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        position: relative;
        // opacity: 0;
        animation-name: page-load-fade-in;
        animation-duration: 1.5s;
        animation-delay: 0s;
        animation-timing-function: ease-in-out;

    }
</style>