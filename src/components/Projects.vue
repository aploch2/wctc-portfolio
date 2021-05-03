<template>
<div class="projects">
    <div class="project" v-for="project in projects" :key="project.id">
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
    </div>
</div>
</template>

<script>

// import Project from '@/components/Project.vue';
import ProjectImage1 from "@/assets/logo.png"
import ProjectImage2 from "@/assets/logo-dark.png"

export default {
    components: {
        // Project,
    },
    data() {
        return {
            projects: [
            { 
            id: 1, 
            title: 'Self Hosted Project Manager', 
            image: ProjectImage1,
            imageAlt: 'Image showing the self hosted project manager. ',
            year: '2018',
            description: 'The Self-hosted Project Manager is a website that is self-hosted on your network that gives you a "to-do list" style of interface that allows you to manage current projects. The goal was to be able to have the user download or pull the repository from GitHub and then be able to launch the application with one command. Once you execute the command, it will launch a build a docker container that contains a MongoDB database, a custom made CRUD API built with NodeJS, for interacting with the database and a front end built in VueJS to display the content from the database. The functionality of the app is basic, but shows how you can easily launch a self-hosted app to use within your own network and not having to rely on storing your data on another server.',
            tech: ['VueJS', 'MongoDB', 'Docker'],
            link: 'https://github.com/aploch2/iwd-final',
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
        
        .project {
            width: 30%;
            margin: 1em;

            .project-image-container {
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
    }
</style>