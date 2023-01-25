<template>
    <h3 class="fw-bolder p-4 ">Ürünler</h3>
    <div class="d-flex justify-content-end p-4">
        <router-link class="btn btn-primary btn-sm" to="/addProduct" active-class="active">+ Yeni Ekle</router-link>
        </div>

    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-start">
                    <div class="col mb-5" v-for="item in productList" :key="item.id">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" v-bind:src="item.imageurl"/>
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">{{ item.title }}</h5>
                                    {{ item.description }}
                                    <!-- Product name-->
                                    <!-- Product price-->
                                    <br>
                                    <br>
                                    <b>{{ item.price }} TL</b>
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><router-link class="btn btn-outline-dark mt-auto" :to="/product/+item.id">View options</router-link></div>
                            </div>
                        </div>
                    </div>
                </div>
              
</template>

<script>
//:to="'/product/'+item.id

export default {
    data() {
        return {
            productList : [],
            product : []
        }
    },
    created() {
       
        this.$appAxios.get(`/product`)
        .then(res => this.productList = res.data)
    },
    // methods : {
    //     getid() {
    //         const id=e.target.value
    //     this.$appAxios.get(`/product?id=${id}`)
    //     .then(res =>{
    //         console.log(res);
    //         this.product = res.data
    //     })
    //     this.$router.push({ name : 'ProductPage' })
    //     }
    // }
    

   
}


</script>