<template>
<div>
    <PageHeader v-if="!pages.hidePageHeader" :pages="pages" />
    <div class="[ flow ] [ space-800 ]">
        <component v-for="item in pages.pageModules" :key="item._id" :is="componentMap[item._type]" :item="item" />
    </div>
</div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

import PageHeader from '@/components/PageHeader'
import BodyText from '@/components/pageModules/BodyText'
import ImageTextbox from '@/components/pageModules/ImageTextbox'
import HowToUse from '@/components/pageModules/HowToUse'
import Intro from '@/components/pageModules/Intro'
import PriceList from '@/components/pageModules/PriceList'
import CoverImage from '@/components/pageModules/CoverImage'
import Youtube from '@/components/pageModules/Youtube'


export default {
    async asyncData({ params, $sanity }) {
        const query = groq`*[_type == "pages" && slug.current == "${params.slug}"]{
            name,
            slug,
            headline,
            summary,
            showSitebar,
            hidePageHeader,
            pageModules[]{
                _key,
                products[]->,
                ...,
            }
        }[0]`
        const pages = await $sanity.fetch(query)
        return { pages }
    },
    components: {PageHeader},
    data(){
        return {
            componentMap: {
                bodyText: BodyText,
                imageTextBox: ImageTextbox,
                howToUse: HowToUse,
                intro: Intro,
                priceList: PriceList,
                coverImage: CoverImage,
                youtube: Youtube,
                youtube: Youtube
            }
        }
    }
}
</script>
