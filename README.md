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
