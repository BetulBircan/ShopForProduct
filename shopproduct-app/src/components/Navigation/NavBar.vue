<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
           <div class="container px-4 px-lg-5">
               <router-link class="navbar-brand" active-class="active" to="/">Start Bootstrap</router-link>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                       <li class="nav-item"><router-link class="nav-link" active-class="active" aria-current="page" to="/">Home</router-link></li>
                       <li class="nav-item"><router-link class="nav-link" active-class="active" to="/about">About</router-link></li>
                       <li class="nav-item dropdown">
                           <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                               <li><router-link class="dropdown-item" active-class="active" to="/allproducts">All Products</router-link></li>
                               <li><hr class="dropdown-divider" /></li>
                               <li><router-link class="dropdown-item" to="/popular">Popular Items</router-link></li>
                               
                           </ul>
                       </li>
                   </ul>
                   <form class="d-flex" id="sepet">
                       <button class="btn btn-outline-dark" type="submit">
                           <i class="bi-cart-fill me-1"></i>
                           Cart
                           <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                       </button>
                   </form>
               </div>
           </div>
       </nav>
</template>

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
