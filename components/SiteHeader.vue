<template>
    <header class="site-head [ container ] [ pt-300 pb-300 ]">
        <nuxt-link :to="{name:'index'}" aria-label="Gå til forsiden">
           <LogoSvg class="logo fill-current h-500" />
        </nuxt-link>
        <button id="get-started" class="btn [ d-hidden md:d-block ]" data-type="primary" data-size="large">Kom igang nu!</button>
        <button class="site-head__dropdown-nav" @click="toggleMenu">
            <!-- <MenuOpenSvg class="fill-current  h-300" /> -->
            <span></span>
            <span></span>
        </button>
    </header>
</template>

<script>
    import {mapState} from 'vuex'
    import LogoSvg from "@/components/svg/LogoSvg"
    import MenuOpenSvg from "@/components/svg/MenuOpenSvg"
	export default {
		name: "SiteHeader",
        components: {LogoSvg,MenuOpenSvg},
        computed:{
			...mapState('sanity',{
				site: 'siteSettings'
			}),
            ...mapState('view', {
				menuOpen: 'menuOpen'
			}),
		},
        methods: {
			toggleMenu()
			{
				this.$store.commit('view/setMenuOpen',!this.menuOpen);
			}
		}
	};
</script>

<style lang="scss">
@import './assets/scss/config';
$outputTokenCSS: false;
@import './node_modules/gorko/gorko.scss';

.site-head{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .open & {
        color: get-color('light-glare');

        #get-started{
            display: none;
        }

    }

    &__dropdown-nav{
        position: relative;
        border: none;
        background-color: transparent;
        width: get-size('500');
        height: get-size('500');
        &:focus{
            outline: none;
        }

 			span {
				display: block;
				position: absolute;
				height: 14%;
				background: currentColor;
				left: 0;
				border-radius: 1rem;
				pointer-events: none;
				transition: all 300ms ease-in-out;
				
				.open & {
					background: currentColor;
				}
				
				&:first-child {
					top: 25%;
					width: 100%;
					
					.open & {
						top: 40%;
						transform: rotate(45deg);
					}
				}
				
				&:last-child {
					top: 60%;
					width: 60%;
					
					.open & {
						top: 40%;
						width: 100%;
						transform: rotate(135deg);
					}
				}
			}
    }
}

</style>