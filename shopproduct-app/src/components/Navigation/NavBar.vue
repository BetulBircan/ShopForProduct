<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
           <div id="sepet" class="container px-4 px-lg-5">
               <router-link class="navbar-brand" active-class="active" to="/">Shop Products</router-link>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                       <li class="nav-item"><router-link class="nav-link" active-class="active" aria-current="page" to="/">Anasayfa</router-link></li>
                       <li class="nav-item"><router-link class="nav-link" active-class="active" to="/about">Hakkımızda</router-link></li>
                       <li class="nav-item dropdown">
                           <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Ürünler</a>
                           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                               <li><router-link class="dropdown-item" active-class="active" to="/allproducts">Tüm Ürünler</router-link></li>
                               <li><hr class="dropdown-divider" /></li>
                               <li><router-link class="dropdown-item" to="/popular">Popular Ürünler</router-link></li>
                               
                           </ul>
                       </li>
                       <li class="nav-item dropdown">
                           <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Ürün İşlemleri</a>
                           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                               <li><router-link class="dropdown-item" active-class="active" to="/addproduct">Ürün Ekleme</router-link></li>
                               <!-- <li><hr class="dropdown-divider" /></li>
                               <li><router-link class="dropdown-item" to="/popular">Popular Ürünler</router-link></li> -->
                               
                           </ul>
                       </li>
                   </ul>
                   <form class="d-flex">
                    <Button type="button" @click="$router.push({ name : 'ProductCart' })" icon="pi pi-shopping-cart" class="p-button-sm" :badge="store.state.basket.length" label="Sepetim : "></Button>
                   </form>
               </div>
           </div>
       </nav>
   
</template>


<script>
import { useStore } from "vuex";
import Button from 'primevue/button';

export default {
   componets : {
    Button
   },
   setup() {
   const store = useStore();
         return  {store}
      
 },
}
</script>





<style scoped>
.nav-link {
 padding: 5px 10px;
 text-decoration: none;
 border: 1px solid #fa6558;
 color: #fa6558;
 display: inline-block;
 margin-right: 5px;
 margin-top: 5px;
}

.active {
 background-color: #fa6558;
 color: #fff;
}
</style>
