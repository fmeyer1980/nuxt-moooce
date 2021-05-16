<template>
<div class="[ container-narrow ]">
    <div class="system [ flow ] [ color-light-glare space-400 ]">
        <div>
            <ul class="system__logos [ flow ] [ space-300 md:space-none ]">
                <li v-for="item in home.systems.logos" :key="item._key">
                    <img class="" :src="$urlFor(item.image)" :alt="item.image.alt"/>
                    <span class="text-xs bg-secondary-glare color-primary-shade weight-bold" v-if="item.comingSoon == true">Kommer snart</span>
                </li>
            </ul>
        </div>
        <h2 class="text-200 weight-normal" v-text="home.systems.headline" />
        <button class="btn" data-type="secondary" @click="goToGetStarted" id="get-started-brand">{{ home.systems.linkText }}</button>
        <svg class="system__bg color-primary-shade fill-current" viewBox="0 0 1165 77" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.02 15.42C7.96 9.4 4.46 7.87.62.5h1163.81c-3.92 7.5-7.18 8.89-36.41 15.43-364.07 81.46-726.04 81.3-1093-.5z" /></svg>
    </div>
</div>
</template>

<script>
	export default {
		name: "SiteHeader",
        props:{
            home: Object
        }
	};
</script>

<style lang="scss" scoped>
@import './assets/scss/config';
$outputTokenCSS: false;
@import './node_modules/gorko/gorko.scss';


.system{
    position: relative;
    background-color: get-color('primary-shade');
    border-radius: 15px 15px 0 0;
    padding: get-size('700') get-size('800') get-size('100') get-size('800');
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 10;

    @include media-query('lg'){
        margin-top: calc(-1 * var(--size-lg));
    }

    &__bg{
        position: absolute;
        bottom: 1px;
        left: 0;
        width: 100%;
        z-index: -1;
        transform: translateY(100%);
    }

    &__logos{

        @include media-query('md'){
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        li{
            position: relative;
            padding: 0 get-size('300');
            
            span{
                position: absolute;
                top: 0;
                right: 0;
                padding: .4em 1em;
                border-radius: .8em;
                transform: rotate(20deg);
            }
        }

    }

    // &::after{
    //     content: "";
    //     width: calc(100% - 4rem);
    //     height: 15rem;
    //     position: absolute;
    //     left: 2rem;
    //     bottom: -7.5rem;
    //     clip-path: ellipse(50% 50% at 50% 50%);
    //     background-color: get-color('primary-shade');
    //     z-index: -1;
    // }
    
}
</style>