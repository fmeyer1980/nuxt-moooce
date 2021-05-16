<template>
    <div class="page-header [ container-narrow flow ] [ pt-xl pb-600 space-xs ]">
        <h1 class="[] [ measure-micro ]" v-text="(pages.headline) ? pages.headline : pages.name" />
        <p class="[] [ text-300 measure-compact leading-tight ]" v-if="pages.summary" v-text="pages.summary" />
    </div>
</template>

<script>
	export default {
		name: "PageHeader",
        props:{
            pages: Object
        }
    }
</script>