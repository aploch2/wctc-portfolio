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
                'tech': ['VueJS', 'MongoDB', 'Docker'],
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>