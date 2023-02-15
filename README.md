# ShopForProduct
- Bu proje ürün eklemek, ürünleri listelemek,ürün detayını göstermek vb. işlemleri gerçekleştirmek için oluşturuldu.
## Projede Kullanılan Teknolojiler ve Paketler
- VuejsCLI(Version 3)  `npm install -g @vue/cli`
- Axios(Get, Post, Put vb. İsteklerİiçin)    `npm install axios`
- Vue.js Router(Sayfalara Yönlendirmek İçin)  `npm install vue-router@4`
- Json Server(Fake Rest Api İçin)   `npm install -g json-server`
- Vuex(State -Durum- Güncellemesi İçin)   `npm install vuex@next --save`
- Primevue(Tasarımlar için)   `npm install primevue@^3 --save`   `npm install primeicons --save`
- SweeatAlert2(Alert Tasarımı İçin)  `npm install sweetalert2`
- PrimeFlex (Flex İçin)   `npm install primeflex`

**NOT :** Fake rest apinin adresi [buradaki](https://github.com/BetulBircan/ShopProduct) db.json adreste deploy edilmiş şekilde vardır. 

## Proje Açıklaması
- İlk olarak `vue create shopproduct-app` ile bir proje oluşturdum ve projem için gerekli template ve paketleri yükledim
- Daha sonra componentlere(bileşenlere) ayırdım.

![2023-02-15](https://user-images.githubusercontent.com/86554799/218880492-a672d9d8-bedc-4cf1-87e4-8b7926544766.png)

![2023-02-15 (1)](https://user-images.githubusercontent.com/86554799/218880539-b36cba8a-5b5c-45b7-afba-db53a3023367.png)

- Sonrasında Navbar yani yukarıdaki Anasayfa, Hakkımızda, Ürünler gibi sekmeler ve bu sayfalara yönlendirmek için gerekli kodları yazdım. Yönlendirirken <router-link></router-link> arasına yönlendirecek sayfalara gidecek şekilde ayarladım. Kodları [NavBar.vue](https://github.com/BetulBircan/ShopForProduct/blob/main/shopproduct-app/src/components/Navigation/NavBar.vue) kısmından inceleyebilirsiniz.

![2023-02-15 (2)](https://user-images.githubusercontent.com/86554799/218881705-fe36ff1f-5683-4def-a0b8-6dcadf2182af.png)

- Anasayfa, Hakkımızda, Ürünler, Ürün Ekleme gibi sayfalara yönlendirme işlemini gerçekleştirmek için **router.js** dosyasını oluşturdum ve gerekli endpointleri yazdım. Kodları [router.js](https://github.com/BetulBircan/ShopForProduct/blob/main/shopproduct-app/src/router.js) kısmından inceleyebilirsiniz.
- axios ile requestleri(get, post, put) gerçekleştirmek için content-type vb bilgileri içeren gerekli kodları appAxios dosyası içerisine ekledim. Kodları [utilities/appAxios](https://github.com/BetulBircan/ShopForProduct/blob/main/shopproduct-app/src/utils/appAxios.js) kısmından inceleyebilirsiniz.
- router ve appAxios dosyalarına her componentten ve sayfadan erişmek için gerekli kodları ise main.js dosyası içerisine ekledim. Kodları [main.js](https://github.com/BetulBircan/ShopForProduct/blob/main/shopproduct-app/src/main.js) kısmından inceleyebillirsiniz.
- Anasayfada gözükecek olan ürünleri gösteren cardları RelatedItemSection componentine, Popüler ürünleri gösteren cardları da PopularProductSection componentine ayırdım ve gerekli css ve javascript kodlarıını yazdım.
- Ürünler için [ShopForProduct/shopproduct-app/src/components/Section/RelatedItemSection.vue](https://github.com/BetulBircan/ShopForProduct/blob/main/shopproduct-app/src/components/Section/RelatedItemSection.vue) kısmından kodları detaylı olarak inceleyebilirsiniz.

![2023-02-16](https://user-images.githubusercontent.com/86554799/219176649-da97f830-2122-4165-ba0a-7e85b3e7bf3b.png)

-  Popüler Ürünler için [ShopForProduct/shopproduct-app/src/components/Section/PopularProductsSection.vue](https://github.com/BetulBircan/ShopForProduct/blob/main/shopproduct-app/src/components/Section/PopularProductsSection.vue) kısmından kodları detaylı olarak inceleyebilirsiniz.

![2023-02-16 (4)](https://user-images.githubusercontent.com/86554799/219176844-639b60fd-60bb-4532-8e8b-7649d62aac0f.png)

- Bunları anasayfada göstermek için ise **views** klasöründen **HomePage.vue** dosyasını oluşturdum ve RelatedItemSeciton ile PopulerProductSection componentlerini bu dosya içerisine dahil ettim.

![2023-02-16 (5)](https://user-images.githubusercontent.com/86554799/219189969-c4f7d06c-45b1-4c76-bda5-738245b750e0.png)

Detayları [ShopForProduct/shopproduct-app/src/views/HomePage.vue](https://github.com/BetulBircan/ShopForProduct/blob/main/shopproduct-app/src/views/HomePage.vue) kısmından inceleyebilirsiniz.

- Tüm ürünleri göstermek için **components** klasörü içerisine **AllProductsSection.vue** componentini oluşturdum ve gerekli tasarım ile javascript kodlarını yazdım.  Detaylarını [ShopForProduct/shopproduct-app/src/components/Section/AllProductsSection.vue](https://github.com/BetulBircan/ShopForProduct/blob/main/shopproduct-app/src/components/Section/AllProductsSection.vue) kısmından inceleyebilirsiniz.

![2023-02-16 (6)](https://user-images.githubusercontent.com/86554799/219196174-1d4348ce-8c6f-4976-91e0-bd1114510987.png)

- Daha sonra bu componenti **views** klasörü içerisindeki **AllProducts.vue** dosyasına dahil ettim.

![2023-02-16 (8)](https://user-images.githubusercontent.com/86554799/219206035-2a7974fb-6ffe-4de1-be8b-6d7bf9948437.png)

- Popüler olan(4 yıldız ve üzeri olanlar) tüm ürünleri göstermek için **components** klasörü içerisine **PopularItemSection** componentini oluşturdum ve gerekli tasarım ile javascript kodlarını yazdım. Detaylarını [ShopForProduct/shopproduct-app/src/components/Section/PopularItemSection.vue](https://github.com/BetulBircan/ShopForProduct/blob/main/shopproduct-app/src/components/Section/PopularItemSection.vue) kısmından inceleyebilirsiniz.

![2023-02-16 (7)](https://user-images.githubusercontent.com/86554799/219204950-0cb99cef-153e-46b8-adc4-2d802a094baf.png)


