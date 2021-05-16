<template>
	<section class="prices" id="getstarted">
        <div class="prices__image-wrapper">
            <img :src="$urlFor(home.featuredProducts.bgImage).width(1800)" :alt="home.featuredProducts.bgImage.alt" loading="lazy" />
        </div>
		<div class="prices__list [ container-narrow ]">
			<PriceItem v-for="product in home.featuredProducts.products" :key="product._id" :product-id="product._id" />
		</div>
	</section>
</template>
<script>
	import PriceItem from "@/components/PriceItem";
	export default {
		name: "Prices",
        components: {PriceItem},
		props:{
            home: Object
        }
	};
</script>
<style lang="scss" scoped>
    @import './assets/scss/config';

    $outputTokenCSS: false;
    @import './node_modules/gorko/gorko.scss';

    .prices{
        position: relative;
        // padding: calc(var(--size-lg) * 2.5) 0 var(--size-lg);

        @include media-query('md'){
            margin-top: calc(-1 * var(--size-lg));
            padding: calc(var(--size-lg) * 2.5) 0 var(--size-lg);
        }

        &__image-wrapper{

            img{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center top;
            }


            &::before{
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 8rem;
                background: linear-gradient(to bottom, rgba(get-color('light-shade'), 1), transparent);
                z-index: 1;
            }
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