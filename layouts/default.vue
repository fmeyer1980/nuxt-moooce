<template>
  <div id="body" :class="bodyClasses">
    <siteHeader />
    <main class="">
      <Nuxt :class="pageClasses" />
    </main>
    <SiteFooter />
    <Menu />
  </div>
</template>
x
<script>
import {mapState} from "vuex";
import SiteHeader from "@/components/SiteHeader";
import Menu from "@/components/Menu";
import SiteFooter from "@/components/SiteFooter";

export default {
  components: {SiteHeader,SiteFooter,Menu},
   computed:{
			...mapState('view', {
				pageClasses: 'pageClasses',
				menuOpen: 'menuOpen'
			}),
      bodyClasses(){
				let bodyClasses = [];

				if(this.menuOpen)
					bodyClasses.push('open');

				return bodyClasses;
			}
		}
}
</script>


<style lang="scss">

</style>
