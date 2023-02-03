
<template>
    <div>
        <DataTable :value="products" responsiveLayout="scroll">
            <template #header>
                <div class="table-header">
                    Products
                    <Button icon="pi pi-refresh" />
                </div>
            </template>
            <Column field="title" header="Title"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="slotProps.data.imageurl" class="product-image" />
                </template>
            </Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="rate" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating.rate" :readonly="true" :cancel="false" />
                </template>
            </Column>
            <Column field="quantity" header="Quantity">
                <template #body="slotProps">
                    <input class="form-control text-center me-3" id="inputQuantity" type="num" v-model="slotProps.data.quantity"
                        style="max-width: 3rem" />
                    <button @click="increase(slotProps.data)" class="text-center me-1" > + </button>
                    <button @click="decrease(slotProps.data)" class=" text-center me-1"> - </button>
                </template>
            </Column>
            <Column header="Sil">
                <template #body>
                    <Button label="Sil" @click="deleteCart(products)" icon="pi pi-trash"></Button>
                </template>
            </Column>
            <template #footer>
                Toplam {{ products? products.length : 0 }} ürün bulunmaktadır.
                <br>
                <br>
                <Button @click="$router.push('/allproducts')" label="Alışverişe Devam Et" />
            </template>
        </DataTable>
    </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Rating from 'primevue/rating';
import {  useStore } from 'vuex'
import {  mapMutations } from 'vuex'




export default {
    setup() {
        const store = useStore();
          return  {store}
       
    },
    data() {
        return {
            products: null,
        
          
            
        }
    },
    components: {
        DataTable,
        Column,
        Button,
        Rating
    },

    created() {
        this.$appAxios.get(`/product`)
            .then(res => {
                console.log(res);
                this.products = this.store.state.basket

                
            })
            
            
            
    },

    methods: {
        formatCurrency(value) {
            return value.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' });
        },
        ...mapMutations({
            addCart: 'addBasket' ,
            increase : 'increaseQuantity',
            decrease : 'decreaseQuantity',
            deleteCart : 'deleteBasket'

    }),
    
    }

}
</script>



<style lang="scss" scoped>
.table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}
</style>                    
