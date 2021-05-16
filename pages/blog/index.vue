<template>
<div>

<h1>dsdsds</h1>
    <div class="posts [ py-700  ]">
        <div v-for="post in posts" :key="post._id">
            <!-- <a v-bind:href="'/blog'+ post.slug.current" v-text="post.name" /> -->
             <nuxt-link :to="{name:'blog-slug' , params:{slug:post.slug.current} }" aria-label="Gå til forsiden">{{ post.name }}</nuxt-link>
        </div>
    </div>
    </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
    async asyncData({ $sanity }) {
        const query = groq`*[_type == "post"]{
            name,
            slug,
            headline,
            summary,
            body
        }`
        const posts = await $sanity.fetch(query)
        return { posts }
    }
}
</script>
<style lang="scss" scoped>

</style>