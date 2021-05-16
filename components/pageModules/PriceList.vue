<template>
    <section class="prices">
        <div class="prices__list [ container-narrow ]">
            <PriceItem v-for="product in item.products" :key="product._key" :product-id="product._id" />
        </div>
        <img class="bg-image" v-if="item.bgImage.asset" :src="$urlFor(item.bgImage).width(1600)" :alt="item.bgImage.alt" loading="lazy" />
    </section>
</template>

<script>
    import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content'
    import PriceItem from "@/components/PriceItem";

	export default {
        components: {SanityContent, PriceItem},
        props:{
            item: Object
        }
    }
</script>

<style lang="scss" scoped>
 @import './assets/scss/config';

    $outputTokenCSS: false;
    @import './node_modules/gorko/gorko.scss';

    .prices{
        position: relative;
        padding: get-size('lg') 0;

        .bg-image{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center top;
        }

        &__list{
            position: relative;
            display: grid;
            grid-template-columns: 1fr;
            gap: get-size('gutter');
            z-index: 10;

            @include media-query('md'){
                grid-template-columns: repeat(3, 1fr);
                align-items: center;
            }
        }
    }
</style>