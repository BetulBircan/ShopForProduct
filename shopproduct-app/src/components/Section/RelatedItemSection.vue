<template>
    <section class="py-5 bg-light">
           <div class="container px-4 px-lg-5 mt-5">
               <h2 class="fw-bolder mb-4">Related Products</h2>
               <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-start">
                   <div class="col mb-5" v-for="product in products" :key="product.id">
                       <div class="card h-100">
                           <!-- Sale badge-->
                           <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem"></div>
                           <!-- Product image-->
                           <img class="card-img-top" :src="product.imageurl" />
                           <!-- Product details-->
                           <div class="card-body p-4">
                               <div class="text-center">
                                   <!-- Product name-->
                                   <h5 class="fw-bolder">{{ product.title }}</h5>
                                   <!-- Product price-->
                                   <b>{{ product.price }} TL</b>
                               </div>
                           </div>
                           <!-- Product actions-->
                           <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                           </div>
                       </div>
                   </div>
                 
               </div>
           </div>
           <div class="text-center align-items-center justify-content-center"><router-link class="btn btn-outline-dark mt-auto" to="/allproducts">Tüm Ürünleri Göster</router-link></div>  
       </section>
</template>

<script>
export default {
   data() {
       return {
           products: []
       }
   },
   created() {
       this.$appAxios.get("/product?_limit=4")
           .then(res => {
               this.products = res.data
           })
   }
}
</script>