<template>
    <NavBar :addCount = "addCount" />
    <section class="py-5">
           <div class="container px-4 px-lg-5 my-5" v-for="product in productList" :key="product">
               <div class="row gx-4 gx-lg-5 align-items-center">
                   <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" :src="product.imageurl" /></div>
                   <div class="col-md-6">
                       <div class="small mb-1">Ürün No: {{ product.id }}</div>
                       <h1 class="display-5 fw-bolder">Ürün Adı : {{ product.title }}</h1>
                       <div class="fs-5 mb-5">
                           <span>Price : {{product.price}} TL</span>
                       </div>
                       <p class="lead">{{ product.description }}</p>
                       <p class="lead"><b>Rate</b> : {{ product.rating.rate }}</p>
                       <p class="lead"><b>Count</b> : {{ product.rating.count }}</p>
                       <div class="d-flex">
                        <input  class="form-control text-center me-3" id="inputQuantity" type="num" v-model="count" style="max-width: 3rem" />
                            <button class="text-center me-0" @click="arttır" > + </button>
                            <button class=" text-center me-0" @click="azalt" > - </button>
                            <button @click="addCart" class="btn btn-outline-dark flex-shrink-0 me-3" type="button">
                                <i class="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                       </div>
                   </div>
               </div>
           </div>
       </section>
</template>

<script>
import NavBar from '../Navigation/NavBar.vue';
import Swal from 'sweetalert2'
export default {
   data() {
       return {
           productList : [],
           
       }
   },
   created() {
    
       this.$appAxios.get(`/product?id=${ this.$route.params.id}`)
       .then(res =>{
           console.log(res);
           this.productList = res.data
       } )
   },
   components: { NavBar }
}
</script>
<script setup>
import { ref } from 'vue'

const count = ref(0)
const addCount = ref(0)
    const arttır = () => {
        count.value ++
    }
    const azalt = () => {
        count.value--
        
    }
   
    const addCart = () => {
        addCount.value += count.value
        console.log(addCount.value);
        Swal.fire(
  'Sepete Eklendi!',
  'Sepete Ekleme İşlemi Başarılı!',
  'success'
)
        console.log(count.value);
    }
</script>