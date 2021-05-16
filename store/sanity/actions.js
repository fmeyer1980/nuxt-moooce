import { groq } from '@nuxtjs/sanity'

 export function fetchProducts(context) {
      return new Promise((resolve,reject) => {
        const query = groq`*[_type == "products"]{
            _id,
            name,
            price,
            videoContent,
            playingInfo,
            ordrefee,
            comingSoon
            }`
            this.$sanity.fetch(query)
            .then(response => {
                context.commit('setProducts',response)
                resolve(response);
            })
            .catch(error => {
                reject(error);
            })
      })
  }

  export function fetchSiteSettings(context) {
    return new Promise((resolve,reject) => {
      const query = groq`*[_type == "siteSettings"]{
          name,
          address,
          zip,
          country,
          mail,
          phone,
          asideMenu[]->,
          mainMenu[]->
          }`
          this.$sanity.fetch(query)
          .then(response => {
              context.commit('setSiteSettings',response[0])
              resolve(response);
          })
          .catch(error => {
              reject(error);
          })
    })
}