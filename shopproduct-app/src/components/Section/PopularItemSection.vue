
<template>
    <div class="card">
        <DataView :value="populars" :layout="layout" :paginator="true" :rows="5" :sortOrder="sortOrder" :sortField="sortField">
			<template #header>
                <div class="grid grid-nogutter">
                    <div class="col-6" style="text-align: left">
                        <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)"/>
                    </div>
                </div>
			</template>

			<template #grid="slotProps">
				<div class="col-12 md:col-4">
					<div class="product-grid-item card">
						<div class="product-grid-item-top">
							<div>
								<i class="pi pi-tag product-category-icon"></i>
								<span class="product-category">{{slotProps.data.category}}</span>
							</div>
							
						</div>
						<div class="product-grid-item-content">
							<img :src="slotProps.data.imageurl" :alt="slotProps.data.title"/>
							<div class="product-name">{{slotProps.data.title}}</div>
							<div class="product-description">{{slotProps.data.description}}</div>
							<Rating :modelValue="slotProps.data.rating.rate" :readonly="true" :cancel="false"></Rating>
						</div>
						<div class="product-grid-item-bottom">
							<span class="product-price">₺{{slotProps.data.price}}</span>
							<Button icon="pi pi-shopping-cart" ></Button>
						</div>
					</div>
				</div>
			</template>
		</DataView>
	</div>
</template>

<script>
import Dropdown from 'primevue/dropdown';
//import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import DataView from 'primevue/dataview';
import Button from 'primevue/button';
import Rating from 'primevue/rating';


export default {
    components : {
        Dropdown,
        //DataViewLayoutOptions,
        DataView,
        Button,
		Rating
    },
    data() {
        return {
            products:  [],
            populars : [],
            layout: 'grid',
            sortKey: null,
            sortOrder: null,
            sortField: null,
            sortOptions: [
                {label: 'Price High to Low', value: '!price'},
                {label: 'Price Low to High', value: 'price'},
            ]
        }
    },
   
    created() {
        this.$appAxios.get(`/product`)
        .then(res =>{ 
            this.products = res.data
            this.populars = this.products.filter(p => p.rating.rate >= 4)
        })
    },
    mounted() {
        
    },
    methods: {
        onSortChange(event){
            const value = event.value.value;
            const sortValue = event.value;

            if (value.indexOf('!') === 0) {
                this.sortOrder = -1;
                this.sortField = value.substring(1, value.length);
                this.sortKey = sortValue;
            }
            else {
                this.sortOrder = 1;
                this.sortField = value;
                this.sortKey = sortValue;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    background: #ffffff;
    padding: 2rem;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 4px;
    margin-bottom: 2rem;
}
.p-dropdown {
    width: 14rem;
    font-weight: normal;
}

.product-name {
	font-size: 1.5rem;
	font-weight: 700;
}

.product-description {
	margin: 0 0 1rem 0;
}

.product-category-icon {
	vertical-align: middle;
	margin-right: .5rem;
}

.product-category {
	font-weight: 600;
	vertical-align: middle;
}

::v-deep(.product-grid-item) {
	margin: .5rem;
	border: 1px solid var(--surface-border);

	.product-grid-item-top,
	.product-grid-item-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	img {
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		margin: 2rem 0;
	}

	.product-grid-item-content {
		text-align: center;
	}

	.product-price {
		font-size: 1.5rem;
		font-weight: 600;
	}
}

@media screen and (max-width: 576px) {
	.product-list-item {
		flex-direction: column;
		align-items: center;

		img {
			margin: 2rem 0;
		}

		.product-list-detail {
			text-align: center;
		}

		.product-price {
			align-self: center;
		}

		.product-list-action {
			display: flex;
			flex-direction: column;
		}

		.product-list-action {
			margin-top: 2rem;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 100%;
		}
	}
}
</style>


<!-- 
<template>
    <div>

        <div class="card">
            <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
                <template #header>
                    <h5>Popüler Ürünler</h5>
                </template>
                <template #item="slotProps">
                    <div class="product-item">
                        <div class="product-item-content">
                            <div class="mb-3">
                                <img :src="slotProps.data.imageurl" :alt="slotProps.data.title" class="product-image" />
                            </div>
                            <div>
                                <h4 class="mb-3">{{ slotProps.data.title }}</h4>
                                <h6 class="mt-0 mb-3">₺{{ slotProps.data.price }}</h6>
                                <Rating class="justify-content-center" :modelValue="slotProps.data.rating.rate" :readonly="true" :cancel="false" />

                                <div class="car-buttons mt-5">
                                    <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" />
                                    <Button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" />
                                    <Button icon="pi pi-cog" class="p-button-help p-button-rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Carousel>
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
            products: [],
            populars : [],  
            
        
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
    components: {
        Carousel,
        Button,
        Rating
    },

    mounted() {
        this.$appAxios.get(`/product `)
            .then(res =>{
                this.products = res.data
               
                
            })
           

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

    }

    .product-image {
        width: 400px;
        height: 400px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
    }
}
</style> -->