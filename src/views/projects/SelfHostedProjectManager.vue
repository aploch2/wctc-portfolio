<template>
    <div>
    <ProjectPage 
        :title="project.title"
        :description="project.description"
        :year="project.year"
        :image="project.image"
        :imageAlt="project.imageAlt"
        :link="project.link"
        :tech="project.tech"
    />
    </div>
</template>

<script>

import ProjectPage from '@/components/ProjectPage.vue'

export default {
    components: {
        ProjectPage,
    },
    setup () {
        

        return {
            project: {
                'title': 'Self Hosted Project Manager',
                'year': '2020',
                'image': 'https://austinploch.com/images/self-hosted-project-manager.jpg',
                'imageAlt': 'Image for the Self Hosted Project Manager. ',
                'link': 'https://github.com/aploch2/iwd-final',
                'tech': ['VueJS', 'Sass', 'MongoDB', 'Docker'],
                'description': 'The Self-hosted Project Manager is a website that is self-hosted on your network that gives you a "to-do list" style of interface that allows you to manage current projects. The goal was to be able to have the user download or pull the repository from GitHub and then be able to launch the application with one command. Once you execute the command, it will launch a build a docker container that contains a MongoDB database, a custom made CRUD API built with NodeJS, for interacting with the database and a front end built in VueJS to display the content from the database. The functionality of the app is basic, but shows how you can easily launch a self-hosted app to use within your own network and not having to rely on storing your data on another server.',
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>