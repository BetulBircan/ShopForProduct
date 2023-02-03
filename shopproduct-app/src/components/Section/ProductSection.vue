<template>
   
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
                           <button @click="addCart(product)" class="btn btn-outline-dark flex-shrink-0 me-3" type="button">
                               <i class="bi-cart-fill me-1"></i>
                               Sepete Ekle
                           </button>
                           
                           
                       </div>
                   </div>
               </div>
           </div>
       </section>
   
</template>

<script>

import {  mapMutations } from 'vuex'


export default {


   data() {
       return {
           productList: [],
       };
   },
   created() {
       this.$appAxios.get(`/product?id=${this.$route.params.id}`)
           .then(res => {
           console.log(res);
           this.productList = res.data;
       });
   },
   methods: {
       
       ...mapMutations({
           addCart: 'addBasket' 
   })

 },

}
</script>

