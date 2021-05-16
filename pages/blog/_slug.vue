<template>
    <div class="pt-lg">
        fdfds
    </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
    async asyncData({ params, $sanity }) {
        const query = groq`*[_type == "post" && slug.current == "${params.slug}"]{
            name,
            slug,
            headline,
            summary,
            body
        }[0]`
        const post = await $sanity.fetch(query)
        return { post }
    }
}
</script>
<style lang="scss" scoped>

</style>
