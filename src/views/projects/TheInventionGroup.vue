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
                'title': 'The Invention Group',
                'year': '2021',
                'image': 'https://austinploch.com/images/the-invention-group.jpg',
                'imageAlt': 'Image for The Invention Group home page. ',
                'link': 'https://aploch2.bitlampsites.com/portfolio/capstone',
                'tech': ['WordPress', 'Sass'],
                'description': 'The Invention Group is a fictional company that helps inventors bring life to their inventions. They wanted a website that would allow inventors to easily contact them about their inventions. The website contains a login system that allows the inventor to see the status of their account, if their invention idea is still being processed, or if they are accepted or denied. The website will also be connected to a database that will store all the information for the website.',
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>