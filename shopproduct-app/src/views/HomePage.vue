<template>
    <CarouselComponent />
    <RelatedItemSection />
    <PopularProductsSection />


</template>

<script>

import CarouselComponent from '@/components/PageContent/CarouselComponent.vue';
import RelatedItemSection from '../components/Section/RelatedItemSection.vue'
import PopularProductsSection from '@/components/Section/PopularProductsSection.vue'

export default {
    components : {
    RelatedItemSection,
    CarouselComponent,
    PopularProductsSection
}
}
</script>