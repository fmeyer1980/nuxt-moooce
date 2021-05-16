<template>
    <section class="hero full-bleed">
        <div class="hero__content [ container ] [ color-light-glare ]">
            <div class="measure-micro text-400 md:text-500 text-transform-up">
                <span class="font-secondary weight-bold" v-for="item in home.intro.tagline" :key="item.item">{{ item }}</span>
            </div>
            
        </div>
        <img
            class="hero__image"
            :src="$urlFor(home.intro.bgImage).width(1400).quality(70)"
            :alt="home.intro.bgImage.alt"
            height="1800"
            width="1200"
            loading="lazy"
        />
    </section>
</template>

<script>
	export default {
		name: "Hero",
        props:{
            home: Object
        }
	};
</script>

<style lang="scss" scoped>
@import './assets/scss/config';

$outputTokenCSS: false;
@import './node_modules/gorko/gorko.scss';

.hero{
    position: relative;
    &__content{
        position: relative;
        z-index: 10;
        padding-top: calc(var(--size-lg) * 2.5);
        padding-bottom: calc(var(--size-lg) * 3.5);

        div{
            display: flex;
            flex-direction: column;

            span{
                &:last-child{
                    font-size: 3em;
                    color: get-color('secondary');
                    align-self: flex-end;
                      @include apply-utility('leading', 'none');
                }
            }
        }


    }

    &__image{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>