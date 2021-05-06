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
                'title': 'The Etnyre Foundation',
                'year': '2020',
                'image': 'https://austinploch.com/images/the-etnyre-foundation.jpg',
                'imageAlt': 'Image for The Etnyre Foundation. ',
                'link': 'https://theetnyrefoundation.org',
                'tech': ['WordPress', 'Sass'],
                'description': 'The Etnyre Foundation is a foundation set up by Etnyre. Etnyre manufactures a wide range of equipment that serves the asphalt roadbuilding industry. They are located in Oregon, Illinois and wanted to give back to the town in a meaningful way. The Etnyre Foundation website serves as a place where people who wish to receive grants can apply for one or learn about the foundation.',
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>