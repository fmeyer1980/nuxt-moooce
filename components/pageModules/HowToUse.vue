<template>
    <section class="how-to-use container-narrow">
        <div class="how-to-use__item" v-for="item in item.steps" :key="item._key">
            <div class="image-wrapper">
                <img v-if="item.image.asset" width="317" height="503" :src="$urlFor(item.image).width(317).height(503)" :alt="item.image.alt" />
            </div>
            <div class="content flow space-200">
                <div class="h2" v-text="item.step" />
                <SanityContent class="page-content" v-if="item.text" :blocks="item.text" />
            </div>
        </div>
    </section>
</template>

<script>
	export default {
		name: "HowToUse",
        props:{
            item: Object
        }
    }
</script>

<style lang="scss" scoped>
 @import './assets/scss/config';
$outputTokenCSS: false;
@import './node_modules/gorko/gorko.scss';

.how-to-use{
    display: grid;
    grid-template-columns: 1fr;
    gap: get-size('800');

    @include media-query('md'){
        grid-template-columns: 1fr 1fr;
    }

    &__item{
        display: flex;
        flex-wrap: wrap;

        .image-wrapper{
            flex-basis: 15rem;
            flex-grow: 1;
            img{
                width: 100%;
            }
        }

        .content{
            flex-basis: 0;
            flex-grow: 999;
            min-width: 40%;
        }
    }
}
</style>