<template>
  <div>
    <Hero :home="home" />
    <Intro :home="home" />
	<System :home="home" />
	<Prices :home="home" />
	<NewsletterSignUp :home="home" />
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import System from "@/components/System";
import Prices from "@/components/Prices";
import NewsletterSignUp from "@/components/NewsletterSignUp";


export default {
		components: {Hero,Intro,System,Prices,NewsletterSignUp},
		async asyncData({ $sanity,store }) {
		const query = groq`*[_type == "home"]{
		intro{
			bgImage,
			tagline,
			headline,
			subHeadline,
			text,
			"video": video.asset->url,
			productImage
		},
		systems{
			headline,
			linkText,
			logos[]{
				image,
				_key,
				comingSoon
			}
		},
		featuredProducts{
			bgImage,
			products[]->{
				_id
			}
		},
		newsletter{
			headline,
			subHeadline,
			text
		}
		}[0]`
		const home = await $sanity.fetch(query)

		return { home }
		},

	};
</script>

<style lang="scss" scoped>
@import './assets/scss/config';

$outputTokenCSS: false;
@import './node_modules/gorko/gorko.scss';

</style>
