import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        name : "HomePage",
        path : "/",
        component : ()=>import("./views/HomePage")
    },
    {
        name : "AboutPage",
        path : "/about",
        component : () => import("./views/AboutPage")
    },
    {
        name : "ProductPage",
        path : "/product/:id",
        component : () => import("./views/ProductPage")
    },
    {
        name : "AllProducts",
        path : "/allproducts",
        component : () => import("./views/AllProducts")
    },
    {
       name : "AddProduct",
       path : "/addproduct",
       component : () => import("./views/AddProduct")
    },
    {
        name : "PopularItem",
        path : "/popular",
        component : () => import("./views/PopularItem")
    },
    {
        name : "UpdateProduct",
        path : "/updateproduct/:id",
        component : () => import("./views/UpdateProduct")
    },
    {
        name : "ProductCart",
        path : "/productcart",
        component : () => import("./views/ProductCart")
    }
]

const router =createRouter({
    routes,
    history : createWebHashHistory()
})

export default router