
<template>
	<div>
        
        <div class="card">
            <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" class="custom-carousel" :circular="true" :autoplayInterval="3000">
                <template #header>
                    <h5 class="d-flex align-items-center justify-content-center py-3">Ürünler</h5>
                </template>
                <template #item="slotProps">
                    <div class="product-item">
                        <div class="product-item-content">
                            <div class="mb-3">
                                <router-link :to="/product/+slotProps.data.id"><img :src="slotProps.data.imageurl" :alt="slotProps.data.title" class="product-image"  /></router-link>
                                
                            </div>
                            <div>
                                <h4 class="mb-1">{{slotProps.data.title}}</h4>
                                <h6 class="mt-0 mb-3">₺{{slotProps.data.price}}</h6>
                                <Rating class="mt-0 mb-3 sm:flex justify-content-center " :modelValue="slotProps.data.rating.rate" :readonly="true" :cancel="false"></Rating>
                                
                            </div>
                        </div>
                    </div>
                    
                </template>
                
            </Carousel>
            <Button class="p-button-text" @click="click" label="Tümünü Göster" />
        </div>

	</div>
</template>

<script>

import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import Rating from 'primevue/rating';





export default {
	
	data() {
		return {
            products: null,
			responsiveOptions: [
				{
					breakpoint: '1024px',
					numVisible: 3,
					numScroll: 3
				},
				{
					breakpoint: '600px',
					numVisible: 2,
					numScroll: 2
				},
				{
					breakpoint: '480px',
					numVisible: 1,
					numScroll: 1
				}
			]
		}
	},
    components : {
        Carousel,
        Button,
        Rating
    },

	mounted() {
        this.$appAxios.get(`/product`)
        .then(res => this.products = res.data.slice(0,9))
    

	},
    methods : {
        click() {
            this.$router.push("/allproducts")
            console.log(this.products);
        }
    }
}

</script>

<style lang="scss" scoped>
.product-item {
    .product-item-content {
        border: 1px solid var(--surface-border);
        border-radius: 3px;
        margin: .3rem;
        text-align: center;
        padding: 2rem 0;
        max-width: 336px;
        height: 329px;
        
    }

    .product-image {
        max-width: 164px;
        height: 109px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
    }
}
</style>