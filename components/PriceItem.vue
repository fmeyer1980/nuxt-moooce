<template>
    <fragment>
        <div class="price-item bg-primary color-light-glare p-400 flow space-300" v-if="product.comingSoon == false">

            <div class="price-item__header text-100 weight-black">
                <p class="text-transform-up">{{product.name}}</p>
                <div class="price leading-none">
                    <p class="price__from text-sm">Fra <span class="color-primary-glare">DKK</span></p>
                    <div class="price__inner-wrapper">
                        <strong>{{ product.price }}</strong><span class="text-sm color-primary-glare">/md</span>
                    </div>
                </div>
            </div>

            <div class="">
                <p class="text-xxs color-primary-glare">VIDEO</p>
                <hr>
                <p v-for="item in product.videoContent" :key="item.item">
                    <del v-text="item" />
                </p>
            </div>

            <div class="moooce-hr-container">
                <p class="text-xxs color-primary-glare">Afspilning og ordre</p>
                <hr>
                <div v-text="product.playingInfo" />
            </div>

            <div class="moooce-hr-container">
                <p class="text-xxs color-primary-glare">Ordrefee</p>
                <hr>
                <p>8% ordre fee</p>
            </div>
            <nuxt-link class="btn" data-type="secondary" :to="{name:'signup'}" title="Start nu">Start nu</nuxt-link>

        </div>
        <div v-else class="price-item__placeholder">
            <img class="w-full" src="/images/bigbusiness.png" alt="Ny plan kommer snart" />
            <span class="coming-soon text-400 color-light leading-none">Kommer snart</span>
        </div>
    </fragment>
</template>

<script>
import {mapState} from 'vuex';
import { Fragment } from 'vue-fragment'
	export default {
		name: "PriceItem",
  		components: { Fragment },
		computed: {
			...mapState('sanity',{
				products: 'products'
			}),
			product(){
				return this.products[this.productId]
			}
		},
		props: {
			productId: String,
		}
	};
</script>

<style lang="scss" >
    @import './assets/scss/config';

    $outputTokenCSS: false;
    @import './node_modules/gorko/gorko.scss';

    .price-item{
        text-align: center;
        border-radius: 15px;


        &__header{
            display: flex;
            flex-direction: column;
            align-items: center;

            .price{
                width: max-content;
                display: flex;
                flex-direction: column;
                margin-top: .2em;

                &__from{
                    align-self: end;
                    margin-left: calc(-1 * var(--size-500))
                }
                
                strong{
                    font-size: 2.5em;
                }
            }
        }

        hr{
            border: none;
            width: 100%;
            height: 1px;
            background-color: get-color('primary-glare');
        }


        &__placeholder{
            position: relative;
            display: none;

            @include media-query('md'){
                display: block;
                margin: -1rem;
            }

            .coming-soon{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
                z-index: 10;
                text-align: center;
            }
            
        }
    }








</style>