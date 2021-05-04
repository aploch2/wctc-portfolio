v-<template>
    <div>
        <img :src="image" :alt="imageAlt">
        <div class="tech">
            <p v-for="techItem in tech" :key="techItem" :class="techItem">{{ techItem }}</p>
        </div>
        {{ title }}
        {{ year }}
        {{ link }}
    </div>
</template>

<script>
export default {
    props:[
        'title',
        'year',
        'image',
        'imageAlt',
        'link',
        'tech',
    ],
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
    img {
        width: 30%;
        height: auto;
    }
</style>