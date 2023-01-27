import axios from "axios"
export const appAxios=axios.create({
    baseURL : "https://shop-product.vercel.app/product",
    withCredentials : false,
    headers : {
        tokenX : "myToken",
        "Content-Type" : "application/json"
    }
})
