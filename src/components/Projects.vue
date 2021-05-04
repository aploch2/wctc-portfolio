<template>
<div class="projects">
    <!-- <div class="project" v-for="project in projects" :key="project.id">
        <div class="project-image-container">
        <img class="project-image" :src="project.image" :alt="project.imageAlt">            
        </div>
        <div class="project-info">
            <h2>
                <router-link :to="{ name: 'Project', params: { id: project.id, image: project.image, imageAlt: project.imageAlt, title: project.title, year: project.year, description: project.description, tech: project.tech, link: project.link} }">
                    {{ project.title }}
                </router-link>
            </h2>
            <p>{{ project.year }}</p>
        </div>
    </div> -->
    <Project 
        :title="projects[0].title"
        year="2020"
        image="https://austinploch.com/images/self-hosted-project-manager.jpg"
        imageAlt="Image for the Self Hosted Project Manager. "
        link="/portfolio/self-hosted-project-manager"
    />
    <Project 
        title="Magic Tree House Books"
        year="2019"
        image="https://austinploch.com/images/magic-tree-house-books.jpg"
        imageAlt="Image of home page for Magic Tree House Books. "
        link="/portfolio/magic-tree-house-books"
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
    <!-- <div class="project" id="project-project-manager">
        <div class="project-image-container">
        <img class="project-image" src="@/assets/logo.png" alt="Image for the Self Hosted Project Manager. ">            
        </div>
        <div class="project-info">
            <h2>
                <router-link to="/portfolio/self-hosted-project-manager">
                    Self Hosted Project Manager
                </router-link>
            </h2>
            <p>2020</p>
        </div>
    </div>
    <div class="project" id="project-tree-house">
        <div class="project-image-container">
        <img class="project-image" src="@/assets/logo-dark.png" alt="Image of home page for Magic Tree House Books. ">            
        </div>
        <div class="project-info">
            <h2>
                <router-link to="/portfolio/magic-tree-house-books">
                    Magic Tree House Books
                </router-link>
            </h2>
            <p>2019</p>
        </div>
    </div>
    <div class="project" id="project-2018-portfolio">
        <div class="project-image-container">
        <img class="project-image" src="@/assets/logo-dark.png" alt="Image of home page for my 2018 portfolio. ">            
        </div>
        <div class="project-info">
            <h2>
                <router-link to="/portfolio/2018-portfolio">
                    2018 Portfolio
                </router-link>
            </h2>
            <p>2018</p>
        </div>
    </div>
    <div class="project" id="project-invention-group">
        <div class="project-image-container">
        <img class="project-image" src="@/assets/logo-dark.png" alt="Image of home page for The Invention Group. ">            
        </div>
        <div class="project-info">
            <h2>
                <router-link to="/portfolio/the-invention-group">
                    The Invention Group
                </router-link>
            </h2>
            <p>2021</p>
        </div>
    </div>
    <div class="project" id="project-summerfield-church">
        <div class="project-image-container">
        <img class="project-image" src="@/assets/logo-dark.png" alt="Image of home page for Summerfield United Methodist Church. ">            
        </div>
        <div class="project-info">
            <h2>
                <router-link to="/portfolio/summerfield-church">
                    Summerfield United Methodist Church
                </router-link>
            </h2>
            <p>2019</p>
        </div>
    </div> -->
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
        
    }
</style>