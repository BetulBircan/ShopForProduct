import axios from "axios"
export const appAxios=axios.create({
    baseURL : "https://shop-product.vercel.app/",
    withCredentials : false,
    headers : {
        tokenX : "myToken",
        "Content-Type" : "application/json"
    }
})
