const actions = {
    async nuxtServerInit({dispatch}) {
        await dispatch('sanity/fetchProducts')
        await dispatch('sanity/fetchSiteSettings')
    },
};

export default {
    actions
}