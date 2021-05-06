<template>
    <div class="project-page">
        <div class="left">
            <img :src="image" :alt="imageAlt" class="project-page-image">
            <div class="tech-container">
                <p class="mid-light-heading">Technologies Used:</p>
                <div class="tech">
                    <span v-for="item in tech" :key="item.name" :class="item">{{ item }}</span>
                </div>
            </div>
        </div>
        <div class="right">
        <div class="project-body">
            <div class="project-body-header">
                <h1>{{ title }}</h1>
                <p class="project-page-year">{{ year }}</p>
            </div>
            <div class="sub-heading">
                
                <a class="project-link" :href="link" target="_blank"><font-awesome-icon :icon="[ 'fas', 'eye' ]" /> View Project</a>
            </div>
            <p>{{ description }}</p>
        </div>
        </div>
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
        'description',
    ],
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss">
.project-page {
    @include wrapper;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 10em 0;

    .left {
        width: 50%;
        position: relative;
        animation-name: page-load-slide-in-left;
        animation-duration: 1.5s;
        animation-delay: 0s;
        animation-timing-function: ease-in-out;

        img {
            width: 100%;
        }
    }
    .right {
        width: 50%;
        position: relative;
        animation-name: page-load-slide-in-right;
        animation-duration: 1.5s;
        animation-delay: 0s;
        animation-timing-function: ease-in-out;

        .sub-heading {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2em;

            .tech-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

            }
        }
    }
    .project-page-year {
        @include heading-text(1.25);
    }
}
.project-page-image {
    // width: 100vw;
    margin-bottom: 2em;

}
.project-body {
    @include wrapper;

    .project-link {
        @include hover-button(var(--white), var(--gray), var(--black));
    }
    .project-body-header {
        // display: flex;
        // justify-content: space-between;
        // align-items: center;
        margin-bottom: 2em;

    }
}
.mid-light-heading {
    color: var(--gray);
    text-align: center;
    // font-size: 0.8em;
    margin-bottom: 0px;
}
.tech {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    // margin-bottom: 50px;

    span {
        display: inline-block;
        padding: 0.5em 1em;
        border: 2px solid var(--white);
        border-radius: 2px;
        margin-right: 1em;

        &:last-child {
            margin-right: 0px;
        }
    }
    .VueJS {
      color: var(--VueJS);
      border-color: var(--VueJS);
    }
    .Docker {
      color: var(--Docker);
      border-color: var(--Docker);
    }
    .MongoDB {
      color: var(--MongoDB);
      border-color: var(--MongoDB);
    }
    .WordPress {
      color: var(--WordPress);
      border-color: var(--WordPress);
    }
    .Sass {
      color: var(--Sass);
      border-color: var(--Sass);
    }
}

</style>