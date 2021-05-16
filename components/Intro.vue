<template>
    <div class="intro [  ] [ color-light-glare ]">
        <div class="intro__show-product">
            <div class="video-wrapper">
                <img src="/images/iphone-x.webp"/>
                <video class="video-bg" muted loop autoplay playsinline>
                    <source :src="home.intro.video" type="video/mp4">
                    <source :src="home.intro.video" type="video/webm">
                    Your browser does not support the video tag.
                </video>
            </div>

            <div>
                <!-- Product image -->
            </div>

        </div>

        <div class="intro__content bg-primary">
            <h1 class="text-500" v-text="home.intro.headline" />
            <p v-text="home.intro.subHeadline" />
            <SanityContent class="page-content" :blocks="home.intro.text" />
        </div>

    </div>
</template>

<script>
    import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content'
	export default {
		name: "Intro",
        components: {SanityContent},
        props:{
            home: Object
        }
	};
</script>

<style lang="scss" scoped>
@import './assets/scss/config';

$outputTokenCSS: false;
@import './node_modules/gorko/gorko.scss';

.intro{

    --video-size: 100vw;
    @include media-query('md'){
        --video-size: 45rem
    }
    @include media-query('lg'){
        --video-size: 55rem
    }

    > div{
        position: relative;
    }


    position: relative;
    // padding: 0 get-size('gutter');

    @include media-query('md'){
        margin-top: calc(-1 * var(--size-lg) * 2);
        z-index: 10;
    }

    .video-wrapper{
        position: absolute;
        height: var(--video-size);
        top: calc(-1 * var(--size-lg) * 2.5);
        right: get-size('gutter');
        box-shadow: 10px 10px 31px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 10px 10px 31px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 31px 0px rgba(0,0,0,0.75);
        border-radius: 15%;
        z-index: 100;


        img{
            height: 100%;
        }

        video{
            position: absolute;
            top: 1px;
            left: 1px;
            z-index: -1;
            width: 99%;
            height: 99%;
            border-radius: 18%;
        }
    }

    &__content{
        padding-top: calc( calc(var(--video-size) - var(--size-lg) * 2.5 ) + var(--size-900));
        padding-bottom: calc(var(--size-lg) + var(--size-600));
        border-radius: 15px;

        
        @include media-query('md'){
            margin-right: calc(var(--size-lg) * 2);
        }
    }
  
}
</style>