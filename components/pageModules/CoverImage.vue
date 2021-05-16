<template>

    <img v-if="item.image.asset"
        class="cover-image"
        width="1800"
        height="900"
        :src="$urlFor(item.image).width(1800).height(900)"
        :alt="item.image.alt"
        loading="lazy"
    />
</template>

<script>
	export default {
		name: "CoverImage",
        props:{
            item: Object
        }
    }
</script>

<style lang="scss" scoped>

.cover-image{
    width: 100%;
    display: block;
}
</style>