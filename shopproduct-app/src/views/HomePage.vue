<template>

    <CarouselComponent />
    <RelatedItemsSection />
    <PopularProductsSection />
    

</template>

<script>

import CarouselComponent from '@/components/PageContent/CarouselComponent.vue';
import PopularProductsSection from '@/components/Section/PopularProductsSection.vue';
import RelatedItemsSection from '../components/Section/RelatedItemsSection'


export default {
    components : {
    RelatedItemsSection,
    CarouselComponent,
    PopularProductsSection

}
}
</script>