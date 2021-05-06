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
                'title': '2018 Portfolio',
                'year': '2018',
                'image': 'https://austinploch.com/images/2018-portfolio.jpg',
                'imageAlt': 'Image for the portfolio made in 2018. ',
                'link': 'https://aploch2.bitlampsites.com/wd2/final',
                'tech': ['Sass'],
                'description': 'Portfolio made back in 2018. It showcases some of the websites I have created, along with some of the art I had made in the past. It was built with HTML, SCSS, PHP, and JavaScript. It uses a JavaScript library called particles.js to create that animated, interactive background.',
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>