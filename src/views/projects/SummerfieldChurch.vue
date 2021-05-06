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
                'title': 'Summerfield United Methodist Church',
                'year': '2021',
                'image': 'https://austinploch.com/images/summerfield-church.jpg',
                'imageAlt': 'Image for the Summerfield United Methodist Church home page. ',
                'link': 'https://summerfieldchurch.org.dream.website',
                'tech': ['WordPress', 'Sass'],
                'description': 'Summerfield United Methodist Church is a church is a Methodist church located in Milwaukee. They wanted a new and up-to-date website that would help them better connect with their members. The have a meal service that is very important, so the information about that is very prominent on the site. They also wanted better connection with social media that would allow them to more easily share recordings of their sermons due to the fact that they hold all sermons online during the pandemic. The site was built with a CMS and contains custom plugins that support the features they wanted on their site. For this project, I was part of a team that collectively built this site. I served as the project manager, business analyst, and copywriter.',
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>