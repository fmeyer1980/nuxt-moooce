<template>
	<footer class="footer [ container flow ] [ bg-primary-shade color-light-glare pt-900 pb-400 space-600 ]">
		<div class="footer__top ">
			<ul class="footer__nav">
				<li v-for="item in site.asideMenu" :key="item._key">
					<nuxt-link :to="{name:'slug',params:{slug:item.slug.current}}" title="Handelsbetingelser">{{ item.name }}</nuxt-link>
				</li>
			</ul>
			<ul class="footer__socialmedia">
				<li>
					<a aria-label="Link til facebook" href="">
						<svg class="fill-current h-300" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.843 0A5.83 5.83 0 000 5.843v20.314A5.83 5.83 0 005.843 32h11.01V19.49h-3.308v-4.504h3.308v-3.848c0-3.023 1.955-5.799 6.457-5.799 1.823 0 3.171.175 3.171.175l-.106 4.206S25 9.707 23.5 9.707c-1.624 0-1.884.748-1.884 1.99v3.289h4.888l-.213 4.504h-4.675V32h4.541A5.83 5.83 0 0032 26.157V5.843A5.83 5.83 0 0026.157 0H5.843z" /></svg>
					</a>
				</li>
				<li>
					<a class="color-light" aria-label="Link til instagram" href="">
						<svg class="fill-current h-300" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c-4.349 0-4.891.021-6.593.093-1.709.084-2.865.349-3.885.745a7.847 7.847 0 00-2.833 1.849A7.757 7.757 0 00.84 5.52C.444 6.54.179 7.696.095 9.405c-.077 1.703-.093 2.244-.093 6.593s.021 4.891.093 6.593c.084 1.704.349 2.865.745 3.885a7.848 7.848 0 001.849 2.833 7.757 7.757 0 002.833 1.849c1.02.391 2.181.661 3.885.745 1.703.077 2.244.093 6.593.093s4.891-.021 6.593-.093c1.704-.084 2.865-.355 3.885-.745a7.847 7.847 0 002.833-1.849 7.716 7.716 0 001.849-2.833c.391-1.02.661-2.181.745-3.885.077-1.703.093-2.244.093-6.593s-.021-4.891-.093-6.593c-.084-1.704-.355-2.871-.745-3.885a7.846 7.846 0 00-1.849-2.833A7.716 7.716 0 0026.478.838c-1.02-.396-2.181-.661-3.885-.745C20.89.016 20.349 0 16 0zm0 2.88c4.271 0 4.781.021 6.469.093 1.557.073 2.405.333 2.968.553a4.989 4.989 0 011.844 1.197c.53.516.938 1.144 1.192 1.839.22.563.48 1.411.553 2.968.072 1.688.093 2.199.093 6.469 0 4.27-.021 4.781-.099 6.469-.084 1.557-.344 2.405-.563 2.968-.303.751-.641 1.276-1.199 1.844-.52.528-1.15.935-1.844 1.192-.556.22-1.416.48-2.979.553-1.697.072-2.197.093-6.479.093s-4.781-.021-6.48-.099c-1.557-.084-2.416-.344-2.979-.563-.76-.303-1.281-.641-1.839-1.199-.563-.563-.921-1.099-1.197-1.844-.224-.556-.48-1.416-.563-2.979-.057-1.677-.084-2.197-.084-6.459 0-4.26.027-4.781.084-6.479.083-1.563.339-2.421.563-2.979.276-.761.635-1.281 1.197-1.844.557-.557 1.079-.917 1.839-1.199.563-.219 1.401-.479 2.964-.557 1.697-.061 2.197-.083 6.473-.083L16 2.88zm0 4.907A8.21 8.21 0 007.787 16 8.21 8.21 0 0016 24.213 8.21 8.21 0 0024.213 16 8.21 8.21 0 0016 7.787zm0 13.546A5.33 5.33 0 0110.667 16 5.33 5.33 0 0116 10.667 5.33 5.33 0 0121.333 16 5.33 5.33 0 0116 21.333zM26.464 7.459a1.923 1.923 0 01-3.585.962 1.919 1.919 0 011.662-2.879c1.057 0 1.923.86 1.923 1.917z" /></svg>
					</a>
				</li>
				<li>
					<a aria-label="Link til youtube" href="">
						<svg class="fill-current h-300" viewBox="0 0 40 28" xmlns="http://www.w3.org/2000/svg"><path d="M16.042 19.037V8.265l10.356 5.405-10.356 5.367zM38.783 6.4s-.373-2.643-1.523-3.806C35.803 1.068 34.168 1.06 33.419.97 28.056.582 20.008.582 20.008.582h-.016s-8.046 0-13.41.388c-.75.09-2.383.095-3.842 1.623C1.59 3.757 1.217 6.4 1.217 6.4S.833 9.502.833 12.605v2.907c0 3.101.384 6.204.384 6.204s.373 2.642 1.523 3.805C4.197 27.05 6.114 27 6.967 27.16c3.066.293 13.033.383 13.033.383s8.056-.011 13.419-.398c.749-.09 2.384-.096 3.84-1.624 1.15-1.163 1.524-3.805 1.524-3.805s.384-3.103.384-6.204v-2.907c0-3.103-.384-6.205-.384-6.205z" fill-rule="evenodd"/></svg>
					</a>
				</li>
			</ul>
			<div class="footer__info">
				<p v-text="site.name" />
				<p v-text="site.address" />
				<p v-text="site.zip" />
				<p v-text="site.country" />
				<a href="mailto:hey@moooce.com">{{ site.mail }}</a>
			</div>
		</div>
		<div class="footer__bottom">
			<div></div>
			<a href="">
				<LogoSvg class="color-primary fill-current h-600" />
			</a>
			<img class="h-200" src="/images/payment.png" alt="Betalings kort" />
			
		</div>
		
	</footer>
</template>

<script>
	import {mapState} from 'vuex'
	import LogoSvg from '@/components/svg/LogoSvg'
	export default {
		components: {LogoSvg},
		name: "Footer",
		computed:{
			...mapState('sanity',{
				site: 'siteSettings'
			})
		}
	};
</script>

<style lang="scss" scoped>
@import './assets/scss/config';

$outputTokenCSS: false;
@import './node_modules/gorko/gorko.scss';

.footer{

	&__top{
		display: grid;
		gap: get-size('900');

		@include media-query('md'){
			grid-template-columns: 25% 1fr 25%;
			align-items: center;
		}
	}

	&__bottom{

		display: grid;
		gap: get-size('400');
		justify-content: center;

		@include media-query('md'){
			grid-template-columns: 25% 1fr 25%;
			align-items: center;
			gap: get-size('900');
		}

		> a {
			justify-self: center;
		}

		> img{
			justify-self: center;

			@include media-query('md'){
				justify-self: end;
			}
		}

	}

	&__nav{
		justify-self: flex-end;

		@include media-query('md'){
			order: 3;
			text-align: right;
		}
	}

	&__socialmedia{
		display: flex;
		justify-content: center;
			@include media-query('md'){
			order: 2;
		}

		li{
			padding: 0 1em;

			a{
				transition: color 300ms ease-in-out;
				&:hover{
					color: get-color('secondary');
				}
			}
		}
	}

	&__info{
		@include media-query('md'){
			order: 1;
		}
	}
}

</style>
