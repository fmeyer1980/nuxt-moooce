<template>
    <section class="newsletter [ container ] bg-primary color-light-glare pt-900 pb-900">
        <div class="color-secondary flow space-300">
            <p class="h1 text-600 measure-micro-xs" v-text="home.newsletter.headline" />
            <p class="text-300 leading-tight weight-bold measure-compact space-xs" v-text="home.newsletter.subHeadline" />
            <p class="text-100 weight-bold measure-mid" v-text="home.newsletter.text" />
        </div>
        <form class="[ flow ] text-xs space-100 validate" action="https://moooce.us7.list-manage.com/subscribe/post?u=93d25ee394f02c0ad09b11311&amp;id=9509cc543a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
            <label class="input-label">
                <span>Navn *</span>
                <input type="text" value="" name="NAME" class="required">
            </label>
            <label class="input-label">
                <span>E-mail *</span>
                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
            </label>
            <label class="input-label">
                <span>Url til din webshop(hvis du har en)</span>
                <input type="url" value="" name="WEBSITE" class=" url" id="mce-WEBSITE">
            </label>
            <div class="cluster-grow space-100">
                <label class="checkbox flow-left space-xs">
                    <span class="checkbox__input">
                        <input type="checkbox" name="checkbox">
                        <span class="checkbox__control">
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                                <path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' />
                            </svg>
                            </span>
                        </span>
                    <span class="radio__label color-light">Ja, I må gerne sende mig emails.</span>
                </label>
                <button name="subscribe" id="mc-embedded-subscribe" class="btn bg-secondary" data-type="secondary">Start nu</button>
            </div>
        </form>
    </section>
</template>

<script>
	export default {
		name: "NewsletterSignUp",
		props: {
			home: Object,
		}
	};
</script>

<style lang="scss" scoped>
@import './assets/scss/config';

$outputTokenCSS: false;
@import './node_modules/gorko/gorko.scss';

    .newsletter{
        display: flex;
        flex-wrap: wrap;
        margin: calc(-1 * var(--size-400));

        > * {
            margin: get-size('400');
        }

        > div {
            flex-basis: 0;
            flex-grow: 999;
            min-width: 40%;
        }

        > form{
            flex-basis: 25rem;
            min-height: 20rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;

            @include media-query('xl'){
                flex-basis: 30rem;
            }

            .input-label{
                display: flex;
                flex-direction: column;

                span{
                    margin-bottom: .3em;
                }
            }

            input{
                background-color: get-color('light');
                color: get-color('dark-shade');
                border: none;
                padding: .8em 1.2em;
                @include apply-utility('rounded', 'small');
                &:focus{
                    outline: 2px solid get-color('secondary');
                }
            }

            button{
                background-color: get-color('secondary');
                align-self: flex-start;
            }
        }

   

        .checkbox {
            display: flex;
            align-items: center;
        }

        .checkbox__control {
            display: inline-grid;
            width: 2.6em;
            height: 2.6em;
            border-radius: 50%;
            background-color: get-color('secondary');
            color: get-color('secondary');
            display: flex;
            align-items: center;
            justify-content: center;

        svg {
            transition: transform 0.1s ease-in 25ms;
            transform: scale(0);
            transform-origin: center;
            height: 50%;

        }
        }

        .checkbox__input {
            display: grid;
            grid-template-areas: "checkbox";


            > * {
                grid-area: checkbox;
            }

            input {
                opacity: 0;
                width: 1em;
                height: 1em;

                &:checked + .checkbox__control {
                    color: get-color('primary');
                    svg{
                        border-radius: 50%;
                        transform: scale(1);
                    }
                
                }
            }
        }
    }
</style>