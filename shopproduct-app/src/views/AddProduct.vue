<template>
    <div class="form-area card border p-2">
        <div class="mb-3">
            <label for="title" class="form-label">Ürün Adı</label>
            <input type="text" v-model="productData.title" class="form-control" id="title" placeholder="Ürün Adı">
        </div>
        <div class="mb-3">
            <label for="price" class="form-label">Ürün Fiyatı</label>
            <input type="number" v-model="productData.price" class="form-control" id="price" placeholder="Fiyat">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Ürün Açıklaması</label>
            <textarea class="form-control" v-model="productData.description" id="description" placeholder="Açıklama..." rows="3"></textarea>
        </div>
        <div class="mb-3">
            <label for="imageurl" class="form-label">İmage</label>
            <input type="text" v-model="productData.imageurl" class="form-control" id="imageurl" placeholder="https.//....">
        </div>

        <div class="mb-3">
            <label for="category" class="form-label">Kategori</label>
            <input type="text" v-model="productData.category" class="form-control" id="category" placeholder="Kategori">
        </div>

        <div class="mb-3">
            <label for="rate" class="form-label">Rate</label>
            <input type="number" v-model="productData.rating.rate" class="form-control" id="rate" placeholder="Rate">
        </div>

        <div class="mb-3">
            <label for="count" class="form-label">Count</label>
            <input type="text" v-model="productData.rating.count" class="form-control" id="count" placeholder="Count">
        </div>
       
       <div class="d-flex justify-content-end align-items-center">
            <button class="btn btn-sm btn-secondary me-1" @click="$router.push({ name : 'HomePage' })">İptal</button>
            <button class="btn btn-sm btn-primary" @click="onSave">Kaydet</button>
        </div> 
    </div>
</template>

<script>


export default {
    
    data() {
        return {
            productData : {
                title : null,
                imageurl : null,
                description : null,
                price : null,
                category : null,
                rating : {
                    rate : null,
                    count: null
                }
            }
        }
    },
    methods : {
        onSave() {
            console.log(this.productData)

           this.$appAxios.post("/product",this.productData)
            .then(save_response => {
                console.log("save_response", save_response);
                this.resetData()
                this.$router.push("/allproducts")
            })
        },
        resetData() {
            Object.keys(this.productData).forEach(key => {this.productData[key]=null})
        }
    }
}
</script>